const express = require('express')
const router = express.Router()
const multer = require("multer")
const path = require('path');

const authMiddleware = require("../middlewares/authMiddleware")
const validationFormProductsMiddleware = require("../middlewares/validationFormProductsMiddleware")
const productsController = require("../controllers/productsController")

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'public/images/products')
    },
    filename: function(req, file, cb){
        let extension = path.extname(file.originalname)
        cb(null, path.basename(file.originalname, extension)+"-"+(+new Date())+extension)
    }
})

let upload = multer({ storage})

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index);//authMiddleware, productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/categorias', productsController.categorias)//authMiddleware, productsController.categorias);
router.post('/', upload.single('image'), validationFormProductsMiddleware, productsController.store)//authMiddleware, productsController.store);//, productsController.store); 

/*** GET ONE PRODUCT ***/ 
router.get('/:id', productsController.detail);//authMiddleware, productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', authMiddleware, productsController.edit); 
router.put('/:id', upload.single('image'), validationFormProductsMiddleware, productsController.update);//authMiddleware, productsController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy);//authMiddleware, productsController.destroy); 


module.exports = router