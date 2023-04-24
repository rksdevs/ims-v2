const Category = require("../models/categoryModel")


//get all categories

const getAllCategories = async(req,res) => {
    try {
        
        //check admin
        const verifyAdmin = req.user.isAdmin;
        if(!verifyAdmin) {
            return res.status(400).json({msg: "Unauthorized!"})
        }

        const allCategories = await Category.find({status: "Active"});
        res.status(200).json(allCategories)
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
        
    }
}

//add categories

const addCategory = async(req,res) => {
    try {

        //check admin
        const verifyAdmin = req.user.isAdmin;
        if(!verifyAdmin) {
            return res.status(400).json({msg: "Unauthorized"});
        }

        const newCategory = new Category ({
            categoryName: req.body.categoryName,
            status: req.body.status
        })

        await newCategory.save();
        const {categoryName, status} = newCategory._doc;
        res.status(200).json({categoryName, status});

        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
        
    }

}

// Edit category

const editCategory = async(req,res) => {
    try {

        //verify admin
        const verifyAdmin = req.user.isAdmin;
        if(!verifyAdmin) {
            return res.status(400).json({msg: "Unauthorized"});
        }

        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body,{new: true})

        res.status(200).json(updatedCategory);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
        
    }
}

//Delete Category

const deleteCategory = async(req,res) => {

    try {
        //verify admin
        const verifyAdmin = req.user.isAdmin;
        if(!verifyAdmin) {
            return res.status(200).send("Unauthorised!");
        }

        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json({msg: "Category deleted"});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
        
    }
}

module.exports = {getAllCategories, addCategory, editCategory, deleteCategory}