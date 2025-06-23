const header = `
        <div class="logo">
            <img src="images/tienda.png" alt="">
            <p class="marca">LaTienda</p>
        </div>

        <div class="formBuscar">
            <form action="">
                <input type="search" name="" id="buscar">
                <i class="fa-solid fa-magnifying-glass"></i>
            </form>
        </div>

        <div class="usuario">
            <a href="favoritos.html"><i class="fa-solid fa-heart"></i></a>
            <a href="carrito.html"><i class="fa-solid fa-cart-shopping"></i></a>
            <a href="login.html"><i class="fa-solid fa-user"></i></a>
            <a href="salir.html" style="display: none;"><i class="fa-solid fa-right-from-bracket"
                    id="btn-salir"></i></a>
        </div>

`;

const nav = `
    <input type="checkbox" id="open-menu">
        <label for="open-menu">
            <i class="fa-solid fa-bars btn"></i>
            <div class="formBuscar">
                <form action="">
                    <input type="search" name="" id="buscar">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </form>
            </div>
        </label>

        <div class="link">
            <a href="index.html"><i class="fa-solid fa-house"></i>Bienvenidos</a>
            <a href="tienda.html"><i class="fa-solid fa-store"></i>Tienda</a>
            <a href="contactenos.html"><i class="fa-solid fa-envelope"></i>Contáctenos</a>
            <a href="administracion.html"><i class="fa-solid fa-toolbox"></i>Administración</a>
        </div>
`;

const footer = `
        <div class="img">
            TECNICA 7 - Des. e Impl. Sitios Web Dinámicos
        </div>
        <div class="curso">
            <p>Proyecto Ecommers 7mo. PROG</p>
        </div>
        <div class="integrantes">
            <p> Prof. María de los Ángeles López</p>
        </div>
`;

document.querySelector('header').innerHTML = header;
document.querySelector('nav').innerHTML = nav;
document.querySelector('footer').innerHTML = footer;

