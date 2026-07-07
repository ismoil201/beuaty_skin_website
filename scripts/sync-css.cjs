const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const files = [
  "design-system.css",
  "marketplace.css",
  "variables.css",
  "polish.css",
  "premium.css",
  "phase2.css",
  "art-direction.css",
  "final-qa.css",
  "homepage-luxury.css",
];
const parts = files.map((file) => {
  const filePath = path.join(root, "src/styles", file);
  return `/* ===== ${file} ===== */\n${fs.readFileSync(filePath, "utf8")}`;
});
fs.writeFileSync(path.join(root, "public/styles.css"), parts.join("\n\n"));
console.log("Synced public/styles.css");
