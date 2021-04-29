let db = require("../../database/models")

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		db.Producto.findAll()
			.then((productos)=>{
				res.render('products/list', {productos})
			})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		db.Producto.findByPk(req.params.id)
			.then(producto=>{
				res.render('products/detail', {producto})
			})
	},

	// Create - Form to create
	create: (req, res) => {
		db.Categoria.findAll()
			.then((categorias)=>{
				res.render('products/create', {categorias})
			})
	},
	
	// Create -  Method to store
	store: (req, res) => {
        const usuario = res.locals.userLogged
		db.Producto.create({
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			image: req.file.filename,
			categoria_id: req.body.categoria,
			length: req.body.length,
			precio: req.body.precio,
			creado_por: usuario.id
		})

		res.redirect('/products')
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
        const usuario = res.locals.userLogged
		db.Producto.update({
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			image: req.file.filename,
			categoria_id: req.body.categoria,
			length: req.body.length,
			precio: req.body.precio,
			creado_por: usuario.id
		},{
			where: {
				id: req.params.id
			}
		})

		res.redirect('/products/'+req.params.id)

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		db.Producto.destroy({
			where: {
                id: req.params.id
            }
		})

		res.redirect('/products/')
	}
};

module.exports = controller;