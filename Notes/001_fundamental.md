### JQuery

#### 1. features 

[w3.school](https://www.w3schools.com/jquery/jquery_intro.asp)

1. jQuery is a lightweight, "write less, do more", **JavaScript library** .
2. Make it much easier to use JavaScript
- jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.
- simplifies a lot of the complicated things from JavaScript, like: 
```
HTML/DOM manipulation
CSS manipulation
HTML event methods
Effects and animations
AJAX
Utilities
```

3. In addition, jQuery has **plugins** for almost any task out there.
4. No cross-browser issues --> jQuery will run exactly the same in all major browsers.

#### 2. Install

1. single JS file - jQuery.com > head > script > add here in project.
> **Production version** - for live website; minified and compressed.
> **Development version** - for testing and development (uncompressed and readable code).
2. google CDN : <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
3. MS CDN : <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>

#### 3. Syntax
1. Format : $(selector).action()
2. Below syntax prevent any jQuery code from running before the document(DOM) is finished loading (is ready).
```
$(document).ready(function(){
   // jQuery methods go here...
})

or

$(function(){
   // jQuery methods go here...
});
```

#### 4. selector $()

> https://www.w3schools.com/jquery/trysel.asp

1. name, id, classes, types, attributes, values of attributes 
2. works same as of [CSS Selector](https://www.w3schools.com/cssref/css_selectors.asp); has some own custom selectors.
3. eg : https://www.w3schools.com/jquery/jquery_selectors.asp

####  5. Event  $().event_Method() eg: click()

1. DOM events have an equivalent jQuery method.
```
eg: 
$("p").click(function(){
  // action goes here!!
});
```
2. All events:
![](https://github.com/lekhrajdinkar/javaScript/blob/master/NOTES/assets/events-1.PNG)

> click() / dblclick() - hide()
> mouseleave() / mousedown() - alert()
> hover() - two functions  mouseenter() and mouseleave() methods - 2 alerts()
> focus() / blue - $(this).css("background-color", "#cccccc");

3. effects: Hide, Show, Toggle, Slide, Fade, and Animate.

3.1. Hide/Show
```
$(selector).hide(speed,callback);
$(selector).show(speed,callback);
```
> speed - slow, fast, ms
> callback - unction to be executed after the hide() or show() method completes

3.2. toggle 
- togglebetween the hide() and show() methods
> $(selector).toggle(speed,callback);

3.3. fadeIn / fadeOut
> $(selector).fadeOut(speed,callback); and $(selector).fadeIn(speed,callback);
- fade in a hidden element
- Fade out a visible element

3.4. fadeToggle
> $(selector).fadeToggle(speed,callback);
- If the elements are faded out, fadeToggle() will fade them in.
- If the elements are faded in, fadeToggle() will fade them out








