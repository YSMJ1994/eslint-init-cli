module.exports = {
	rules: {
		/* 代码风格规则(不使用eslint的风格规则，使用prettier统一代码风格) */
		indent: 'off', // 缩进
		'dot-location': 'off', // 对象点操作符和属性位置
		'new-parens': 'off', // new调用构造函数创建对象后面的括号

		/* 代码质量规则 */
		'array-callback-return': 'warn', // 强制数组方法的回调函数中有 return 语句
		'default-case': ['error', { commentPattern: '^no default$' }], // 强制 switch 语句中有 default 分支，除非在default位置加上 no default注释
		eqeqeq: ['error', 'smart'], // 强制使用全等和全不等
		'no-var': 'error', // 禁用var定义变量，error级别
		'for-direction': 'error', // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
		'getter-return': 'error', // 强制 getter 函数中出现 return 语句
		'no-async-promise-executor': 'error', // 禁止使用异步函数作为 Promise executor
		'no-await-in-loop': 'off', // 允许在循环中出现await
		'no-compare-neg-zero': 'error', // 禁止与 -0 进行比较
		'no-cond-assign': 'error', // 禁止在条件表达式中进行赋值操作
		'no-console': 'off', // 允许console
		'no-constant-condition': 'error', // 禁止在条件中使用常量表达式
		'no-array-constructor': 'off', //允许使用Array构造函数构造数组
		'no-caller': 'error', // 禁用arguments.caller | arguments.callee
		'no-control-regex': 'error', // 禁止在正则内使用ASCLL中0-31的控制字符
		'no-delete-var': 'error', // 禁止使用delete操作符删除变量
		'no-dupe-args': 'error', // 禁止在function参数定义中出现同名参数
		'no-dupe-class-members': 'error', // 禁止在类成员中出现重复的名称
		'no-dupe-keys': 'error', // 禁止对象字面量中出现重复的key
		'no-duplicate-case': 'error', // 禁止出现重复的case表达式
		'no-empty-character-class': 'error', // 禁止在正则表达式中使用空字符集
		'no-empty-pattern': 'warn', // 空解构模式警告提示
		'no-eval': 'warn', // 使用eval警告提示
		'no-ex-assign': 'error', // 禁止对catch的异常参数赋值
		'no-extend-native': 'error', // 禁止扩展原生对象
		'no-extra-bind': 'warn', // 不必要的bind调用警告提示
		'no-extra-label': 'warn', // 不必要的标签警告提示
		'no-fallthrough': ['error', { commentPattern: '^falls\\s+through$' }], // 禁止case语句没有break， 除非添加 falls through 注释
		'no-func-assign': 'error', // 禁止对function声明重新赋值
		'no-implied-eval': 'warn', // 使用隐式的eval警告提示
		'no-invalid-regexp': 'error', // 禁止使用无效的正则表达式
		'no-iterator': 'error', // 禁用过时的__iterator__属性来迭代对象
		'no-label-var': 'error', // 禁止标签和变量重名
		'no-labels': 'warn', // 使用标签语句警告提示
		'no-lone-blocks': 'error', // 禁用不必要的嵌套块
		'no-loop-func': 'warn', // 在循环中声明函数警告提示
		'no-mixed-operators': [
			// group中的操作符禁止混合使用，使用括号制定执行优先级
			'error',
			{
				groups: [
					['&', '|', '^', '~', '<<', '>>', '>>>'],
					['==', '!=', '===', '!==', '>', '>=', '<', '<='],
					['&&', '||'],
					['in', 'instanceof']
				],
				allowSamePrecedence: false
			}
		],
		'no-multi-str': 'error', // 禁止使用反斜号hack构建多行字符串，使用es6模板字符串或转义换行符替代
		'no-new-func': 'error', // 禁止使用Function构造函数构建一个函数，使用function来声明
		'no-new-object': 'warn', // 使用Object构造函数构建对象时给出警告，应使用字面量替代
		'no-new-symbol': 'error', // Symbol应作为函数调用而不是构造函数
		'no-new-wrappers': 'error', // 基本类型的包装类应作为函数调用而不是构造函数
		'no-obj-calls': 'error', // 禁止将内置全局变量(Math | JSON | Reflect)作为函数调用
		'no-octal': 'error', // 禁用八进制字面量
		'no-octal-escape': 'error', // 禁止在字符串中使用八进制转义序列
		'no-redeclare': 'error', // 禁止重复的变量声明
		'no-regex-spaces': 'error', // 禁止正则字面量中出现多个空格
		'no-restricted-syntax': ['error', 'WithStatement'], // 禁用的语言特征， With语句
		'no-script-url': 'error', // 禁用javascript: 链接形式
		'no-self-assign': 'error', // 禁止自我赋值
		'no-self-compare': 'error', // 禁止自我比较
		'no-sequences': 'error', // 禁止使用逗号操作符
		'no-shadow-restricted-names': 'error', // 禁止将标识符设为受限的名称，比如屏蔽undefined
		'no-sparse-arrays': 'error', // 禁用稀松数组，空位置应使用null代替，代表值为空
		'no-template-curly-in-string': 'warn', // 常规字符串中出现模板字符串占位符给出警告
		'no-this-before-super': 'error', // 禁止在对象构造函数中super之前调用this
		'no-throw-literal': 'error', // 禁止抛出非Error对象
		'no-undef': 'error' // 禁用未声明的变量
	}
};
