## How JS works behind the scene.

### A. Hoisting
- jS loaded Exection stack
- then declares the property and method 
- then executes.
- `note`: if var is used in code without declation then JS declares thar property in global `execution stack`.

### B. Execution Stack
1. default stack is `global` stack to execute the current JS code. it act as starting execution point.
2. eg:
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/jonas/basic/02.jpg)
```
global stack --> 
- method declaration: first(), third()
- property declation : a


first-function stack --> 
- method declaration: second()
- property declation : b
```

- first() is called at line 59
- New execution will be formed for first(), for its execution.
- again declaration will happen, followed by eecution then.
- `note 1` : property/method declared in parent stack will be avialble to child (and nested child). see nested flow eg:
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/jonas/basic/03.jpg)
- `note 2` : method expertion wont be declared inside stack. eg:
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/jonas/basic/06.jpg)

3. Theory:
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/jonas/basic/04.jpg)
> 3.1 VO 

- creation Phase: VO object holds 3 things --> `argument`, `funtion` and `property`
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/jonas/basic/05.jpg)
- Another simple eg:
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/jonas/basic/07.jpg)

> 3.2 Scope chain

- in JS, there are only 2 scope - global and local(each function)
- lexical scoping chain --> if function defined inside anothor function, then it will be scope inside scope. 
- execution stack defines scope chaining.
- It will to understand where to access particular method.proprty. simple rule --> child scope will have access to parent scope, thats all. 
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/jonas/basic/08.jpg)
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/jonas/basic/08_1.jpg)
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/jonas/basic/08_2.jpg)

- note: difference between scope chain and execution stack:
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/jonas/basic/09.jpg)

> 3.3 this

![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/jonas/basic/10.jpg)

- `this` will be `window` object for prg mentioned at point 2.
- this will be john object in below prg:
![img](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES_JS/asset/jonas/basic/11.jpg)

***
