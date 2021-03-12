const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require('body-parser');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

const mainRoute = require("./routes/mainRoute")
const productsRoute = require("./routes/productsRoute")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(methodOverride('_method'))

const puerto = process.env.PORT || 3000

app.listen(puerto, ()=>{
    console.log("Servidor Corriendo en http://localhost:3000")
})

app.use('/', mainRoute)
app.use('/products', productsRoute)