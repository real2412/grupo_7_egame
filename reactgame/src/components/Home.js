import Head from './Head'
import Footer from './Footer'
import '../styles/base.css';

const Home = () => {
    return (
        <>
            <Head/>
            <main>
                <section class="banner">
                    <div class="banner__arrow banner__arrow_left">
                        <i class="fas fa-arrow-alt-circle-left"></i>
                    </div>
                    <a href="/detalle" class="banner">
                        <img src="images/ciberpunk.png" width="100%" height="100%" />
                    </a>
                    <div class="banner__arrow banner__arrow_right">
                        <i class="fas fa-arrow-alt-circle-right"></i>
                    </div>
                    <div class="banner__points">
                        <i class="fas fa-circle"></i>
                        <i class="fas fa-circle"></i>
                        <i class="fas fa-circle"></i>
                        <i class="fas fa-circle"></i>
                    </div>
                </section>
                <section class="lista">
                    <h2 class="lista__titulo">Categorias</h2>
                    <div class="lista__items">
                        <article class="lista__items__detalle">
                            <div class="lista__items__image">
                                <img src="images/xbox1.jpg" width="100%" alt="imagen de categoria 1"/>
                            </div>
                            <h3>Categoria 1</h3>
                        </article>
                        <article class="lista__items__detalle">
                            <div class="lista__items__image">
                                <img src="images/xbox2.jpg" width="100%" alt="imagen de categoria 1" />
                            </div>
                            <h3>Categoria 2</h3>
                        </article>
                        <article class="lista__items__detalle">
                            <div class="lista__items__image">
                                <img src="images/xbox3.jpg" width="100%" alt="imagen de categoria 1" />
                            </div>
                            <h3>Categoria 3</h3>
                        </article>
                        <article class="lista__items__detalle">
                            <div class="lista__items__image">
                                <img src="images/xbox4.jpg" width="100%" alt="imagen de categoria 1"/>
                            </div>
                            <h3>Categoria 4</h3>
                        </article>
                    </div>
                </section>
                <section class="lista">
                    <h2 class="lista__titulo">Ultimos Lanzamientos</h2>
                    <div class="lista__items">
                        <article class="lista__items__detalle">
                            <div class="lista__items__image">
                                <a href="/detalle">
                                    <img src="images/ac.jpg" width="100%" alt="imagen de categoria 1"/>
                                </a>
                            </div>
                            <p class="ant_price">S/. 120.00</p>
                            <p class="price">S/. 60.00</p>
                            <div>
                                <a href="/carrito">
                                    <button class="btn-standard">
                                        <i class="fa fa-shopping-cart"></i>Comprar
                                    </button>
                                </a>
                            </div>
                            <div>
                                <a href="/detalle">Ver Detalles</a>
                            </div>
                        </article>
                        <article class="lista__items__detalle">
                            <div class="lista__items__image">
                                <a href="/detalle">
                                    <img src="images/nightmares.jpg" width="100%" alt="imagen de categoria 1"/>
                                </a>
                            </div>
                            <p class="ant_price">S/. 110.00</p>
                            <p class="price">S/. 82.00</p>
                            <div>
                                <a href="/carrito">
                                    <button class="btn-standard">
                                        <i class="fa fa-shopping-cart"></i>Comprar
                                    </button>
                                </a>
                            </div>
                            <div>
                                <a href="/detalle">Ver Detalles</a>
                            </div>
                        </article>
                        <article class="lista__items__detalle">
                            <div class="lista__items__image">
                                <a href="/detalle">
                                    <img src="images/cod.jpg" width="100%" alt="imagen de categoria 1"/>
                                </a>
                            </div>
                            <p class="ant_price">S/. 100.00</p>
                            <p class="price">S/. 42.00</p>
                            <div>
                                <a href="/carrito">
                                    <button class="btn-standard">
                                        <i class="fa fa-shopping-cart"></i>Comprar
                                    </button>
                                </a>
                            </div>
                            <div>
                                <a href="/detalle">Ver Detalles</a>
                            </div>
                        </article>
                        <article class="lista__items__detalle">
                            <div class="lista__items__image">
                                <a href="/detalle">
                                    <img src="images/mortalcombat.jpg" width="100%" alt="imagen de categoria 1"/>
                                </a>
                            </div>
                            <p class="ant_price">S/. 140.00</p>
                            <p class="price">S/. 65.00</p>
                            <div>
                                <a href="/carrito">
                                    <button class="btn-standard">
                                        <i class="fa fa-shopping-cart"></i>Comprar
                                    </button>
                                </a>
                            </div>
                            <div>
                                <a href="/detalle">Ver Detalles</a>
                            </div>
                        </article>
                    </div>
                    <div class="container-button">
                        <a href="/listado" class="btn-standard">
                            
                            Ver más Videojuegos >
                            
                        </a>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Home