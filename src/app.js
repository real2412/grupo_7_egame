const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require('body-parser');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session')
const cors = require('cors')

const mainRoute = require("./routes/main")
const productsRoute = require("./routes/products")
const usersRoute = require("./routes/users")
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware")

app.use(cors())
app.use(session({secret: "frase-secreta"}))
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(methodOverride('_method'))

const puerto = process.env.PORT || 3001

app.listen(puerto, ()=>{
    console.log("Servidor Corriendo en http://localhost:3001")
})

app.use(userLoggedMiddleware)
app.use('/', mainRoute)
app.use('/products', productsRoute)
app.use('/users', usersRoute)
