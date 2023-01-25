const express = require("express");
const router = express.Router();
const Book = require("../model/pic");
const  Controller = require("../controllers/pics");

router.get("/",  Controller.getAllPics);
router.post("/",  Controller.addPic);
router.get("/:id",  Controller.getById);
router.put("/:id",  Controller.updatePic);
router.delete("/:id",  Controller.deletePic);

module.exports = router;
