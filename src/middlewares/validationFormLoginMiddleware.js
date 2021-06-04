const {body} = require("express-validator")

const validationForm = [
   
    body('username').notEmpty().withMessage("Tienes que escribir un usuario"),
    body('password').notEmpty().withMessage("Tienes que escribir una constraseña")

]

module.exports = validationForm