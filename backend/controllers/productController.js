const Product = require("../models/productModel");
const Brand = require("../models/brandModel");
const Category = require("../models/categoryModel");
const Attributes = require("../models/attributeModel");

//add product

const addProduct = async(req, res) => {
    try {
       
        //verify admin
        const verifyAdmin = req.user.isAdmin;
        if(!verifyAdmin) {
            return res.status(400).json({msg: "Unauthorized!"});
        }

        const {productName, image, sku, quantity, price, description, brand, category, attribute} = req.body;

        //status verification
        const brandStatus = await Brand.findOne({_id: brand, status: "Active"});

        if(!brandStatus) {
            return res.status(400).json({msg: "Brand is not available!"});
        }

        const categoryStatus = await Category.findOne({_id: category, status: "Active"});

        if(!categoryStatus) {
            return res.status(400).json({msg: "Category is not available!"});
        }

        const attributeStatus = await Attributes.findOne({_id: attribute, status: "Active"});

        if(!attributeStatus) {
            return res.status(400).json({msg: "Attribute is not available!"});
        }



        const newProduct = new Product({
            productName: productName,
            image: image,
            sku: sku,
            quantity: quantity,
            price: price,
            description: description,
            brand: brand,
            category: category,
            attribute: attribute,
        })

        await newProduct.save();
        res.status(200).json(newProduct);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
        
    }
}

module.exports = {addProduct}