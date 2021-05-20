const path = require("path")
const {body} = require("express-validator")
let db = require("../../database/models")

const validationForm = [
    body('nombre').notEmpty().withMessage("Tienes que escribir un nombre")
        .isLength({min:5}).withMessage("Debes ingresar al menos 5 caracteres"),
    body('descripcion').notEmpty().withMessage("Tienes que escribir una Descripcion")
        .isLength({min:20}).withMessage("Debes ingresar al menos 20 caracteres"),
    body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})

]

module.exports = validationForm