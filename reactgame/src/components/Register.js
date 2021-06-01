import Head from './Head'
import Footer from './Footer'
import '../styles/base.css';
const List = () => {
    return (
        <>
            <Head />
            <main>
                <div class="form-signup">
                    <form
                        action="/users/register"
                        method="POST"
                        class="create-form"
                        enctype="multipart/form-data"
                        novalidate
                    >
                        <h1>REGISTRATE</h1><br /><br />
                        <div id="listaerrores" class="text-error">
                            <ul>
                            </ul>
                        </div>
                        <br />
                        <div class="control-form">
                            <label for="first_name"><strong>Primer Nombre</strong></label><br />
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                class="control"
                                required />
                            <div class="text-error">
                            </div>
                        </div>
                        <div class="control-form">
                            <label for="last_name"><strong>Primer Apellido</strong></label><br />
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                class="control"
                                required />
                            <div class="text-error"></div>
                        </div>
                        <div class="control-form">
                            <label for="email"><strong>Correo Electrónico</strong></label><br />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                class="control"
                                required />
                            <div class="text-error"></div>
                        </div>
                        <div class="control-form">
                            <label for="image"><strong>Foto de Perfil</strong></label><br />
                            <input
                                type="file"
                                name="image"
                                id="image"
                                class="control"
                                required />
                            <div class="text-error">
                            </div>
                        </div>
                        <div class="control-form">
                            <label for="username"><strong>Nombre de Usuario</strong></label><br />
                            <input
                                type="text"
                                name="username"
                                id="username"
                                class="control"
                                required />
                            <div class="text-error"></div>
                        </div>
                        <div class="control-form">
                            <label for="pass1"><strong>Contraseña</strong></label><br />
                            <input
                                type="password"
                                name="password"
                                id="pass1"
                                class="control"
                                minlength="8"
                                required />
                            <div class="text-error"></div>
                        </div>
                        <div class="control-form">
                            <label for="pass2"><strong>Confirma tu contraseña</strong></label><br />
                            <input
                                type="password"
                                name="password_repeat"
                                id="pass2"
                                class="control"
                                required />
                            <div class="text-error"></div>
                        </div>
                        <div class="control-form">
                            <div class="check-form">
                                <input
                                    type="checkbox"
                                    name="terminos"
                                    id="check-terminos"
                                    class="check" />
                                <label for="check-terminos">Acepto los Términos y Condiciones</label>
                                <div class="text-error"></div>
                            </div>
                        </div>
                        <div class="form-button">
                            <a href="/" class="btn-form">CANCELAR</a>
                            <button type="submit" class="btn-form">REGISTRAR</button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default List

