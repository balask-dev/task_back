const Pic = require("../model/pic");

async function getAllPics(req, res, next) {
  let pics;
  try {
    pics = await Pic.find();
  } catch (err) {
    console.log(err);
  }

  if (!pics) {
    return res.status(404).send({ message: "No pics found" });
  }
  return res.status(200).send({ pics });
};

async function getById (req, res, next) {
  const id = req.params.id;
  let pict;
  try {
    pict = await Pic.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!pict) {
    return res.status(404).send({ message: "No pics found" });
  }
  return res.status(200).send({ pict });
};

async function addPic(req, res, next){
  const { name, location, description, price, available, image } = req.body;
  let pics; let pict;
  try {
    pics = new Pic({
      name,
      location,
      description,
      price,
      available,
      image,
    });
     pict = await pics.save();
  } catch (err) {
    console.log(err);
  }

  if (!pict) {
    return res.status(500).send({ message: "Unable To Add" });
  }
  return res.status(201).send({pict});
};

async function updatePic(req, res, next){
  const id = req.params.id;
  const { name, location, description, price, available, image } = req.body;
  let pics;
  try {
    pics = await Pic.findByIdAndUpdate(id, {
      name,
      location,
      description,
      price,
      available,
      image,
    });
    pics1 = await pics.save();
  } catch (err) {
    console.log(err);
  }
  if (!pics1) {
    return res.status(404).send({ message: "Unable To Update " });
  }
  return res.status(200).send({ pics1 });
};

async function deletePic(req, res, next){
  const id = req.params.id;
  let delpic;
  try {
    delpic = await Pic.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!delpic) {
    return res.status(404).send({ message: "Unable To Delete " });
  }
  return res.status(200).send({ message: " Deleted" });
};

exports.getAllPics = getAllPics;
exports.addPic = addPic;
exports.getById = getById;
exports.updatePic = updatePic;
exports.deletePic = deletePic;
