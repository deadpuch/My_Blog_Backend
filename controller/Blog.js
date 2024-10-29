const BLOG = require("../Model/blogModel");

const doBlog = (req, res, next) => {
  try {
    const doc = {
      content: req.body.content,
      createdby: req.userId,
      ImagePath: req.body.imagePath,
    };
    BLOG(doc)
      .save()
      .then(() => {
        res.status(201).json("Created succefully");
        console.log(req.body);
      })
      .catch((err) => {
        res.status(500).json("Error creating blog");
      });
  } catch (error) {
    console.error("Unexpected error in doBlog:", error); // Log unexpected errors
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};

const allBlog = (req, res, next) => {
  BLOG.find().then((result)=>{

    res.status(200).json(result)

  })
};

module.exports = { doBlog, allBlog };
