const express = require("express")
const app = express()
const path = require("path")

app.listen(3000, ()=>{
    console.log("Servidor Corriendo")
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})