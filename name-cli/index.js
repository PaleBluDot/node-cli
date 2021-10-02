#!/usr/bin/env node

const pkg = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const sym = require("log-symbols");

const log = console.log;

// Alerts
const error = chalk.bold.keyword("red");
const warning = chalk.bold.keyword("orange");
const success = chalk.bold.keyword("green");
const info = chalk.bold.keyword("blue");

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

log(`
${sym.info} ${info(`INFO:`)} I'm working no the NodeCLI.com course

${sym.error} ${error(`ERROR:`)} I'm on vacation. Close the windows!

${sym.warning} ${warning(`WARNING:`)} Please don't copy me.

${sym.success} ${success(`SUCCESS:`)} Thanks for checking out the CLI!
`);
