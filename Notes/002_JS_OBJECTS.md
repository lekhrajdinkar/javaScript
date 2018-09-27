## JS Object

#### Features:
1. reference type.
2. Change property after object has been created. eg:
3. refer Class property inside function using `this`. else it wont work.
4. Side note : Each Objeect we create by any mean will have a `prototype`. default prototype is `Object.prototype` which is root prototype of all objects.
5. 
***

> #### A. Object basics

1. accessing its property 

1.1. using `.`

![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/obj2.PNG)

1.2. accessing its propertyusing `['abc']`//abc is property.

![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/obj1.PNG)

2. add another object as property.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/obj3.PNG)

3. Add Function in object. Notice `:` instead of `=`.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/obj4.PNG)

4. using string as property name. by this we can use `-` as well in var name. if use it directly it will give error.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/obj5.PNG)

5. Create object using `new object()` - this is not preferred.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/obj6.PNG)

6. Create object using `prototype` - Object.create(prototype)
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/obj8.PNG)

7. camparing objects using `==` it checks references.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/obj7.PNG)

***

> #### B. PROTOTYPE

0. Blueprints from where we can create multiple object and benefits its `functions` and   `feilds`
1. `Object.prototype` (itself a object) is parent prtotype. try to priny itlog(Object.prototype ) //undefined
2. var1.anything() --> error; var1.toString() --> no error. how ?
3. prototype can be think of as parent Object and can be used inside objects(created from prototype).
4. Object.prototype is parent all object and all its method accessible to object derived from it.
5. eg : to understand it more better:
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/obj9.PNG)
6. Protyotype Chain:
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/proto1.PNG)

7. var chilhObj = Object.create(parentObj)

8. Create multiple object from same blueprint
```
var chilhObj1 = Object.create(parentObj);
var chilhObj2= Object.create(parentObj);
```

9. Get prototype:
```
var a = Object.create(x);
Object.getPrototypeOf(a) //x
```
***

> #### C. Constructor Functions
1. Another way to create Object.
2. eg:
```
function ABC(){ ... }
var o1 = new ABC();

//protype of  o1 will be ABC.protype.

ABC.prototype.greet = function(){ log("hello");}

o1.greet() // hello.
var a =
```
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/con1.PNG)

3. constrtor function with argument.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/con2.PNG)




