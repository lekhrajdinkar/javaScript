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

> #### B. PROTOTYPE


