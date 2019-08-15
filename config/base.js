module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			globalReturn: true,
			impliedStrict: false
		}
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
		node: true
	},
	extends: ['../src/rules/base.js', '../src/rules/style.js'].map(require.resolve),
	plugins: ['import'],
	rules: {
		// eslint-plugin-import rules
		// import 语句置顶
		'import/first': 'error',
		// 禁止使用amd模块化规范
		'import/no-amd': 'error',
		// 禁止使用webpack loader语法导入
		'import/no-webpack-loader-syntax': 'error',
	}
};
