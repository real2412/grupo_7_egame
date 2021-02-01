const express = require("express")
const app = express()
const path = require("path")

app.use(express.static("public"))

app.listen(3000, ()=>{
    console.log("Servidor Corriendo en http://localhost:3000")
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/iniciar-sesion", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.get("/registro", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/signup.html"))
})

app.get("/carrito", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
})

app.get("/detalle", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/detalle.html"))
})