#!/usr/bin/env node

const pkg = require("./package.json");
const welcome = require("cli-welcome");

welcome({
	title: pkg.name,
	tagLine: "Learn some more",
	description: pkg.description,
	version: pkg.version,
	bgColor: "#FADC00",
	Color: "#000000",
	bold: true,
	clear: true,
});

console.log(`
Pavel Sanchez

Experienced digital marketer working in non-profit. Skilled in HTML emails, front-end web development, and UI design.

🏠 Website: https://pavelsanchez.com
📖 Github: https://github.com/PaleBluDot
`);
