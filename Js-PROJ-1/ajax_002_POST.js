// 2. Simple Ajax call - POST

var http = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/posts';
var method = 'POST';

http.open(method, url); 

//onreadystatechange event handler
http.onreadystatechange = function() {
    if(http.readyState == XMLHttpRequest.DONE && http.status == 201){
        console.log(JSON.parse(http.responseText));
    }
    else if(http.readyState == XMLHttpRequest.DONE && http.status != 201){
        console.log("error!");
    }
}

http.setRequestHeader('Content-Type','x-www-form-urlencoded');
var data = "title=LEKHRAJ_POST&body=abc"; 
http.send(data);

***
    
### output:

> console.log(JSON.parse(http.responseText));
```
[object Object] {
  id: 101
}
```
