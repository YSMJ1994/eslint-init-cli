const paths = require('./paths');
const fsWrite = require('./write');
const { pluginName } = paths;

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
			extendsArr.push(`${pluginName}/config/base.js`);
		}
		if (react) {
			if (ts) {
				extendsArr.push(`${pluginName}/config/typescript-react.js`);
			} else {
				extendsArr.push(`${pluginName}/config/react.js`);
			}
		}
		if (vue) {
			if (ts) {
				extendsArr.push(`${pluginName}/config/typescript-vue.js`);
			} else {
				extendsArr.push(`${pluginName}/config/vue.js`);
			}
		}
		if (ts && !react && !vue) {
			extendsArr.push(`${pluginName}/config/typescript.js`);
		}
		let content = `module.exports = {\n\textends: ${JSON.stringify(extendsArr)}.map(require.resolve)\n}`;
		fsWrite.writeTo(content, eslintrcPath);
	}
};
