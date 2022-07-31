const glob = require("@actions/glob");
const fs = require("fs");

(async () => {
  const patterns = ["**/*.md"];
  const globber = await glob.create(patterns.join("\n"));
  const files = await globber.glob();

  for (let file of files) {
    console.log(file);
    console.log("-----------------------------");
    console.log(fs.readFileSync(file, "utf8"));
  }
})();
