module.exports  = {
	extends: ['./base.js'].map(require.resolve),
	plugins: ['jsx-a11y', 'react', 'react-hooks'],
	settings: {
		react: {
			version: 'detect',
		},
	},
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
	rules: {
		// eslint-plugin-react rules
		'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
		'react/jsx-no-comment-textnodes': 'warn',
		'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
		'react/jsx-no-target-blank': 'warn',
		'react/jsx-no-undef': 'error',
		'react/jsx-pascal-case': [
			'warn',
			{
				allowAllCaps: true,
				ignore: [],
			},
		],
		'react/jsx-indent-props': 'off',
		'react/jsx-uses-react': 'warn',
		'react/jsx-uses-vars': 'warn',
		'react/sort-comp': 'off',
		'react/no-danger-with-children': 'warn',
		// Disabled because of undesirable warnings
		// See https://github.com/facebook/create-react-app/issues/5204 for
		// blockers until its re-enabled
		// 'react/no-deprecated': 'warn',
		'react/no-direct-mutation-state': 'warn',
		'react/no-is-mounted': 'warn',
		'react/no-typos': 'error',
		'react/react-in-jsx-scope': 'error',
		'react/require-render-return': 'error',
		'react/style-prop-object': 'warn',
		
		// eslint-plugin-jsx-a11y rules
		'jsx-a11y/accessible-emoji': 'warn',
		'jsx-a11y/alt-text': 'warn',
		'jsx-a11y/anchor-has-content': 'warn',
		'jsx-a11y/anchor-is-valid': [
			'warn',
			{
				aspects: ['noHref', 'invalidHref'],
			},
		],
		'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
		'jsx-a11y/aria-props': 'warn',
		'jsx-a11y/aria-proptypes': 'warn',
		'jsx-a11y/aria-role': 'warn',
		'jsx-a11y/aria-unsupported-elements': 'warn',
		'jsx-a11y/heading-has-content': 'warn',
		'jsx-a11y/iframe-has-title': 'warn',
		'jsx-a11y/img-redundant-alt': 'warn',
		'jsx-a11y/no-access-key': 'warn',
		'jsx-a11y/no-distracting-elements': 'warn',
		'jsx-a11y/no-redundant-roles': 'warn',
		'jsx-a11y/role-has-required-aria-props': 'warn',
		'jsx-a11y/role-supports-aria-props': 'warn',
		'jsx-a11y/scope': 'warn',
		// https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
		'react-hooks/rules-of-hooks': 'error',

	}
}
