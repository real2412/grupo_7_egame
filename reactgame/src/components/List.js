const List = () => {
    return (
            <main>
                <section class="titulo">
                    <h1><i class="fa fa-list"></i> Listado de Videojuegos</h1>
                </section>
                <section class="lista-prod pago">
                    <div class="group_button">
                        <a href="/products/create" class="btn-standard"><i class="fa fa-plus"></i>Registrar Videojuego</a>
                    </div>
                </section>
                <section class="lista-prod">
                    <article class="lista-prod-item">
                        <img src="<%= producto.image %>" alt="imagen-producto" />
                        <img src="/images/products/<%= producto.image %>" alt="imagen-producto" />
                        <img src="/images/products/predeterminado.jpg" alt="imagen-producto" />
                        <div class="detail">
                            <div>
                                <h2>producto.nombre </h2>
                                <h3>producto.categoria </h3>
                                <h4>producto.precio </h4>
                            </div>
                            <p>producto.descripcion </p>
                        </div>
                        <div class="price">
                            <div>
                                <a href="/products/<%= producto.id %>" class="btn-standard"><i class="fa fa-eye"></i><span class="sp-msj">Ver detalle</span></a>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
    )
}
export default List