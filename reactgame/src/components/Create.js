
import Head from './Head'
import Footer from './Footer'
import '../styles/base.css';
const Create = () => {
    return (
        <>
        <Head/>
            <main>
                <div class="form-signup">
                    <form action="/products" method="POST" class="create-form"  enctype="multipart/form-data" novalidate>
                    <h1>REGISTRO DE PRODUCTO</h1><br/><br/>
                <div id="listaerrores" class="text-error"><ul></ul>
                </div><br/>
                <div class="control-form">
                    <label for="usuario"><strong>Nombre del Producto</strong></label><br/>
                    <input 
                        type="text" 
                        name="nombre" 
                        id="id_name" 
                        class="control" 
                        value="<%= locals.oldData? oldData.nombre:'' %>"/>
                        <div class="text-error"></div>
                </div>
                <div class="control-form">
                    <label for="usuario"><strong>Descripción</strong></label><br/>
                    <input 
                        type="text" 
                        name="descripcion" 
                        id="id_description" 
                        class="control" 
                        minlength="6" 
                        value="<%= locals.oldData? oldData.descripcion:'' %>"
                        required/>
                        <div class="text-error"></div>
                </div>
                <div class="control-form">
                    <label for="pass1"><strong>Imagen</strong></label><br/>
                    <input 
                        type="file" 
                        name="image" 
                        id="id_image" 
                        class="control" 
                        required/>
                        <div class="text-error"></div>
                </div>
                <div class="control-form">
                    <label for="pass2"><strong>Categoría</strong></label><br/>
                    <select id="id_category" name="categoria">
                    </select>
                    <div class="text-error"></div>
                </div>
                <div class="control-form">
                    <label for="pass2"><strong>Tamaño(peso)</strong></label><br/>
                    <input type="text" name="length" id="id_weight" class="control" required/>
                    <div class="text-error"></div>
                </div>
                <div class="control-form">
                    <label for="pass2"><strong>Precio</strong></label><br/>
                    <input type="text" name="precio" id="id_price" class="control" minlength="2" required/>
                    <div class="text-error"></div>
                </div>
                <div class="form-button">
                    <a href="/products" class="btn-form">CANCELAR</a>
                    <input type="submit" class="btn-form" value="REGISTRAR" />
                </div>
                    </form>
                </div>
            </main>    
<       Footer/>
        </>
    )
}

export default Home