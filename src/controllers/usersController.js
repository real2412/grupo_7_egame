const fs = require('fs')
const path = require('path')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, '../../public/data/users.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

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
        users.forEach(user=>{
            if( ( user.username == username || user.email == username ) && 
                bcrypt.compareSync(password, user.password)){
                req.session.userLogged = user
                res.redirect('/')
            }
        })
        res.redirect('/users/login')
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
        const ultimo_id = users[users.length-1].id
        const objUsuario = {
            id: ultimo_id+1,
            first_name,
            last_name,
            email,
            image,
            username,
            password: hash
        }
        users.push(objUsuario)
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '))
        res.redirect('/users/login')
        
    }
}

module.exports = controller