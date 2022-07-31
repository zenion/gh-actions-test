const fs = require("fs");

console.log("WORKSPACE LOCATION: " + process.env.GITHUB_WORKSPACE);
console.log(fs.readFileSync(process.env.GITHUB_WORKSPACE));
