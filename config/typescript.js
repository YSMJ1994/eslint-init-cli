module.exports = {
	extends: ['./base.js'].map(require.resolve),
	overrides: [
		{
			files: ['**/*.ts'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 2018,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: false
				},
				warnOnUnsupportedTypeScriptVersion: true
			},
			plugins: ['@typescript-eslint'],
			rules: {
				// 暂无
			}
		}
	]
};
