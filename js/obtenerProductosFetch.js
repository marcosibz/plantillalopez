
fetch("https://fakestoreapi.com/productos")
.then(Response => Response.json);
.then(json => console.log(json));