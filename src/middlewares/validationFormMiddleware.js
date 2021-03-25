const path = require("path")
const {body} = require("express-validator")

const validationForm = [
    body('first_name').notEmpty().withMessage("Tienes que escribir un nombre"),
    body('last_name').notEmpty().withMessage("Tienes que escribir un Apellido"),
    body('email').notEmpty().withMessage("Tienes que escribir un Correo").isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('username').notEmpty().withMessage("Tienes que escribir un Nombre de Usuario"),
    body('password').notEmpty().withMessage("Tienes que escribir una Contraseña"),
    body('terminos').notEmpty().withMessage("Debes aceptar los Términos y Condiciones"),
    body('password_repeat').notEmpty().withMessage("Tienes que repetir la Contraseña").custom( async (confirmPassword, {req}) => {
        const password = req.body.password

        // If password and confirm password not same
        // don't allow to sign up and throw error
        if(password !== confirmPassword){
            throw new Error('Las contraseñas deben ser iguales')
        }
    }),
    body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

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