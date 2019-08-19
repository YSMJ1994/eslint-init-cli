const paths = require('./paths');
const fs = require('fs-extra');

const { prettierrcPath, prettierrcTempPath } = paths;

module.exports = {
	gend() {
		fs.createReadStream(prettierrcTempPath).pipe(fs.createWriteStream(prettierrcPath));
	}
};
