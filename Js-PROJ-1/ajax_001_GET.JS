// 1. Simple Ajax call - GET

var http = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/posts/1';
var method = 'GET';

http.open(method, url); 

//onreadystatechange event handler
http.onreadystatechange = function() {
    if(http.readyState == XMLHttpRequest.DONE && http.status == 200){
        console.log(http.responseText);
        console.log(JSON.parse(http.responseText));
    }
    else if(http.readyState == XMLHttpRequest.DONE && http.status != 200){
        console.log("error!");
    }
}

http.send();

***
    
### output:

> console.log(http.responseText);
```
"{
  \"userId\": 1,
  \"id\": 1,
  \"title\": \"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\",
  \"body\": \"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto\"
}"
```

> console.log(JSON.parse(http.responseText));
```
[object Object] {
  body: "quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas totam
nostrum rerum est autem sunt rem eveniet architecto",
  id: 1,
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  userId: 1
}
```
