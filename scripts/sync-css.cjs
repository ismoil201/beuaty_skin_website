const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const marketplace = fs.readFileSync(path.join(root, "src/styles/marketplace.css"), "utf8");
const variables = fs.readFileSync(path.join(root, "src/styles/variables.css"), "utf8");
const polish = fs.readFileSync(path.join(root, "src/styles/polish.css"), "utf8");
fs.writeFileSync(
  path.join(root, "public/styles.css"),
  `${marketplace}\n\n/* Theme overrides */\n${variables}\n\n/* UI polish layer (loaded last) */\n${polish}`
);
console.log("Synced public/styles.css");
