const bcrypt = require('bcryptjs')
const { validationResult } = require("express-validator")

let db = require("../../database/models")

const controller = {
    login: (req, res) => {
        res.render('users/login')
        req.session.userLogged
    },
    list: (req, res) => {
        db.Usuario.findAll()
            .then(users=>{
                res.json(users)
            })
    },
    logout: (req, res) =>{
        req.session.destroy()
        res.redirect('/users/login')
    },
    loginAccess: (req, res) => {
        let username = req.body.username
        let password = req.body.password
        let resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
			return res.json({
                errors: resultValidation.mapped()
			});
		}
        db.Usuario.findAll()
            .then(users=>{
                users.forEach(user=>{
                    if( ( user.username == username || user.email == username ) && 
                        bcrypt.compareSync(password, user.password)){
                        req.session.userLogged = user
                        res.json(user)
                    }
                })
                res.json({
                    error: "Ocurrio un error"
                })
            })
    },
    register: (req, res) => {
        res.render('users/register')
    },
    detail: (req, res) => {
        const usuario = res.locals.userLogged
        db.Usuario.findByPk(req.params.id)
            .then((usuario)=>{
                res.json({usuario})
            }).catch((error)=>{
                res.json({error: "Ocurrio un error"})
            })
    },
    store: (req, res) => {
        const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.json({
				errors: resultValidation.mapped()
			})
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
        }).then((usuario)=>{
            res.json(usuario)
        }).catch((error)=>{
            res.json({error: "Ocurrio un error"})
        })
        
    },
    editar: (req, res) => {
        res.render('users/edit')
    },
    update: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.json({
				errors: resultValidation.mapped()
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
        }).then(()=>{
            res.json(objUsuario)
        }).catch((error)=>{
            res.json({error: "Ocurrio un error"})
        })
        objUsuario.id = req.params.id
        req.session.userLogged = objUsuario
        //res.redirect('/users/profile')
	},
}

module.exports = controller