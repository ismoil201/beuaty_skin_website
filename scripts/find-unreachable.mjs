import { readdirSync, statSync, readFileSync, existsSync } from "fs";
import { join, dirname, resolve, relative } from "path";

const root = resolve("src");
const entry = resolve("src/main.js");
const allJs = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith(".js")) allJs.push(p);
  }
}
walk(root);

const importRe =
  /(?:import|export)\s+[^'";]*?from\s+['"]([^'"]+)['"]|import\s*\(\s*['"]([^'"]+)['"]\s*\)/g;

function resolveImport(fromFile, spec) {
  if (!spec.startsWith(".")) return null;
  const base = resolve(dirname(fromFile), spec);
  const candidates = [base, `${base}.js`, join(base, "index.js")];
  for (const c of candidates) {
    if (existsSync(c)) return c;
  }
  return null;
}

const reachable = new Set();
const queue = [entry];

while (queue.length) {
  const file = queue.pop();
  if (!file || reachable.has(file)) continue;
  reachable.add(file);
  let text = "";
  try {
    text = readFileSync(file, "utf8");
  } catch {
    continue;
  }
  let m;
  importRe.lastIndex = 0;
  while ((m = importRe.exec(text))) {
    const spec = m[1] || m[2];
    const resolved = resolveImport(file, spec);
    if (resolved && resolved.startsWith(root)) queue.push(resolved);
  }
}

const unreachable = allJs.filter((f) => !reachable.has(f)).sort();
console.log(`REACHABLE ${reachable.size}`);
console.log(`TOTAL ${allJs.length}`);
console.log(`UNREACHABLE ${unreachable.length}`);
for (const f of unreachable) console.log(relative(root, f));

const areas = {};
let totalLoc = 0;
for (const file of reachable) {
  const rel = relative(root, file).replace(/\\/g, "/");
  const area = rel.includes("/") ? rel.split("/")[0] : "(root)";
  const lines = readFileSync(file, "utf8").split(/\r?\n/).length;
  totalLoc += lines;
  areas[area] = areas[area] || { files: 0, loc: 0 };
  areas[area].files += 1;
  areas[area].loc += lines;
}
console.log(`\nPRODUCTION_LOC ${totalLoc}`);
for (const [name, stats] of Object.entries(areas).sort((a, b) => b[1].loc - a[1].loc)) {
  console.log(`  ${name}: ${stats.files} files, ${stats.loc} LOC`);
}
