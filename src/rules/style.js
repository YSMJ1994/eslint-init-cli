/* 代码风格使用prettier格式化， eslint不作限制 */
module.exports = {
	rules: {
		// 在数组开括号后和闭括号前强制换行
		'array-bracket-newline': 'off',
		// 强制数组方括号中使用一致的空格
		'array-bracket-spacing': 'off',
		// 强制数组元素间出现换行
		'array-element-newline': 'off',
		// 禁止或强制在代码块中开括号前和闭括号后有空格
		'block-spacing': 'off',
		// 强制在代码块中使用一致的大括号风格
		'brace-style': 'off',
		// 强制使用骆驼拼写法命名约定
		camelcase: 'off',
		// 强制或禁止对注释的第一个字母大写
		'capitalized-comments': 'off',
		// 要求或禁止末尾逗号
		'comma-dangle': 'off',
		// 强制在逗号前后使用一致的空格
		'comma-spacing': 'off',
		// 强制使用一致的逗号风格
		'comma-style': 'off',
		// 强制在计算的属性的方括号中使用一致的空格
		'computed-property-spacing': 'off',
		// 当获取当前执行环境的上下文时，强制使用一致的命名
		'consistent-this': 'off',
		// 要求或禁止文件末尾存在空行
		'eol-last': 'off',
		// 要求或禁止在函数标识符和其调用之间有空格
		'func-call-spacing': 'off',
		// 要求函数名与赋值给它们的变量名或属性名相匹配
		'func-name-matching': 'off',
		// 要求或禁止使用命名的 function 表达式
		'func-names': 'off',
		// 强制一致地使用 function 声明或表达式
		'func-style': 'off',
		// 强制在函数括号内使用一致的换行
		'function-paren-newline': 'off',
		// 禁用指定的标识符
		'id-blacklist': 'off',
		// 强制标识符的最小和最大长度
		'id-length': 'off',
		// 要求标识符匹配一个指定的正则表达式
		'id-match': 'off',
		// 强制隐式返回的箭头函数体的位置
		'implicit-arrow-linebreak': 'off',
		// 缩进风格
		indent: 'off',
		// 强制在 JSX 属性中一致地使用双引号或单引号
		'jsx-quotes': 'off',
		// 强制在对象字面量的属性中键和值之间使用一致的间距
		'key-spacing': 'off',
		// 强制在关键字前后使用一致的空格
		'keyword-spacing': 'off',
		// 强制行注释的位置
		'line-comment-position': 'off',
		// 强制使用一致的换行风格
		'linebreak-style': 'off',
		// 要求或禁止类成员之间出现空行
		'lines-between-class-members': 'off',
		// 要求在注释周围有空行
		'lines-around-comment': 'off',
		// 强制可嵌套的块的最大深度
		'max-depth': 'off',
		// 强制一行的最大长度
		'max-len': 'off',
		// 强制最大行数
		'max-lines': 'off',
		// 强制函数最大代码行数
		'max-lines-per-function': 'off',
		// 强制回调函数最大嵌套深度
		'max-nested-callbacks': 'off',
		// 强制函数定义中最多允许的参数数量
		'max-params': 'off',
		// 强制函数块最多允许的的语句数量
		'max-statements': 'off',
		// 强制每一行中所允许的最大语句数量
		'max-statements-per-line': 'off',
		// 强制对多行注释使用特定风格
		'multiline-comment-style': 'off',
		// 要求或禁止在三元操作数中间换行
		'multiline-ternary': 'off',
		// 要求构造函数首字母大写
		'new-cap': 'off',
		// 强制或禁止调用无参构造函数时有圆括号
		'new-parens': 'off',
		// 要求方法链中每个调用都有一个换行符
		'newline-per-chained-call': 'off',
		// 禁用 Array 构造函数
		'no-array-constructor': 'off',
		// 禁用按位运算符
		'no-bitwise': 'off',
		// 禁用 continue 语句
		'no-continue': 'off',
		// 禁止在代码后使用内联注释
		'no-inline-comments': 'off',
		// 禁止 if 作为唯一的语句出现在 else 语句中
		'no-lonely-if': 'off',
		// 禁止混合使用不同的操作符
		'no-mixed-operators': 'off',
		// 禁止空格和 tab 的混合缩进
		'no-mixed-spaces-and-tabs': 'off',
		// 禁止连续赋值
		'no-multi-assign': 'off',
		// 禁止出现多行空行
		'no-multiple-empty-lines': 'off',
		// 禁用否定的表达式
		'no-negated-condition': 'off',
		// 禁用嵌套的三元表达式
		'no-nested-ternary': 'off',
		// 禁用 Object 的构造函数
		'no-new-object': 'off',
		// 禁用一元操作符 ++ 和 --
		'no-plusplus': 'off',
		// 禁用特定的语法
		'no-restricted-syntax': 'off',
		// 禁用 tab
		'no-tabs': 'off',
		// 禁用三元操作符
		'no-ternary': 'off',
		// 禁用行尾空格
		'no-trailing-spaces': 'off',
		// 禁止标识符中有悬空下划线
		'no-underscore-dangle': 'off',
		// 禁止可以在有更简单的可替代的表达式时使用三元操作符
		'no-unneeded-ternary': 'off',
		// 禁止属性前有空白
		'no-whitespace-before-property': 'off',
		// 强制单个语句的位置
		'nonblock-statement-body-position': 'off',
		// 强制在大括号中使用一致的空格
		'object-curly-spacing': 'off',
		// 强制大括号内换行符的一致性
		'object-curly-newline': 'off',
		// 强制将对象的属性放在不同的行上
		'object-property-newline': 'off',
		// 强制函数中的变量要么一起声明要么分开声明
		'one-var': 'off',
		// 要求或禁止在变量声明周围换行
		'one-var-declaration-per-line': 'off',
		// 要求或禁止在可能的情况下使用简化的赋值操作符
		'operator-assignment': 'off',
		// 强制操作符使用一致的换行符
		'operator-linebreak': 'off',
		// 要求或禁止块内填充
		'padded-blocks': 'off',
		// 要求或禁止在语句间填充空行
		'padding-line-between-statements': 'off',
		// 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
		'prefer-object-spread': 'off',
		// 要求对象字面量属性名称用引号括起来
		'quote-props': 'off',
		// 强制使用一致的反勾号、双引号或单引号
		quotes: 'off',
		// 要求或禁止使用分号代替 ASI
		semi: 'off',
		// 强制分号之前和之后使用一致的空格
		'semi-spacing': 'off',
		// 强制分号的位置
		'semi-style': 'off',
		// 要求对象属性按序排列
		'sort-keys': 'off',
		// 要求同一个声明块中的变量按顺序排列
		'sort-vars': 'off',
		// 强制在块之前使用一致的空格
		'space-before-blocks': 'off',
		// 强制在 function的左括号之前使用一致的空格
		'space-before-function-paren': 'off',
		// 强制在圆括号内使用一致的空格
		'space-in-parens': 'off',
		// 要求操作符周围有空格
		'space-infix-ops': 'off',
		// 强制在一元操作符前后使用一致的空格
		'space-unary-ops': 'off',
		// 强制在注释中 // 或 /* 使用一致的空格
		'spaced-comment': 'off',
		// 强制在 switch 的冒号左右有空格
		'switch-colon-spacing': 'off',
		// 要求或禁止在模板标记和它们的字面量之间有空格
		'template-tag-spacing': 'off',
		// 要求或禁止 Unicode 字节顺序标记 (BOM)
		'unicode-bom': 'off',
		// 要求正则表达式被括号括起来
		'wrap-regex': 'off'
	}
};
