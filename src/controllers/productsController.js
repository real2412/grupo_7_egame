const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../public/data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		res.render('products/list', {products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const product = products.find(prod=>req.params.id==prod.id)
		res.render('products/detail', {product})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('products/create')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
		const product = {
							id: products.length+1,
							...req.body
						}

		products.push(product)
		fs.writeFileSync(productsFilePath, JSON.stringify(products))
		res.redirect('products/')

	},

	// Update - Form to edit
	edit: (req, res) => {
		const product = products.find(prod=>req.params.id==prod.id)
		res.render('products/edit', {product})
	},
	// Update - Method to update
	update: (req, res) => {
		const producto_id = Number(req.params.id)
		const {
			name,
			description,
			price,
			category,
			weight,
			image
		} = req.body
		const indice = products.findIndex(p=>p.id===producto_id)
		
		products[indice].name = name
		products[indice].description = description
		products[indice].image = image
		products[indice].price = price
		products[indice].weight = weight
		products[indice].category = category
		
		/* products.push(producto) */
		fs.writeFileSync(productsFilePath, JSON.stringify(products))
		res.redirect('/products/')
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const producto_id = Number(req.params.id)
		const indice = products.findIndex(p=>p.id===producto_id)
		products.splice(indice, 1)
		fs.writeFileSync(productsFilePath, JSON.stringify(products))
		res.redirect('/products')
	}
};

module.exports = controller;