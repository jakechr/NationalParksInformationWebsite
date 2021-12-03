const express = require("express");
const bodyParser = require("body-parser");

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require("multer");
const upload = multer({
  dest: "../front-end/public/images/",
  limits: {
    fileSize: 10000000,
  },
});

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const mongoose = require("mongoose");

// connect to the database
mongoose.connect("mongodb://localhost:27017/hikes", {
  useNewUrlParser: true,
});

// Create a scheme for items in the hikes: a title and a path to an image.
const itemSchema = new mongoose.Schema({
  title: String,
  path: String,
  description: String,
});

// Create a model for items in the hikes.
const Item = mongoose.model("Item", itemSchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post("/api/hikes/photos", upload.single("photo"), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename,
  });
});

// Create a new hike item: takes a title and a path to an image.
app.post("/api/hikes/items", async (req, res) => {
  const item = new Item({
    title: req.body.title,
    path: req.body.path,
    description: req.body.description,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the hikes.
app.get("/api/hikes/items", async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Done in class
app.delete("/api/hikes/items/:id", async (req, res) => {
  try {
    console.log("Delete " + req.params.id);
    await Item.deleteOne({
      _id: req.params.id,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put("/api/hikes/items/:id", async (req, res) => {
  try {
    console.log(req.body);
    console.log("Edit " + req.params.id);
    let item = await Item.findOne({
      _id: req.params.id,
    });
    item.title = req.body.title;
    item.description = req.body.description;
    await item.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log("Server listening on port 3000!"));