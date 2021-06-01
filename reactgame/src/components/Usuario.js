import Head from './Head'
import Footer from './Footer'
import '../styles/base.css';

const Usuario = () => {
    return (
        <>
<link rel="stylesheet" href="/css/forms.css">
    <main>
        <div class="form-signup">
            <form 
                action="/users/register" 
                method="POST" 
                class="create-form" 
                enctype="multipart/form-data"
                novalidate>
                <h1>REGISTRATE</h1>
                <br>
                <br>
                <div id="listaerrores" class="text-error">
                    <ul>
                    </ul>
                </div>
                <br>
                <div class="control-form">
                    <label for="first_name"><strong>Primer Nombre</strong></label>
                    <br>
                    <input 
                        type="text" 
                        name="first_name" 
                        id="first_name" 
                        class="control" 
                        value="<%= locals.oldData? oldData.first_name:'' %>" 
                        required>
                        <div class="text-error">
                        </div>
                    </input>
                     }
                </div>
                <div class="control-form">
                    <label for="last_name"><strong>Primer Apellido</strong></label>
                    <br>
                    <input 
                        type="text" 
                        name="last_name" 
                        id="last_name" 
                        class="control" 
                        value="<%= locals.oldData? oldData.last_name:'' %>" 
                        required>
                        <div>class="text-error">
                        </div>
                    </input>    
                </div>
                <div class="control-form">
                    <label for="email"><strong>Correo Electrónico</strong></label>
                    <input   
                        type="email" 
                        name="email" 
                        id="email" 
                        class="control" 
                        value="<%= locals.oldData? oldData.email:'' %>" 
                        required>
                        <div class="text-error">
                        </div>
                        </input>
                <div class="control-form">
                    <label for="image"><strong>Foto de Perfil</strong></label>
                    <br>
                    <input 
                        type="file" 
                        name="image"
                        id="image" 
                        class="control" 
                        required>
                        <div class="text-error">
                        </div>
                        </input>
                <div class="control-form">
                    <label for="username"><strong>Nombre de Usuario</strong></label>
                    <br>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        class="control" 
                        value="<%= locals.oldData? oldData.username:'' %>" 
                        required>
                        <div class="text-error">
                        </div>
                    </input>
                </div>
                <div class="control-form">
                    <label for="pass1"><strong>Contraseña</strong></label>
                    <br>
                    <input 
                        type="password" 
                        name="password" 
                        id="pass1" 
                        class="control" 
                        minlength="8" 
                        value="<%= locals.oldData? oldData.password:'' %>" 
                        required>
                        <div class="text-error">
                        </div>
                    </input>
                </div>
                <div class="control-form">
                    <label for="pass2"><strong>Confirma tu contraseña</strong></label>
                    <br>
                    <input 
                        type="password" 
                        name="password_repeat" 
                        id="pass2" 
                        class="control" 
                        value="<%= locals.oldData? oldData.password_repeat:'' %>" 
                        required>
                        <div class="text-error">
                        </div>
                    </input>
                </div>
                <div class="control-form">
                    <div class="check-form">
                        <input 
                            type="checkbox" 
                            name="terminos" 
                            id="check-terminos" 
                            class="check">
                        <label for="check-terminos">Acepto los Términos y Condiciones</label>
                            <div class="text-error">
                            </div>
                <div class="form-button">
                    <a href="/" class="btn-form">CANCELAR</a>
                    <button type="submit" class="btn-form">REGISTRAR</button>
                </div>
            </form>
        </div>
    </main>
    <script type="text/javascript" src="/js/validator.min.js"></script>
    <script type="text/javascript">
        window.onload = ()=>{
            let formulario = document.querySelector("form")
            formulario.addEventListener("submit", (e)=>{
                let errores = []
                let campoFirstName = document.querySelector("#first_name")
                let campoLastName = document.querySelector("#last_name")
                let campoEmail = document.querySelector("#email")
                let campoPassword = document.querySelector("#pass1")
                let campoImage = document.querySelector("#image")

                if(validator.isEmpty(campoFirstName.value)){
                    errores.push("Debe ingresar un Nombre")
                }else if(!validator.isLength(campoFirstName.value, {min:2, max: undefined})){
                    errores.push("Debe ingresar de Nombre más de 1 caracter")
                }
                
                if(validator.isEmpty(campoLastName.value)){
                    errores.push("Debe ingresar un Apellido")
                }else if(!validator.isLength(campoLastName.value, {min:2, max: undefined})){
                    errores.push("Debe ingresar de Apellido más de 1 caracter")
                }

                if(validator.isEmpty(campoEmail.value)){
                    errores.push("Debe ingresar un email")
                }else if(!validator.isEmail(campoEmail.value)){
                    errores.push("Debe ingresar un email válido")
                }

                if(validator.isEmpty(campoPassword.value)){
                    errores.push("Debe ingresar una Contraseña")
                }else if(!validator.isLength(campoPassword.value, {min:8, max: undefined})){
                    errores.push("Debe ingresar de Contraseña al menos 8 caracteres")
                }
                
                let arrPath = campoImage.value.split(".")
                let arrFormats = ["jpg", "jpeg", "png", "gif"]
                if(validator.isEmpty(campoImage.value)){
                    errores.push("Debe agregar una Imagen")
                }else if(!arrFormats.includes(arrPath[arrPath.length-1])){
                    errores.push("Debe ingresar una imagen con uno de los sgtes. formatos: "+arrFormats.map(f=>f))
                }

                if(errores.length>0){
                    e.preventDefault()
                    let listaErrores = document.querySelector("#listaerrores ul")
                    listaErrores.innerHTML = ""
                    errores.forEach(error=>{
                        listaErrores.innerHTML += "<li>"+error+"</li>"
                    })
                }
            })
        </>
        }
    )
}
export default Usuario