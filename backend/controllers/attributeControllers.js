const Attributes = require("../models/attributeModel");
const { findByIdAndUpdate } = require("../models/userModel");


//add attribute

const addAttribute = async(req,res) => {
    try {

        //verifyAdmin
        const verifyAdmin = req.user.isAdmin;
        if(!verifyAdmin) {
            return res.status(400).json({msg: "Unauthorized"});
        }

        const newAttribute = new Attributes(req.body)

        await newAttribute.save();
        const {attributeName, value} = newAttribute._doc;
        res.status(200).json({attributeName,value})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
        
    }
}

//update attribute 

const editAttribute = async(req,res) => {
    try {
       //verifyAdmin
       const verifyAdmin = req.user.isAdmin;
       if(!verifyAdmin) {
           return res.status(400).json({msg: "Unauthorized"});
       } 

       const updatedAttribute = await Attributes.findByIdAndUpdate(req.params.id, req.body, {new: true})
       
       res.status(200).json(updatedAttribute);
       

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

// delete attribute

const deleteAttribute = async(req,res) => {

    try {
        //verify admin
        const verifyAdmin = req.user.isAdmin;
        if(!verifyAdmin) {
            return res.status(400).json({msg: "Unauthorized"});
        }

        await Attributes.findByIdAndDelete(req.params.id);
        res.status(200).json({msg: "Attribute Deleted"})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }

}

//get all attributes

const getAllAttributes = async(req,res) => {
    try {
        //verify admin
        const verifyAdmin = req.user.isAdmin;
        if(!verifyAdmin) {
            return res.status(400).json({msg: "Unauthorized"});
        }

        const allAttributes = await Attributes.find({status: "Active"});

        res.status(200).json(allAttributes);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
        
    }
}

// add value to an attribute

const addValueToAttribute = async(req, res) => {
    try {

        //verify admin
        const verifyAdmin = req.user.isAdmin;
        if(!verifyAdmin) {
            return res.status(400).json({msg: "Unauthorized"});
        }


        const value= req.body.value;
        const attribute = await Attributes.findById(req.params.id);

        //push the new value
        attribute.value.push(value);

        await attribute.save();
        res.status(200).json(attribute);


    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

module.exports = {addAttribute, editAttribute, deleteAttribute, getAllAttributes, addValueToAttribute}