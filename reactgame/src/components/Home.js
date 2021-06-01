import '../styles/base.css';
import ciberpunk from '../images/ciberpunk.png'
import xbox1 from '../images/xbox1.jpg'
import xbox2 from '../images/xbox2.jpg'
import xbox3 from '../images/xbox3.jpg'
import xbox4 from '../images/xbox4.jpg'
import ac from '../images/ac.jpg'
import nightmares from '../images/nightmares.jpg'
import cod from '../images/cod.jpg'
import mortalcombat from '../images/mortalcombat.jpg'
const Home = () => {
    return (
            <main>
                <section class="banner">
                    <div class="banner__arrow banner__arrow_left">
                        <i class="fas fa-arrow-alt-circle-left"></i>
                    </div>
                    <a href="/detalle" class="banner">
                        <img src={ciberpunk} width="100%" height="100%" />
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
                                <img src={xbox1} width="100%" alt="imagen de categoria 1"/>
                            </div>
                            <h3>Categoria 1</h3>
                        </article>
                        <article class="lista__items__detalle">
                            <div class="lista__items__image">
                                <img src={xbox2} width="100%" alt="imagen de categoria 1" />
                            </div>
                            <h3>Categoria 2</h3>
                        </article>
                        <article class="lista__items__detalle">
                            <div class="lista__items__image">
                                <img src={xbox3} width="100%" alt="imagen de categoria 1" />
                            </div>
                            <h3>Categoria 3</h3>
                        </article>
                        <article class="lista__items__detalle">
                            <div class="lista__items__image">
                                <img src={xbox4} width="100%" alt="imagen de categoria 1"/>
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
                                    <img src={ac} width="100%" alt="imagen de categoria 1"/>
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
                                    <img src= {nightmares} width="100%" alt="imagen de categoria 1"/>
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
                                    <img src={cod} width="100%" alt="imagen de categoria 1"/>
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
                                    <img src={mortalcombat} width="100%" alt="imagen de categoria 1"/>
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
                        Ver más Videojuegos 
                        </a>
                    </div>
                </section>
            </main>
    )
}

export default Home