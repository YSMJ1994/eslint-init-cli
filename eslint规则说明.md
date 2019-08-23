# 前端 js 代码规范

## 语法(eslint error 级别)

#### 1、禁止使用 var 声明变量

-   eslint 规则 `no-var`

`错误`的代码示例

```js
// 声明一个当前函数级作用域的变量
var n = 1;
```

`正确`的代码示例

```js
// 声明一个当前块的静态变量
const n = 1;
// 声明一个当前块的普通变量
let b = 1;
```

#### 2、强制使用全等和全不等

-   eslint 规则 `eqeqeq`

`错误`的代码示例

```js
function equalTwo(arg) {
	return arg == 2;
}
```

`正确`的代码示例

```js
function equalTwo(arg) {
	return arg === 2;
}
```

#### 3、switch 子句强制有 default 分支，除非强行指定没有 default 分支

-   eslint 规则 `default-case`

`错误`的代码示例

```js
const n = 1;
switch (n) {
	case 1: {
		// do something...
		break;
	}
	case 2: {
		// do something...
		break;
	}
}
```

`正确`的代码示例

```js
const n = 1;
switch (n) {
	case 1: {
		// do something...
		break;
	}
	case 2: {
		// do something...
		break;
	}
	default: {
		// do default
	}
}

// 或在注释中显示地设置没有default分支
switch (n) {
	case 1: {
		// do something...
		break;
	}
	case 2: {
		// do something...
		break;
	}
	// no default
}
```

#### 4、强制数组某些内置方法的回调中有 return 语句

-   eslint 规则 `array-callback-return`

适用的数组内置方法:

-   map
-   filter
-   find
-   findIndex
-   reduce
-   sort
-   every
-   some

及其他需要在传入的回调中返回结果的方法

`错误`的代码示例

```js
const arr = [1, 2, 3];
const res = arr.map(n => {
	// ...
});
const res2 = arr.filter(n => {
	// ...
});
const res3 = arr.find(n => {
	// ...
});
const res4 = arr.findIndex(n => {
	// ...
});
const res5 = arr.reduce((pre, item) => {
	// ...
}, 0);
const res6 = arr.sort((a, b) => {
	// ...
});
const res7 = res.every(n => {
	// ...
});
const res8 = res.some(n => {
	// ...
});
```

`正确`的代码示例

```js
const arr = [1, 2, 3];
const res = arr.map(n => {
	return n + 1;
});
const res2 = arr.filter(n => {
	return n > 1;
});
const res3 = arr.find(n => {
	return n === 2;
});
const res4 = arr.findIndex(n => {
	return n === 2;
});
const res5 = arr.reduce((pre, item) => {
	return pre + item;
}, 0);
const res6 = arr.sort((a, b) => {
	return a - b;
});
const res7 = res.every(n => {
	return n > 1;
});
const res8 = res.some(n => {
	return n > 1;
});
```

#### 5、强制 for 循环计数器语句向正确的方向移动

-   eslint 规则 `for-direction`

`错误`的代码示例

```js
for (let i = 0; i < 10; i--) {
	// ...
}
```

`正确`的代码示例

```js
for (let i = 0; i < 10; i++) {
	// ...
}
```

#### 6、强制 getter 函数中有 return 语句

-   eslint 规则 `getter-return`

`错误`的代码示例

```js
const obj = {
	v: '',
	v2: '',
	get a() {
		// no return
	},
	set a(v) {
		this.v = v;
	}
};
Object.defineProperty(obj, 'c', {
	get() {
		// no return
	},
	set(v) {
		this.v2 = v;
	}
});
```

`正确`的代码示例

```js
const obj = {
	v: '',
	v2: '',
	get a() {
		return this.v;
	},
	set a(v) {
		this.v = v;
	}
};
Object.defineProperty(obj, 'c', {
	get() {
		return this.v2;
	},
	set(v) {
		this.v2 = v;
	}
});
```

#### 7、禁止在 Promise executor 中使用异步函数

-   eslint 规则 `no-async-promise-executor`

`错误`的代码示例

```js
const foo = new Promise(async (resolve, reject) => {
	readFile('foo.txt', function(err, result) {
		if (err) {
			reject(err);
		} else {
			resolve(result);
		}
	});
});

const result = new Promise(async (resolve, reject) => {
	resolve(await foo);
});
```

`正确`的代码示例

```js
const foo = new Promise((resolve, reject) => {
	readFile('foo.txt', function(err, result) {
		if (err) {
			reject(err);
		} else {
			resolve(result);
		}
	});
});

const result = Promise.resolve(foo);
```

#### 8、禁止与 -0 作比较

-   eslint 规则 `no-compare-neg-zero`

`错误`的代码示例

```js
const a = 1;
const b = a === -0;
```

`正确`的代码示例

```js
const a = 1;
const b = a === 0;
```

#### 9、禁止在条件表达式中使用赋值操作

-   eslint 规则 `no-cond-assign`

`错误`的代码示例

```js
let a = 1;
if ((a = 3)) {
	// ...
}
if ((a = 3) === 3) {
	// ...
}
```

`正确`的代码示例

```js
const a = 1;
if (a === 3) {
	// ...
}
```

#### 10、禁止在条件中使用常量表达式

-   eslint 规则 `no-constant-condition`

`错误`的代码示例

```js
if (true) {
	// ...
}
if (1 === 1) {
	// ...
}
```

`正确`的代码示例

```js
const a = 1;
if (a === 1) {
	// ...
}
```

#### 11、禁用 function.caller | arguments.callee

-   eslint 规则 `no-caller`

`错误`的代码示例

```js
function test(n) {
	const caller = test.caller;
	console.log('test caller', caller);
	const self = arguments.callee;
	if (n <= 0) {
		return;
	}
	self(n - 1);
}
```

`正确`的代码示例

```js
function test(n) {
	if (n <= 0) {
		return;
	}
	test(n - 1);
}
```

#### 11、禁止在正则内使用 ASCLL 中 0-31 的控制字符

-   eslint 规则 `no-control-regex`

`错误`的代码示例

```js
const pattern1 = /\x1f/;
const pattern2 = new RegExp('\x1f');
```

`正确`的代码示例

```js
const pattern1 = /\x20/;
const pattern2 = new RegExp('\x20');
```

#### 12、禁止使用 delete 操作符删除变量

-   eslint 规则 `no-delete-var`

`错误`的代码示例

```js
let a = 1;
delete a;
```

#### 13、禁止在 function 参数定义中出现同名参数

-   eslint 规则 `no-dupe-args`

`错误`的代码示例

```js
function test(arg1, arg2, arg1) {}
```

#### 14、禁止在类成员中出现重复的名称

-   eslint 规则 `no-dupe-class-members`

`错误`的代码示例

```js
class Obj {
	member1 = 10;
	member2 = true;
	member1 = 20;
}
```

#### 15、禁止对象字面量中出现重复的 key

-   eslint 规则 `no-dupe-keys`

`错误`的代码示例

```js
const obj = {
	a: 1,
	b: 2,
	a: 1
};
```

#### 16、禁止出现重复的 case 表达式

-   eslint 规则 `no-duplicate-case`

`错误`的代码示例

```js
const a = 1;
switch (a) {
	case 1: {
		break;
	}
	case 1: {
		break;
	}
	case 2: {
		break;
	}
	default: {
	}
}
```

#### 17、禁止在正则表达式中使用空字符集

-   eslint 规则 `no-empty-character-class`

`错误`的代码示例

```js
const reg = /my\sname[]/;
```

`正确`的代码示例

```js
const reg = /my\sname[a-z]/;
```

#### 18、禁止对 catch 的异常参数赋值

-   eslint 规则 `no-ex-assign`

`错误`的代码示例

```js
try {
	// code
} catch (e) {
	e = 10;
}
```

`正确`的代码示例

```js
try {
	// code
} catch (e) {
	let a = 10;
}
```

#### 19、禁止扩展原生对象

-   eslint 规则 `no-ex-assign`

`错误`的代码示例

```js
Object.prototype.print = function() {};
```

#### 20、禁止 case 语句没有 break， 除非添加 falls through 注释

-   eslint 规则 `no-ex-assign`

`错误`的代码示例

```js
const a = 1;
switch (a) {
	case 1: {
	}
	case 2: {
		break;
	}
	default: {
	}
}
```

`正确`的代码示例

```js
const a = 1;
switch (a) {
	case 1: {
		break;
	}
	case 2: {
		break;
	}
	default: {
	}
}
```
