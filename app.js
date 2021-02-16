const express = require("express")
const app = express()
const path = require("path")

app.use(express.static("public"))
app.set('view engine', 'ejs')

const puerto = process.env.PORT || 3000

app.listen(puerto, ()=>{
    console.log("Servidor Corriendo en http://localhost:3000")
})

app.get("/", (req, res) => {
    res.render(path.resolve(__dirname, "./views/index.ejs"))
})

app.get("/iniciar-sesion", (req, res) => {
    res.render(path.resolve(__dirname, "./views/users/login.ejs"))
})

app.get("/registro", (req, res) => {
    res.render(path.resolve(__dirname, "./views/users/register.ejs"))
})

app.get("/carrito", (req, res) => {
    res.render(path.resolve(__dirname, "./views/products/productCart.ejs"))
})

app.get("/listado", (req, res) => {
    res.render(path.resolve(__dirname, "./views/products/productList.ejs"))
})

app.get("/registrarProducto", (req, res) => {
    res.render(path.resolve(__dirname, "./views/products/productRegister.ejs"))
})

app.get("/editarProducto", (req, res) => {
    res.render(path.resolve(__dirname, "./views/products/productEdit.ejs"))
})

app.get("/detalle", (req, res) => {
    res.render(path.resolve(__dirname, "./views/products/productDetail.ejs"))
})