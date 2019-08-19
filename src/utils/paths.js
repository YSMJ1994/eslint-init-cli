const path = require('path');
const root = process.cwd();

function resolveApp(relativePath) {
	return path.resolve(root, relativePath);
}
const packageJsonPath = resolveApp('package.json');
const pkg = require(packageJsonPath);
const config = pkg['eslint-init'] || {
	log: 'log'
};
const pluginPkg = require('../../package.json')

module.exports = {
	pluginName: pluginPkg.name,
	cliName: 'eslint-init-cli',
	packageJsonPath,
	prettierrcPath: resolveApp('.prettierrc.js'),
	prettierrcTempPath: path.resolve(__dirname, '../../.prettierrc.js'),
	eslintrcPath: resolveApp('.eslintrc.js'),
	eslintignorePath: resolveApp('.eslintignore'),
	logBasePath: resolveApp(config.log)
};
