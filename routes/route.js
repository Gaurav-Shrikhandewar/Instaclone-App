const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const router = require('express').Router();
const Posts = require("../models/postModel");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cors("*"));
router.use(fileUpload({
    useTempFiles: true  
}))

cloudinary.config({
    cloud_name:  "dvc87vrbh",
    api_key: "217395458229135",
    api_secret: "eUMm2FeyULrLIuVXAia5fATRNVU"
});

router.post("/posts", async (req, res) => {  
    
    try {
        cloudinary.uploader.upload(req.files.image.tempFilePath, async (err, result) => {
            await Posts.create({
                author: req.body.author,
                location: req.body.location,
                description: req.body.description,
                image: result.url,
                date: req.body.date
            });
        })
    } catch (error) {
        console.log(error);
    }
})

router.get("/LandingPage", async (req, res) => {
    try {
        let data = await Posts.find();
        data = data.reverse()
        res.json(data);
    } catch (error) {
        console.log(error)
    }
});

router.get( "/" , async(req, res) => {
    res.send('Working!!')
  
})

module.exports = router;