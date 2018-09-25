### Topic
> Language constructs, 
> Array / Object, 
> Var types and scopes, 
> Function , built in functions,
> DOM, 
> Events,
> AJAX - Asysn call - dont refresh page and load data in background.

online JS environment : [http://jsbin.com/](jsbin.com)

### features:

1. Runs on browse, doesnot have server dependency, hence reactive and fast.
2. JS > run on Server by Node.js, which also extends core  feature of JS and added more capabilty.
3. ES - EcmaScript - it provide the specification and JS build the progming constructs as per standards and specification provided by ES.
eg: 
```
ES5 - Supported by all Browser.
and ES6 - Few browser does not support it and transcompile it to ES5 format brfore run.
```

4. outsource JS code in seperate file is better approach
5. Order matters and keep just before `</body>`
```
<script scr=file1.js>
<script scr=file2.js>
```
6. 
`<script> f1()</script>` - f1() will get execute.
`<script scr=""> f1()</script>` - f1() will not

### Types
#### 1. console.log(typeof a)

> var a = Infinity, NaN, 0, -1, 1.1, - `number`

> var a = undefined -  `undefined`

> var a = Null , {}, {a:'a', b:1}, [1,2,3] - `Object`

> var a = "1" , '1' - `string`

> var a = true -- `boolean`

> var a = function() {} - `function`

#### 2. null vs Undefined
- Both have internally same value. hence   `if(null == undefined) : true.`
- Both have diff type as shown above. hence  `if(null === undefined) : false.`
- `var a = undefined` : technically assign it but no purpose.

#### 3. NaN
- its a error return by JS while mathematical error on number types. NaN is of `number` type. technically we can say its undefined number in JS world.

#### 4. assign function declaration to var.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/js1.PNG)

```var a = function calc(var1, var2){
  return var1 + var2;
};
 
console.log( typeof a);  //"function"

console.log( a(2,3)); // 5

console.log( calc(2,3)); //"ReferenceError: calc is not defined
````

#### 5. boolean type
5.1. true and false
5.2. Number as boolean
- false internally represents **zero** value, And true internally represent **non-zero number**.
```
if(0 == false){  console.log( 'true');} ;//true

if(1 == true){  console.log( 'true');} ;//true
if(-1 == true){  console.log( 'true');}; //true
if(100 == true){  console.log( 'true');} ;//true
```

- Use number/true inter-changebelly
```
if(true) {  console.log( 'true');} //true

if(6) {  console.log( 'true');} //true
if(-2) {  console.log( 'true');} //true
```

- But types are not same
```
if (6 == true) {  console.log( 'true');} //true
if (6 === true) {  console.log( 'true');} //nothing
```
5.3. String as boolean 
- All string treated as true.
```
if("abc")
  console.log( 'true'); //output
else
  console.log( 'false');
```
- NULL as false
```
if(null)
  console.log( 'true');
else
  console.log( 'false');
```

### 6. array
1. iterate more:
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/js2.PNG)

array is object type with length as builtin property.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/js3.PNG)


### 7. Addition / subtraction
1. 
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/js4.PNG)
2. 
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/js5.PNG)
3. 
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/js6.PNG)















