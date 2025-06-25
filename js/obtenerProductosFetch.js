fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))

const endpoint = '/data/datos.json';


// funcion asincronica
const obtenerProd = async() => {
    response = await fetch(endpoint);
    response = response.json();
    console.log(response);
    
    obtenerProd();
}

// funcion asincronica
const obtenerProd2 = async() => {
    
response = await fetch(endpoint);
response = response.json();
console.log(response);
 catch(error) {
    console.log("error al leer los datos")
}
}
obtenerProd();


// funcion asincronica
const obtenerProd3 = async() => {
    try{
    response = await fetch(endpoint);
    response = response.json();
    console.log(response);
    } catch(error) {
        console.log("error al leer los datos")
    }
    }
    obtenerProd();