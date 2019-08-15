module.exports = {
	extends: ['./react.js'].map(require.resolve),
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 2018,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true
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
