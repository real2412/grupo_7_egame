import {useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";
import logo from '../images/logo.png'

const Head = () => {
    let location = useLocation();
    const [logged, setLogged] = useState(null)

    useEffect(()=>{
        setLogged(JSON.parse(localStorage.getItem('logged')))
    }, [location])

    return (
        <header>
            <nav class="navbar">
                <a href="/" class="brand-link">
                    <img src={ logo } alt="logo" width="60px" />
                    <h1 class="brand">EGAME</h1>
                </a>
                <ul class="main-header-menu-left">
                    <li>
                        <a href="#">
                            Nosotros
                        </a>
                    </li>
                    <li>
                        <a href="/listado">
                            Videojuegos
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Contáctenos
                        </a>
                    </li>
                </ul>
                <ul class="main-header-menu-right">
                    {
                        logged? <li>
                            <a href="/products/">
                                <label title="Login" class="btn-standard"><i class="fa fa-gamepad"></i>Administrar Videojuegos</label>
                            </a>
                            <a href="/users/profile">
                                <label title="Login" class="btn-standard">
                                    <i class="fa fa-user"></i>
                                    {logged.username}
                                </label>
                            </a>
                            <button 
                                title="Login"  
                                class="btn-standard"
                                onClick={()=>{
                                    localStorage.removeItem('logged');
                                }}
                            >
                                <i class="fa fa-sign-out-alt"></i>Cerrar Sesion
                            </button>
                        </li>:
                        <li>
                            <a href="/users/login">
                                <button title="Login" class="btn-standard"><i class="fa fa-sign-in-alt"></i>Acceder</button>
                            </a>
                            <a href="/users/register">
                                <button title="Login" class="btn-standard"><i class="fa fa-user-plus"></i>Registrar</button>
                            </a>
                        </li>
                    }
                  
                    <li>
                        <a href="/carrito" title="Carrito" class="btn-standard" ><i class="fa fa-shopping-cart"></i></a>
                    </li>
                        
                </ul>
                <a href="#" class="navbar__burger">
                    <i class="fas fa-bars"></i>
                </a>
            </nav>
        </header>
    )
}

export default Head