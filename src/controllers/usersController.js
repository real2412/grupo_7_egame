const bcrypt = require('bcryptjs')
const { validationResult } = require("express-validator")

let db = require("../../database/models")

const controller = {
    login: (req, res) => {
        res.render('users/login')
        req.session.userLogged
    },
    logout: (req, res) =>{
        req.session.destroy()
        res.redirect('/users/login')
    },
    loginAccess: (req, res) => {
        const username = req.body.username
        const password = req.body.password
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
			return res.render('users/login', {
				errors: resultValidation.mapped()
			});
		}
        db.Usuario.findAll()
            .then(users=>{
                users.forEach(user=>{
                    if( ( user.username == username || user.email == username ) && 
                        bcrypt.compareSync(password, user.password)){
                        req.session.userLogged = user
                        res.redirect('/')
                    }
                })
                res.redirect('/users/login')
            })
    },
    register: (req, res) => {
        res.render('users/register')
    },
    profile: (req, res) => {
        const usuario = res.locals.userLogged
        res.render('users/profile', {usuario})
    },
    store: (req, res) => {
        const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
        const {
            first_name,
            last_name,
            email,
            username,
            password,
        } = req.body
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const image = req.file.filename
        

        db.Usuario.create({
            nombre: first_name,
            apellido: last_name,
            email: email,
            image,
            username,
            password: hash
        })

        res.redirect('/users/login')
        
    },
    editar: (req, res) => {
        res.render('users/edit')
    },
    update: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
        const {
            first_name,
            last_name,
            email,
            username,
            password,
        } = req.body
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const image = req.file.filename
        let objUsuario = {
            nombre: first_name,
            apellido: last_name,
            email: email,
            image: image,
            username: username,
            password: hash
        }

        db.Usuario.update(objUsuario,{
            where: {
                id: req.params.id
            }
        })
        objUsuario.id = req.params.id
        req.session.userLogged = objUsuario
        res.redirect('/users/profile')

	},
}

module.exports = controller