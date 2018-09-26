## DOM

### Features:
1. html > taken by browser > create DOM > used for rendering.
2. If DOM element is manipulated > look will get changes.
3. google chrome > developer tools > element > is DOM > can manipulate it as run time and see the changes.

pictorial desc - basic:
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/dom1.PNG)

***

### WINDOW object.

1. console.log(window) --> it very complex object. Goal is not to cover all, but to learn how to use it.
Few properties of it:
> `innerheigth`, `outerHeigth`, `innerWidth`, `outerWidth`

> `localStorage`, `SessionStorage` - getItem(K), setItem(K,V)

> `location`

> `document`

2. window method - eg
- window.open("url")
- window.navigate()

3. its global object. we dont need to window.open(), and can use open() directly.

***

### WINDOW object > Location Object
1. navigate
2. replace

### WINDOW object > Document Object
1. document.url - can also be access from here instead of location.url.
2. document.body
3. document.body.children
4. document.body.children[0].textContent
5. document.body.children[0].style.backgrounColor.

change document object and see the changes in broeser _with refresh page_. eg"
![](https://github.com/lekhrajdinkar/javaScript/blob/master/Notes/asset/dom2.PNG)



