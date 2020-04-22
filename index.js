#!/usr/bin/env node
const path = require("path");
const escapeStringRegexp = require("escape-string-regexp");
const replace = require("replace-in-file");
const replaceList = require("./replaceList");

if (!process.argv[2]) {
  console.error("Error: You must provide a relative path as an argument!");
  process.exit();
}

const asyncReplace = async () => {
  let from = [];
  let to = [];

  // convert to "replace-in-file" compliant format
  replaceList.forEach((replacement) => {
    // check if it is not followed by any of letter/number/_ to make sure something like $orangeBorder does not get replaced, because we only want to replace
    const regexp = `${escapeStringRegexp(replacement.replace)}(?![a-zA-Z0-9_])`;
    from.push(new RegExp(regexp, "g"));
    to.push(replacement.with);
  });

  const directory = path.resolve(process.cwd(), process.argv[2]);
  try {
    const options = {
      files: `${directory}/**`,
      from,
      to,
      dry: false,
      countMatches: true,
    };

    const results = await replace(options);
    console.log(
      "Changed files:",
      results
        .filter((result) => result.hasChanged)
        .map((result) => {
          return { file: result.file, changes: result.numReplacements };
        })
    );
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

asyncReplace();
