const express = require('express')
const router = express.Router()

const mainController = require("../controllers/mainController")

router.get("/", mainController.index)

router.get("/iniciar-sesion", mainController.iniciarSesion)

router.get("/registro", mainController.registro)

router.get("/carrito", mainController.carrito)

router.get("/listado", mainController.listado)

router.get("/registrarProducto", mainController.registrarProducto)

router.get("/editarProducto", mainController.editarProducto)

router.get("/detalle", mainController.detalle)

module.exports = router