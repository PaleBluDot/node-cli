#!/usr/bin/env node

const pkg = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const log = console.log;

const error = chalk.bold.red;
const warning = chalk.keyword("orange");
const success = chalk.keyword("green");
const info = chalk.keyword("blue");

welcome({
	title: `Pavel Sanchez`,
	tagLine: "Learn some more",
	description: pkg.description,
	version: pkg.version,
	bgColor: "#0055aa",
	Color: "#ffff00",
	bold: true,
	clear: true,
});

log(`
${chalk.italic.whiteBright(
	`Experienced digital marketer working in non-profit. Skilled in HTML emails, front-end web development, and UI design.`
)}

${chalk.bgYellow.hex("#121212")(" Website: ")}${chalk.hex("#a6a6a6")(
	` https://pavelsanchez.com `
)}
${chalk.bgYellow.hex("#121212")(" Github:  ")}${chalk.hex("#a6a6a6")(
	` https://github.com/PaleBluDot `
)}
`);
