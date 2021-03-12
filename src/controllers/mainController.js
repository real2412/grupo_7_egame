const mainController = {
    index: (req, res) => {
        res.render('index')
    },
    iniciarSesion: (req, res) => {
        res.render('users/login')
    },
    registro: (req, res) => {
        res.render('users/register')
    },
    carrito: (req, res) => {0
        res.render('products/productCart')
    },
    listado: (req, res) => {
        res.render('products/productList')
    },
    registrarProducto: (req, res) => {
        res.render('products/productRegister')
    },
    editarProducto: (req, res) => {
        res.render('products/productEdit')
    },
    detalle: (req, res) => {
        res.render('products/productDetail')
    }
}

module.exports = mainController