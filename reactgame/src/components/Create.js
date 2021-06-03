import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import validator from 'validator';

const Create = () => {
  const history = useHistory()

  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [image, setImage] = useState(null)
  const [categoria, setCategoria] = useState('')
  const [length, setLength] = useState('')
  const [precio, setPrecio] = useState('')
  const [categorias, setCategorias] = useState([])
  const formRef = useRef(null)
  const [errors, setErrors] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/products/categorias')
      .then((response)=>response.json())
      .then((response)=>{
          console.log(response["categorias"])
          setCategorias(response["categorias"])
      },
      (fail)=>{
          console.log(fail)
      })
  },[])
  
  const handleSubmit = (event) => {
    event.preventDefault()

    let errores = []

    if(validator.isEmpty(nombre)){
        errores.push("Debe ingresar un Nombre")
    }else if(!validator.isLength(nombre, {min:5, max: undefined})){
        errores.push("Debe ingresar de Nombre al menos 5 caracteres")
    }
    
    if(!validator.isLength(descripcion, {min:20, max: undefined})){
        errores.push("Debe ingresar de Descripcion al menos 20 caracteres")
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

      fetch('http://localhost:3001/products', {
        method: 'POST',
        body: formData
      }).then(res => res.json())
      .then(response => {
        history.push("/products")
      })
      .catch(error => console.error('Error:', error))
    }


  }

  return (
    <main>
      <div class="form-signup">
        <form
          method="POST"
          class="create-form"
          enctype="multipart/form-data"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h1>REGISTRO DE VIDEOJUEGO</h1>
          <br />
          <br />
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
            <label for="usuario">
              <strong>Nombre del Producto</strong>
            </label>
            <br />
            <input
              type="text"
              name="nombre"
              id="id_name"
              class="control"
              value={nombre}
              onChange={(event)=>{setNombre(event.target.value)}}
            />
            <div class="text-error"></div>
          </div>
          <div class="control-form">
            <label for="usuario">
              <strong>Descripción</strong>
            </label>
            <br />
            <input
              type="text"
              name="descripcion"
              id="id_description"
              class="control"
              minlength="6"
              value={descripcion}
              onChange={(event)=>{setDescripcion(event.target.value)}}
            />
            <div class="text-error"></div>
          </div>
          <div class="control-form">
            <label for="pass1">
              <strong>Imagen</strong>
            </label>
            <br />
            <input
              type="file"
              name="image"
              id="id_image"
              class="control"
              onChange={(event)=>{
                setImage(event.target.files[0])
              }}
            />
            <div class="text-error"></div>
          </div>
          <div class="control-form">
            <label for="pass2">
              <strong>Categoría</strong>
            </label>
            <br />
            <select 
              id="id_category" 
              name="categoria"
              onChange={(event)=>{setCategoria(event.target.value)}}
            >
              {
                categorias.map((cat)=>{
                  return <option value={cat.id} >{cat.nombre}</option>
                })
              }
            </select>
            <div class="text-error"></div>
          </div>
          <div class="control-form">
            <label for="pass2">
              <strong>Tamaño(peso)</strong>
            </label>
            <br />
            <input
              type="text"
              name="length"
              id="id_weight"
              class="control"
              value={length}
              onChange={(event)=>{setLength(event.target.value)}}
            />
            <div class="text-error"></div>
          </div>
          <div class="control-form">
            <label for="pass2">
              <strong>Precio</strong>
            </label>
            <br />
            <input
              type="text"
              name="precio"
              id="id_price"
              class="control"
              minlength="2"
              value={precio}
              onChange={(event)=>{setPrecio(event.target.value)}}
            />
            <div class="text-error"></div>
          </div>
          <div class="form-button">
            <a href="/products" class="btn-form">
              CANCELAR
            </a>
            <input type="submit" class="btn-form" value="REGISTRAR" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Create;
