import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const List = () => {
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3001/products')
            .then((response)=>response.json())
            .then((response)=>{
                console.log(response)
                setProductos(response)
            },
            (fail)=>{
                console.log(fail)
            })
    },[])

    return (
            <main>
                <section class="titulo">
                    <h1><i class="fa fa-list"></i> Listado de Videojuegos</h1>
                </section>
                <section class="lista-prod pago">
                    <div class="group_button">
                        <a href="/products/create" class="btn-standard"><i class="fa fa-plus"></i>Registrar Videojuego</a>
                    </div>
                </section>
                <section class="lista-prod">
                    {
                        productos.map( (producto,i)=>{
                            return (
                                <article key={"prod-"+i} class="lista-prod-item">
                                    <img src={"http://localhost:3001/images/products/"+producto.image} alt="imagen-producto" />
                                    <div class="detail">
                                        <div>
                                            <h2> { producto.nombre } </h2>
                                            <h3> { producto.categoria } </h3>
                                            <h4> { producto.precio } </h4>
                                        </div>
                                        <p>{producto.descripcion} </p>
                                    </div>
                                    <div class="price">
                                        <div>

                                            <Link to={"/products/detail/"+producto.id} class="btn-standard"><i class="fa fa-eye"></i><span class="sp-msj">Ver detalle</span></Link>
                                        </div>
                                    </div>
                                </article>
                            )

                        } )
                    }
                </section>
            </main>
    )
}
export default List