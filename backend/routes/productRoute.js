const express = require('express');
const {addProduct} = require("../controllers/productController")
const {verifyAdmin} = require("../middlewares/authMiddleware")

const router = express.Router();


router.post("/addProduct", verifyAdmin, addProduct);


module.exports = router;