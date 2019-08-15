const fs = require('fs-extra');
function writeTo(content, path, append = false) {
	if (fs.existsSync(path)) {
		const stat = fs.statSync(path);
		if (stat.isDirectory()) {
			throw new Error(`写入失败！传入的path为目录`);
		}
		let writeBuffer = Buffer.from(content, 'utf-8');
		if (append) {
			const buffer = fs.readFileSync(path);
			writeBuffer = Buffer.concat([buffer, writeBuffer]);
		}
		fs.writeFileSync(path, writeBuffer);
	} else {
		fs.writeFileSync(path, content);
	}
}

module.exports = {
	writeTo
};
