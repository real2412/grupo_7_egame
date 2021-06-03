import {useState} from 'react'
import { useHistory } from "react-router-dom";
import validator from 'validator';

const Login = () => {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        let errores = []
        if(validator.isEmpty(username)){
            errores.push("Debe ingresar un Usuario")
        }else if(!validator.isLength(username, {min:2, max: undefined})){
            errores.push("Debe ingresar de Nombre más de 1 caracter")
        }
        
        if(validator.isEmpty(username)){
            errores.push("Debe ingresar una Contraseña")
        }
        
        if(errores.length>0){
            setErrors(errores)
        }else{
            fetch("http://localhost:3001/users/login", {
                method: 'POST', // or 'PUT'
                body: new URLSearchParams({username, password}), // data can be `string` or {object}!    
            })
                .then((response=>response.json()))
                .then(
                    (response)=>{
                        console.log(response)
                        if(response.id){
                            localStorage.setItem('logged', JSON.stringify(response));
                            history.push("/")
                        }else{
                            setErrors(["No coincide el usuario con la contraseña"])
                        }
                    },
                    (fail)=>{
                        console.log(fail)
                    }
                )   
        }

    }

    return (
        <main>
            <div class="form-login">
                <form class="create-form" onSubmit={handleSubmit} novalidate>
                    <div class="control-form">
                        <h1>INICIAR SESIÓN</h1><br /><br />
                    </div>
                    <div id="listaerrores" class="text-error">
                        <ul>
                            {
                                errors.map(er=>{
                                    return <li>{er}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div class="control-form">
                        <label for="username"><strong>Usuario o Correo Electrónico</strong></label>
                        <br />
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            class="control" 
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)} 
                        />
                        <div class="text-error">
                        </div>
                    </div>
                    <div class="control-form">
                        <label for="password"><strong>Contraseña</strong></label>
                        <br />
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            class="control"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)} 
                        />
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
                        <button type="submit" class="btn-form">CONTINUAR</button>
                    </div>
                </form>
            </div>
        </main>
    )
}
export default Login