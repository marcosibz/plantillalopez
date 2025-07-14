document.addEventListener("DOMContentLoaded", () => {
  const endpoint = "/data/datos.json";

  const getProductos = async () => {
    try {
      response = await fetch(endpoint);
      datos = await response.json();
      console.log(datos);
      mostrarProductos(datos);
    } catch (error) {
      console.log("error");
    }
  };
  getProductos();

  const contenedorProd = document.querySelector("section.productos");
  const mostrarProductos = (datos) => {
    datos.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = ` <div class="top">
                        <img src="images/productos/${item.image}" alt="">
                        <p class="titProd">PRODUCTO 5</p>
                        <p class="descrpcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <a href="opiniones.html" class="resenias">ver reseñas</a>
                    </div>
                    <div class="bottom">
                        <div class="precio">
                            <span>$1150</span> <button class="favorito"><i
                                    class="fa-solid fa-heart"></i></button></span>
                        </div>
                        <div class="agregar">
                            <div class="amount">
                                <span class="descrpcion"> Cant </span>
                                <input type="number" name="cant" id="cant" min="0" value="1">
                            </div>
                            <button class="addcarrito" id="addcarrito"><i class="fa-solid fa-cart-plus"></i></button>
                        </div>
                    </div>
                `;
      contenedorProd.appendChild(card);

      card.querySelector("#addcarrito").onclick = () => {
        const cant = parseInt(card.querySelector('[name = "cant"]').value);
        agregarAlCarrito(item, cant);
      };
    });
  };
});
// evento btn agregar
