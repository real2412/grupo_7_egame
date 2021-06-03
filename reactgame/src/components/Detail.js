import { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";

const Detail = () => {
    const history = useHistory()
    
    const [producto, setProducto] = useState(null)
    let { id } = useParams();

    useEffect(()=>{
        console.log('http://localhost:3001/products/'+id)
            fetch('http://localhost:3001/products/'+id)
                .then((response)=>response.json())
                .then((response)=>{
                    console.log(response)
                    setProducto(response)
                })
    },[])

    const handleEdit = () => {
        history.push("/products/edit/"+id)
    }

    const handleEliminar = () => {
        fetch('http://localhost:3001/products/'+id,{
            method: "delete"
        })
            .then((response)=>response.json())
            .then((response)=>{
                console.log(response)
                history.push("/products")
            })
    }

  return (
    <main>
      <section class="titulo">
        <h1>Detalle de producto</h1>
      </section>
      <section class="lista-prod">
        <article class="container-detalle">
          <div class="image-container">
              {
                  producto && 
                  <img
                    src={"http://localhost:3001/images/products/"+producto.image}
                    alt="imagen-producto"
                  />
              }
          </div>
          <section class="datos-detalle">
            <div class="detalle-pro">
              <h2>{producto && producto.nombre}</h2>
              <h3>{producto && producto.categoria}</h3>
              <p class="datos-descripcion">{producto && producto.descripcion}</p>
              <p class="price">{producto && producto.precio}</p>
            </div>
            <button
                class="btn-standard"
                onClick={handleEdit}
            >
              <i class="fa fa-edit"></i>
              <span class="sp-msj">Editar</span>
            </button>            
            <button 
                class="btn-standard btn-delete"
                onClick={handleEliminar}
            >
                <i class="fa fa-trash"></i>
                <span class="sp-msj">Eliminar</span>
            </button>
          </section>
        </article>
      </section>
    </main>
  );
};
export default Detail;
