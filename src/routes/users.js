const express = require('express')
const router = express.Router()
const multer = require("multer")
const path = require('path');
const { body} = require("express-validator")

const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")
const validationFormMiddleware = require("../middlewares/validationFormMiddleware")
const usersController = require("../controllers/usersController")

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'public/images/users')
    },
    filename: function(req, file, cb){
        let extension = path.extname(file.originalname)
        cb(null, path.basename(file.originalname, extension)+"-"+(+new Date())+extension)
    }
})

let upload = multer({ storage})

router.get("/login", guestMiddleware, usersController.login)
router.get("/logout", usersController.logout)
router.post("/login", body('username').notEmpty().withMessage("Tienes que escribir un usuario"),
body('password').notEmpty().withMessage("Tienes que escribir una constraseña"), usersController.loginAccess)

router.get("/register", guestMiddleware, usersController.register)
router.get("/profile", authMiddleware, usersController.profile)

router.put('/:id', upload.single('image'), validationFormMiddleware, usersController.update);
router.get("/editar", authMiddleware, usersController.editar)

router.post("/register", upload.single('image'), validationFormMiddleware, usersController.store)


module.exports = router
