const escapeStringRegexp = require("escape-string-regexp");
const path = require("path");
const replace = require("replace-in-file");
const replaceList = require("./replaceList");

if (!process.argv[2]) {
  console.error("Error: You must provide a relative path as an argument!");
  process.exit();
}

const convertToScssVariable = (JssVariable) =>
  `$${JssVariable.replace("jssGlobals.", "").replace(/\./g, "_")}`;

const asyncReplace = async () => {
  let from = [];
  let to = [];

  // convert to "replace-in-file" compliant format for CSSinJS
  replaceList.forEach((replacement) => {
    from.push(new RegExp(escapeStringRegexp(replacement.replace), "g"));
    to.push(replacement.with);
  });

  // convert to "replace-in-file" compliant format for SCSS
  replaceList.forEach((replacement) => {
    const scssVariable = convertToScssVariable(replacement.replace);
    from.push(new RegExp(escapeStringRegexp(scssVariable), "g"));

    let scssValue;
    if (
      replacement.with[0] === "`" ||
      replacement.with[0] === "'" ||
      replacement.with[0] === '"'
    ) {
      scssValue = replacement.with;
    } else {
      scssValue = convertToScssVariable(replacement.with);
    }
    to.push(scssValue);
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
