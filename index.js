const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");

console.log("WORKSPACE LOCATION: " + process.env.GITHUB_WORKSPACE);

console.log(fs.readFileSync(process.env.GITHUB_WORKSPACE));
