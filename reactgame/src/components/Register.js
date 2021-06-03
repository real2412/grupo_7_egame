import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import validator from 'validator';

const List = () => {

  const history = useHistory()

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState([])
  const [terminos, setTerminos] = useState([])
  const formRef = useRef(null)
  const [errors, setErrors] = useState([])

  
  
  const handleSubmit = (event) => {
    event.preventDefault()

    let errores = []

    if(validator.isEmpty(firstname)){
        errores.push("Debe ingresar un Nombre")
    }else if(!validator.isLength(firstname, {min:2, max: undefined})){
        errores.push("Debe ingresar de Nombre más de 1 caracter")
    }
    
    if(validator.isEmpty(lastname)){
        errores.push("Debe ingresar un Apellido")
    }else if(!validator.isLength(lastname, {min:2, max: undefined})){
        errores.push("Debe ingresar de Apellido más de 1 caracter")
    }

    if(validator.isEmpty(email)){
        errores.push("Debe ingresar un email")
    }else if(!validator.isEmail(email)){
        errores.push("Debe ingresar un email válido")
    }

    if(validator.isEmpty(password)){
        errores.push("Debe ingresar una Contraseña")
    }else if(!validator.isLength(password, {min:8, max: undefined})){
        errores.push("Debe ingresar de Contraseña al menos 8 caracteres")
    }
    
    if(!image){
        errores.push("Debe agregar una Imagen")      
      }else{
        let arrPath = image.name.split(".")
        let arrFormats = ["jpg", "jpeg", "png", "gif"]
  
        if(!arrFormats.includes(arrPath[arrPath.length-1])){
          errores.push("Debe ingresar una imagen con uno de los sgtes. formatos: "+arrFormats.map(f=>f))
        }
    }

    if(errores.length>0){
      //console.log(image.name)
      setErrors(errores)
    }else{
      const formData = new FormData(formRef.current);

      fetch('http://localhost:3001/users/register', {
        method: 'POST',
        body: formData
      }).then(res => res.json())
      .then(response => {
        console.log(response)
        history.push("/users/login")
      })
      .catch(error => console.error('Error:', error))
    }

  }

    return (
        <>
            <main>
                <div class="form-signup">
                    <form
                        action="/users/register"
                        method="POST"
                        class="create-form"
                        enctype="multipart/form-data"
                        ref={formRef}
                        onSubmit={handleSubmit}
                    >
                        <h1>REGISTRATE</h1><br /><br />
                        <div id="listaerrores" class="text-error">
                            <ul>
                                {
                                    errors.map((er,i)=>{
                                        return <li key={"error-"+i}>{er}</li>
                                    })
                                }
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
                                value={firstname}
                                onChange={(event)=>{setFirstName(event.target.value)}}    
                            />
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
                                value={lastname}
                                onChange={(event)=>{setLastName(event.target.value)}}
                            />
                            <div class="text-error"></div>
                        </div>
                        <div class="control-form">
                            <label for="email"><strong>Correo Electrónico</strong></label><br />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                class="control"
                                value={email}
                                onChange={(event)=>{setEmail(event.target.value)}}
                            />
                            <div class="text-error"></div>
                        </div>
                        <div class="control-form">
                            <label for="image"><strong>Foto de Perfil</strong></label><br />
                            <input
                                type="file"
                                name="image"
                                id="image"
                                class="control"
                                onChange={(event)=>{
                                    setImage(event.target.files[0])
                                }}
                            />
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
                                value={username}
                                onChange={(event)=>{setUsername(event.target.value)}}
                            />
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
                                value={password}
                                onChange={(event)=>{setPassword(event.target.value)}}
                            />
                            <div class="text-error"></div>
                        </div>
                        <div class="control-form">
                            <label for="pass2"><strong>Confirma tu contraseña</strong></label><br />
                            <input
                                type="password"
                                name="password_repeat"
                                id="pass2"
                                class="control"
                                value={passwordRepeat}
                                onChange={(event)=>{setPasswordRepeat(event.target.value)}}
                            />
                            <div class="text-error"></div>
                        </div>
                        <div class="control-form">
                            <div class="check-form">
                                <input
                                    type="checkbox"
                                    name="terminos"
                                    id="check-terminos"
                                    class="check"
                                    defaultChecked={terminos}
                                    onChange={() => setTerminos(!terminos)}    
                                />
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
        </>
    )
}
export default List

