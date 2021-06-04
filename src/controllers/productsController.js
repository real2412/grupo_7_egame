let db = require("../../database/models")
const { validationResult } = require("express-validator")

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		db.Producto.findAll()
			.then((productos)=>{
				//res.render('products/list', {productos})
				res.json(productos)
			})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		db.Producto.findByPk(req.params.id)
			.then(producto=>{
				//res.render('products/detail', {producto})
				res.json(producto)
			})
	},

	// Create - Form to create
	categorias: (req, res) => {
		db.Categoria.findAll()
			.then((categorias)=>{
				res.json({categorias})
			})
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
			db.Categoria.findAll()
				.then((categorias)=>{
					/*return res.render('products/create', {
						categorias,
						oldData: req.body,
						errors: resultValidation.mapped()
					});*/
					return res.json({
						errors: resultValidation.mapped()
					});
				})
		}else{
			//const usuario = res.locals.userLogged
			db.Producto.create({
				nombre: req.body.nombre,
				descripcion: req.body.descripcion,
				image: req.file.filename,
				categoria_id: req.body.categoria,
				length: req.body.length,
				precio: req.body.precio,
				creado_por: req.body.creado_por//usuario.id
			}).then((producto)=>{
				//res.redirect('/products')
				res.json(producto)
			}).catch((error)=>{
				res.json({error: "Ocurrio un error"})
			})
		}

	},

	// Update - Form to edit
	edit: (req, res) => {
		let consultaProducto = db.Producto.findByPk(req.params.id)
		let consultaCategorias = db.Categoria.findAll()

		Promise.all([consultaProducto, consultaCategorias])
			.then(([producto, categorias])=>{
				res.render('products/edit', {producto, categorias})
			})
	},
	// Update - Method to update
	update: (req, res) => {
		const resultValidation = validationResult(req);
		if (resultValidation.errors.length > 0) {
			let consultaProducto = db.Producto.findByPk(req.params.id)
			let consultaCategorias = db.Categoria.findAll()

			Promise.all([consultaProducto, consultaCategorias])
				.then(([producto, categorias])=>{
					res.json({
						errors: resultValidation.mapped()
					})
				})
		}else{
			//const usuario = res.locals.userLogged
			const objProducto = {
				nombre: req.body.nombre,
				descripcion: req.body.descripcion,
				image: req.file.filename,
				categoria_id: req.body.categoria,
				length: req.body.length,
				precio: req.body.precio,
				creado_por: req.body.creado_por
			}

			db.Producto.update(objProducto,{
				where: {
					id: req.params.id
				}
			}).then(()=>{
				res.json(objProducto)
			}).catch((error)=>{
				res.json({error: "Ocurrio un error"})
			})

			//res.redirect('/products/'+req.params.id)
		}

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		db.Producto.destroy({
			where: {
                id: req.params.id
            }
		}).then(()=>{
			res.json({success: "Se realizó la eliminación"})
		}).catch((error)=>{
			res.json({error: "Ocurrio un error"})
		})

		//res.redirect('/products/')
	}
};

module.exports = controller;