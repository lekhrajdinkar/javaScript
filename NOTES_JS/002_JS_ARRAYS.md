### ARRAYS
1. can be think as array of infinite lenght:
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/array1.PNG)

2.Iterate:
2.1. for loop
2.2. forEach:
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/array2.PNG)

3. Add
3.1. at end - `push(element)`

Add Undefined element - way1
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/array3.PNG)

3.2. at start - `unShift(element)`

4. Remove
4.1. from end - `pop()`
4.2. from start - `shift()`

5. find
5.1. `indexOf(element)` - returns for first elemet, returns -1 if not found.

6. `splice(index, no of elements)` - modify original array
```
var a1 = [0,1,2,3,4,5]

//take out 2, 3,4 in different array
var a2 = a1.splice(2,3);

console.log(a1); // [0, 1, 5]
console.log(a2); // [2, 3, 4]
```

7. `slice(index-start, index-end)` - keep original array as it is.
```
var a1 = [0,1,2,3,4,5]

//take out 2, 3 in different array
var a2 = a1.slice(2,5);

console.log(a1); //[0, 1, 2, 3, 4, 5]
console.log(a2); //[2, 3, 4]
```

8. Filter
- take function as arg
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/array3.PNG)

9. map eg: trple each element.
- it untouch original array.
- take function as arg.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/array3.PNG)

10. a.reverse() 
- change original array.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/array4.PNG)

11. a1.concat(a2) 
- returns new array.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/array5.PNG)

12. join() 
- it return string. 
- returns new array.
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/array6.PNG)

13. reduce()
- take function as arg.
- reduce array into single element based on logic defined on function. eg: sum all element.



  