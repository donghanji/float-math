# float-math

javascript float math calculation


[![Build Status](https://travis-ci.org/donghanji/float-math.svg?branch=master)](https://travis-ci.org/donghanji/float-math)
[![npm](https://img.shields.io/npm/dm/localeval.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/float-math)


# Useage

### 1. install <br>
`npm i float-math -S`

### 2. gulp [require,pm,proto,define]
`gulp`
<br/>
`gulp require`
<br/>
`gulp pm`
<br/>
`gulp define`
### 3. test
`npm test`

### 4.
<pre>
var fl = require('float-math');

var f1 = 1.01;
var f2 = 2.02;

var f3 = fl.add(f1,f2),
    f4 = fl.sub(f1,f2),
    f5 = fl.mul(f1,f2),
    f6 = fl.div(f1,f2),
    f7 = fl.add(f1,f2,f3),
    f8 = fl.mul(f1,f2,f3);

console.log("f3="+f3);
console.log("f4="+f4);
console.log("f5="+f5);
console.log("f6="+f6);
console.log("f7="+f7);
console.log("f8="+f8);
</pre>
