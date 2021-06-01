const Detail = () => {
    return (
    <main>
        <section class="titulo">
            <h1>Detalle de producto</h1>
        </section>
        <section class="lista-prod">
            <article class="container-detalle">
                <div class="image-container">
                        <img src="/images/products/predeterminado.jpg" alt="imagen-producto" />
                </div>
                <section class="datos-detalle">
                    <div class="detalle-pro">
                        <h2>producto.nombre</h2>
                        <h3>producto.categoria</h3>
                        <p class ="datos-descripcion"></p>
                        <p class="price"></p>
                    </div>
                    <a href="/products/<%= producto.id %>/edit" class="btn-standard"><i class="fa fa-edit"></i><span class="sp-msj">Editar</span></a>
                    <form action="/products/<%= producto.id %>?_method=DELETE" method="POST" >
                        <button class="btn-standard btn-delete"><i class="fa fa-trash"></i><span class="sp-msj">Eliminar</span></button>
                    </form>
                </section>
            </article>
        </section>
        </main>
    )
}
export default Detail