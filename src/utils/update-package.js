const paths = require('./paths');
const prettier = require('prettier');
const fs = require('fs-extra');
const { cliName } = paths;

module.exports = function updatePkg() {
	const buffer = fs.readFileSync(paths.packageJsonPath);
	const pkgStr = buffer.toString('utf-8');
	const pkg = JSON.parse(pkgStr);
	pkg.husky = {
		hooks: {
			'pre-commit': 'lint-staged'
		}
	};
	pkg['lint-staged'] = {
		linters: {
			'src/**/*.{json,css,less,scss,sass}': ['prettier --write', 'git add'],
			'src/**/*.{js,jsx,ts,tsx,vue}': [
				'prettier --write',
				`${cliName} check`,
				'prettier --write',
				'git add',
				`${cliName} report`
			]
		},
		ignore: ['*.min.js']
	};
	const resultStr = JSON.stringify(pkg);
	const result = prettier.format(resultStr, {
		parser: 'json',
		tabWidth: 2,
		useTabs: false
	});
	fs.writeFileSync(paths.packageJsonPath, result);
};
