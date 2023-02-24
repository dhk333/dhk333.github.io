# 数据类型概述
:::tips
 ECMAScript 中有六种简单数据类型（原始数据类型），一种复杂数据类型。
:::
| **简单数据类型** | **复杂数据类型** |
| --- | --- |
| Undefined（表示 未定义） | Object（对象） |
| Null（表示为空） |  |
| Boolean（布尔值） |  |
| String（字符串） |  |
| Symbol（ES6新增数据类型，表示符号） |  |

# 1、typeof 操作符
:::tips
概述：typeof 操作符用来检验变量属于哪种类型。
:::

- typeof 是操作符，不是函数，所以不需要参数（但是可以使用参数）。
- console.log(typeof null); 返回的是Object（对象），返回的结果让人费解，但技术上来讲是正确的，这是因为特殊值 null 被认为是一个对空对象的引用。
> 注意：严格上来讲，函数在 ECMAScript 中，被认为是对象，并不代表一种数据类型。可是，函数也有自己特殊的属性。为此，就有必要通过 typeof 操作符来区分函数和其它对象。

```javascript
/**
 * typeof 操作符用来检验变量属于哪种类型
 * 1、typeof 是操作符，不是函数，所以不需要参数（但是可以使用参* 数）  
 * 2、console.log(typeof null); 返回的是Object（对象），返回* 的结果让人费解，但技术上来讲是正确的，这是因为特殊值 null 被* 认为是一个对空对象的引用。
 * 
 * 注意：严格上来讲，函数在 ECMAScript 中，被认为是对象，并不代表一种数据类型。可是，函数也有自己特殊的属性。为此，就有必要通过 typeof 操作符来区分函数和其它对象。
 * 
 * “undefined” 表示值为未定义
 * “boolean” 表示值为布尔值
 * “string” 表示值为字符串
 * “number” 表示值为数值
 * “object” 表示值为对象（而不是函数）或 null
 * “function” 表示值为函数
 * “symbol” 表示值为符号
*/

let message1 = '1';
let message2 = 1;
let message3 = true;
let message4;
let message5 = ',';

console.log(typeof (message1));

console.log(typeof message1); // string
console.log(typeof message2); // number
console.log(typeof message3); // boolean
console.log(typeof message4); // undefined
console.log(typeof message5); // string
console.log(typeof null); // object
console.log(typeof function(){}); // function
```

# 2、undefined类型

- undefined类型只有一个值，就是undefined。
- 使用 let 和 var 声明但未初始化（赋值）时，值为undefined。
```javascript
let message; // 相当于给变量赋值了undefined

console.log(message); // undefined
console.log(message == undefined); // true

// 等于以下例子
let message = undefined; // 相当于给变量赋值了undefined

console.log(message == undefined); // true
```

- 对于未声明的变量，只能使用一个有用的操作，就是typeof操作符。
- 对未初始化变量使用typeof返回undefined，对未声明变量使用typeof也是返回undefined，逻辑上讲是对的，因为虽然两者存在根本性差异，但是都不能执行实际操作
```javascript
let message; // 该变量已被声明，值为undefined

// let age; // 该变量没有被声明

console.log(message); // undefined
console.log(age); // 报错

console.log(typeof message); // undefined
console.log(typeof age); // undefined
```
> 注意：
> 1. 不用显式给变量赋值undefined  
> 2. 未初始化的变量会被赋予undefined，建议变量在声明时初始化，当使用typeof时，就知道该变量是没有被声明，而不是未被初始化。
> 3. undefined是一个假值，如果需要，可以用更加简洁的方式检测它，不过也有很多值可能同样是假值。所以一定要明确想检测的就是undefined。  

```javascript
let message;
// let age;

if (message) {
  // 不执行
  console.log(0);
}

if (!message) {
  // 执行
  console.log(1);
}

if (age) {
  // 报错
  console.log(2);
}
```
# 3、null类型

- null类型只有一个值，即特殊值null。
- 逻辑上讲，null表示一个空对象指针，这也是给typeof传null会返回object的原因。
```javascript
let msg = null;
console.log(typeof(msg)); // object
```

- 在定义将来要保存对象类型的变量时，建议使用null来初始化，这样只要检查该变量是否为null就知道该变量是否在后来被重新赋予了对象的引用。
```javascript
if(msg != null){
  console.log('no');
}
```

- undefined是由null派生而来，因此ECMA-262将它们定义为表面相等。
```javascript
console.log(undefined == null); // true
console.log(undefined === null); // false
```

- null是一个假值，如果需要，可以用更简洁的方式检测它。注意：也有很多其他类型的值是假值
```javascript
let message = null;
let age; // 隐式赋值undefined

if(message){
  // 不执行
}

if(!message){
  // 执行
}

if(age){
  // 不执行
}

if(!age){
  // 执行
}
```
# 4、boolean类型

-  boolean类型有两个字面值：true、false
- 两个布尔值不同于数值，因此true不等于1，false不等于0。
```javascript
let found = true; // != 1
let lost = false; // != 0
```
> 注意：
> 1. true、false是区分大小写的，因此True、False是标识符，但不是布尔值
> 2. 虽然布尔值只有两个，但是所有其他的ECMAScript类型的值都有相应的等价形式，要将其他类型的值转换为布尔值，可以使用Boolean()转型函数。

```javascript
// 使用Boolean()转型函数。
let message = 'hello world';
let messageAsBoolean = Boolean(message);

console.log(messageAsBoolean); // true
```
## 4.1、不同类型和布尔值之间的转换规则
| **数据类型** | **转换为true的值** | **转换为false 的值** |
| --- | --- | --- |
| Boolean | true | false |
| String | 非空字符串 | ""(空字符串) |
| Number | 非零数值（包括无穷值） | 0、NaN |
| Object | 任意对象 | null |
| Undefined | N/A（不存在） | undefined |

```javascript
// 像if流程控制语句会自动执行其他类型转换到布尔值的操作
if(message){
  console.log('this true');
}
// message变量中存储着'hello world'，转换为布尔值是true，所以if语句会执行。
```

# 5、number类型
:::tips
概述：number类型表示整数或者浮点数（小数）。
:::
## 5.1、整数
### 5.1.1、八进制整数

- 八进制第一个数字必须是数字0，然后是相应的八进制数字（0-8）。
- 如果字面量超出了应有的范围，就会忽略前面的零，后面的数字序列会被当成十进制数、
> 注意：  
> 1. 八进制在严格模式下无效，js引擎会抛出语法错误

```javascript
let octalNum1 = 070; // 八进制的56
let octalNum2 = 079; // 无效的八进制值，当成79处理
let octalNum3 = 08; // 无效的八进制值，当成8处理
```
### 5.1.2、十进制整数

- 要创建十进制整数，必须要让真正的数值前缀0x（区分大小写），然后是十六进制数字（0-9以及A-F）。
- 十六进制的字母大小写均可。
```javascript
let hexNum1 = 0xA; // 十六进制10
let hexNum2 = 0x1f; // 十六进制31
```
> 注意：
> 1. 使用八进制和十六进制格式创建的数值在所有数组操作中都被视为十进制数值。
> 2. 由于js保存数值的方式，实际中可能存在正零（+0）和负零（-0）.正零和负零在所有情况下都被认为是等同的。

## 5.2、浮点数

- 要定义浮点数，数值中必须含有小数点，而且小数点后面必须至少有一个数字。虽然小数点前面不是必须有整数，但是推荐加上。
```javascript
let floatNum1 = 1.1;
let floatNum2 = 0.1;
let floatNum3 = .1; // 有效，但是不推荐
```

- 存储浮点数使用的内存空间是存储整数数值的两倍，所以ECMAScript总是在想方设法的把值转换为整数，在小数点后面没有数字的情况下，数值就会变成整数。如果数值本身就是整数，只是小数点后面跟着0，那它也会被转换为整数
```javascript
let floatNum4 = 1.; // 小数点后面没有数字，被当成整数1处理
let floatNum5 = 10.0; // 小数点后面是零，当成整数10处理
```

- 对于特别大或者特别小的浮点数，可以用科学计数法表示。
- 格式要求：一个数值（整数、浮点数）后跟一个小写或者大写的字母e，再加上一个要乘的10的多少次幂。
```javascript
let floatNum6 = 3.125e7; // 等于31250000、
let floatNum7 = 3e-7; // 等于0.0000003
```
> 注意：
> 1. 浮点数的精确度最高可达17位小数，但在算术计算中远不如整数准确。0.1+0.2不等于0.3，而等于0.300 000 000 000 000 004，因此永远不要测试某个特定的浮点数。
> 2. 之所以存在这种舍入错误，是因为使用了IEEE754数值，这种错误并非ECMAScript所独有，在使用相同格式的语言也有这个问题。


## 5.3、值的范围
:::tips
概述：由于内存限制，并不支持表示这个世界上所有的数值。
:::

- ECMAScript表示最小的数值保存在Number.MIN_VALUE中，多数浏览器是5e-324。
- ECMAScript表示最大的数值保存在Number.MAX_VALUE中，多数浏览器是1.797 693 134 862 315 7e+308。
```javascript
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
```

- 如果某个计算超出最大可以表示的数值，那么这个数值会被转换为一个特殊的Infinity（无穷）值。
- 任何无法表示的负数以-Infinity（负无穷）值表示、任何无法表示的正数数以Infinity（正无穷大）值表示。
- 如果计算返回Infinity（无穷），那么该值将不能再进一步用于任何计算，这是因为Infinity（无穷）没有用于计算的数值表示形式。

- 要确定一个数值是否为最大值和最小值之间，可以使用isFinite()函数
```javascript
console.log(isFinite(15264515646)); // true ，表示该值在可以表示的最大值和最小值之间
```
> 注意:使用Number.POSITIVE_INFINITY和Number.NEGATIVE_INFINITY可以获取正、负Infinity值

```javascript
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
```
## 5.4、NaN
:::tips
概述：有一个特殊的数值（NaN），表示不是数值，用于表示本来要返回数值的操作失败了（而不是抛出错误）。
:::

- 任何数除以0，在其他语言中通常都会导致错误，从而中止代码执行，但在ECMAScript中，0、+0、-0相除都会返回NaN。
```javascript
console.log(0 / 0); // NaN
console.log(-0 / +0); // NaN
```

- 如果分子是非0值，分母是有符号0或者无符号0，则会返回Infinity和-Infinity。
```javascript
console.log(5 / 0); // Infinity
console.log(5 / -0); // -Infinity
```

1. NaN有几个特殊的属性  
   1. 任何涉及NaN的操作始终都会返回NaN(NaN / 10)
   2. NaN不等于NaN在内的任何值
```javascript
console.log(NaN == NaN); // false
```

- ECMAScript提供了isNaN函数，用来判断是否“不是数值”，该函数接收一个参数，可以是任何数据类型。
- isNaN 会在尝试把它转换为数值，不能转换数值的值会导致这个函数返回true。
```javascript
console.log(isNaN(10)); // false
console.log(isNaN('11')); // false
console.log(isNaN(false)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN('red')); // true
```
## 5.5、值的转换

1. 有三个函数可以将非数值转换为数值：
   1. Number()：字符串转换数字。
   2. parseInt()：解析一个字符串，并返回一个整数。
   3. parseFloat()：解析一个字符串，并返回一个浮点数。
```javascript
console.log(Number(99)); // 99
console.log(parseInt(99.99)); // 99
console.log(parseFloat(99.99)); // 99.99
```

# 6、string类型
:::tips
概述：string（字符串）类型表示零或者多个16位Unicode字符序列。
:::

- 字符串可以使用：单引号（''）、双引号（""）、反引号（``）三种方式标示。
```javascript
let str1 = 'Home';
let str2 = "aboutus"; 
let str3 = `contactus`;
```
> 注意：以哪一种符号开头，就要以该符号结尾。let str3 = `contactus"; 这是错误的  

## 6.1、字符字面量

- 字符串数据类型包含一些字符字面量，用于表示非打印字符或有其他用途的字符，如下表：
| **字面量 ** | **含义** |
| --- | --- |
| \\n | 换行 |
| \\t | 制表 |
| \\b | 退格 |
| \\r | 回车 |
| \\f | 换页 |
| \\\\ | 反斜杠（\\） |
| \\' | 单引号 |
| \\" | 双引号 |
| \\` | 反引号 |
| \\xnn |  |
| \\unnnn |  |

- 字符字面量可以出现在字符串的任意位置，作为单个字符被解释
```javascript
let text = 'ninhaoa\u03a3.';
```
