const paths = require('./paths');
const fsWrite = require('./write');
const chalk = require('chalk');
const package = require('../../package.json');

const { eslintignorePath, eslintrcPath } = paths;

module.exports = {
	gendIgnore() {
		const ignoreContent = `\n!src/*\n`;
		// 写入ignore
		fsWrite.writeTo(ignoreContent, eslintignorePath);
	},
	gendEslintrc({ react = false, vue = false, ts = false }) {
		const extendsArr = [];
		const hasPreset = react || vue || ts;
		if (!hasPreset) {
			extendsArr.push(`${package.name}/config/base.js`);
		}
		if (react) {
			if (ts) {
				extendsArr.push(`${package.name}/config/typescript-react.js`);
			} else {
				extendsArr.push(`${package.name}/config/react`);
			}
		}
		if (vue) {
			if (ts) {
				extendsArr.push(`${package.name}/config/typescript-vue.js`);
			} else {
				extendsArr.push(`${package.name}/config/vue.js`);
			}
		}
		if (ts && !react && !vue) {
			extendsArr.push(`${package.name}/config/typescript.js`);
		}
		let content = `module.exports = {\n\textends: ${JSON.stringify(extendsArr)}.map(require.resolve)\n}`;
		fsWrite.writeTo(content, eslintrcPath);
	}
};
