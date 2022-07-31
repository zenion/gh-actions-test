const glob = require("@actions/glob");
const fs = require("fs");

(async () => {
  const patterns = ["**/*.md", "!node_modules/**"];
  const globber = await glob.create(patterns.join("\n"));
  const files = await globber.glob();

  for (let file of files) {
    console.log(file);
    const fileData = fs.readFileSync(file, "utf8");
    // do something with fileData
  }
})();
