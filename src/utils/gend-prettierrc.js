const paths = require('./paths');
const fsWrite = require('./write');
const chalk = require('chalk');
const fs = require('fs-extra');
const package = require('../../package.json');

const { prettierrcPath, prettierrcTempPath } = paths;

module.exports = {
	gend() {
		fs.createReadStream(prettierrcTempPath).pipe(fs.createWriteStream(prettierrcPath));
	}
};
