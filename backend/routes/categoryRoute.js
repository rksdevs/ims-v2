const express = require("express");
const router = express.Router();
const{getAllCategories, addCategory, editCategory, deleteCategory} = require("../controllers/categoryControllers")
const {verifyAdmin} = require("../middlewares/authMiddleware")

router.get("/allCategories", verifyAdmin, getAllCategories);
router.post("/addCategory", verifyAdmin, addCategory);
router.put("/updateCategory/:id", verifyAdmin, editCategory);
router.delete("/deleteCategory/:id", verifyAdmin, deleteCategory);


module.exports = router;