const express = require('express')
const router = express.Router()
const multer = require("multer")
const path = require('path');

const authMiddleware = require("../middlewares/authMiddleware")
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
router.get('/', authMiddleware, productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', authMiddleware, productsController.create); 
router.post('/', upload.single('image'), authMiddleware, productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/:id', authMiddleware, productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', authMiddleware, productsController.edit); 
router.put('/:id', authMiddleware, productsController.update);


/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', authMiddleware, productsController.destroy); 


module.exports = router