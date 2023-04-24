const express = require("express");
const router = express.Router();

const {verifyAdmin}= require("../middlewares/authMiddleware")
const {addAttribute, editAttribute, deleteAttribute, getAllAttributes, addValueToAttribute} = require("../controllers/attributeControllers")

router.get("/allAttributes", verifyAdmin, getAllAttributes );
router.post("/addAttribute", verifyAdmin, addAttribute );
router.put("/updateAttribute/:id", verifyAdmin, editAttribute );
router.delete("/deleteAttribute/:id", verifyAdmin, deleteAttribute );
router.post("/addValueToAttribute/:id", verifyAdmin, addValueToAttribute );

module.exports = router;