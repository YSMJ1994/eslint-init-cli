const paths = require('./paths');
const fs = require('fs-extra');

const { eslintReadmePath, eslintReadmeTempPath } = paths;

module.exports = {
	gend() {
		fs.createReadStream(eslintReadmeTempPath).pipe(fs.createWriteStream(eslintReadmePath));
	}
};
