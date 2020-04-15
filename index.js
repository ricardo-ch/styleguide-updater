#!/usr/bin/env node
const path = require("path");
const escapeStringRegexp = require("escape-string-regexp");
const replace = require("replace-in-file");
const replaceList = require("./replaceList");

const asyncReplace = async () => {
  let from = [];
  let to = [];

  replaceList.forEach((replacement) => {
    from.push(new RegExp(escapeStringRegexp(replacement.replace), "g"));
    to.push(replacement.with);
  });

  const directory = path.resolve(process.cwd(), process.argv[2]);
  try {
    const options = {
      files: `${directory}/**`,
      from,
      to,
      dry: true,
      countMatches: true,
    };

    const results = await replace(options);
    console.log(
      "Changed files:",
      results
        .filter((result) => result.hasChanged)
        .map((result) => {
          return { file: result.file, count: result.numReplacements };
        })
    );
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

asyncReplace();
