document.addEventListener("DOMContentLoaded", () => {

    const endpoint = '/data/datos.json';

    const getProductos = async () =>{
        try { response = await fetch(endpoint) 
            datos = await response.json()
            console.log(datos)
            mostrarProductos(datos)
        } catch(error) {
            console.log("error");
        }
    }
    getProductos();


    const contenedorProd = document.querySelector('Selection.productos')
    const mostrarProductos = (datos) => {
        datos:foreach(item => {
            const card = document.createElement('div')
            card.className = 'card'
            card.innerHTML = ` `
            contenedorProd.appendChild(card)
        });
    }

})