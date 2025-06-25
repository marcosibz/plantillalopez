fetch("htps://fakestoreapi/products")
.then(response => response.json())
.then(json => console.log(json))

const endpoint = '/data/datos.json';


// funcion asincronica
const obtenerProd = async() => {
    
response = await fetch(endpoint);
response = await response.json();
console.log(response);
}

obtenerProd();