import Head from './Head'
import Footer from './Footer'
import '../styles/base.css';
const Login = () => {
    return (
        <>
            <Head/>
            <main>
                <div class="form-login">
                    <form action="/users/login" method="POST" class="create-form" novalidate>
                        <div class="control-form">
                            <h1>INICIAR SESIÓN</h1><br /><br />
                        </div>
                        <div id="listaerrores" class="text-error">
                            <ul>
                            </ul>
                        </div>
                        <div class="control-form">
                            <label for="username"><strong>Usuario o Correo Electrónico</strong></label>
                            <br />
                            <input type="text" name="username" id="username" class="control" minlength="3" required />
                            <div class="text-error">
                            </div>
                        </div>
                        <div class="control-form">
                            <label for="password"><strong>Contraseña</strong></label>
                            <br />
                            <input type="password" name="password" id="password" class="control" required />
                            <div class="text-error">
                            </div>
                        </div>
                        <div class="control-form">
                            <div class="check-form">
                                <input type="checkbox" name="categoria" id="check-terminos" class="check" />
                                <label for="check-terminos">Recordar usuario y contraseña</label>
                            </div>
                        </div>
                        <div class="form-button">
                            <a href="/iniciar-sesion">
                                <button type="submit" class="btn-form">CONTINUAR</button>
                            </a>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Login