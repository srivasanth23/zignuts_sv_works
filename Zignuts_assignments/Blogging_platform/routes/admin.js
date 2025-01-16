const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const isAdmin = require("../middleware/isAdmin");
const Blog = require("../models/blogs");
const Category = require("../models/category");
const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/`));
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

//for get all blogs
router.get("/blogs", isAdmin, (req, res) => {
  Blog.find({ createdBy: req.user._id })
    .then((blogs) => {
      // console.log("blogs", blogs);
      res.render("dashboard", {
        user: req.user,
        pageTitle: "My Blogs",
        viewPath: "blogs/allBlogs.ejs", // View for "My Blogs"
        blogs,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error fetching your blogs. Please try again.");
    });
});

//for rendering the ejs screen for the new blog
router.get("/blogs/add", isAdmin, async (req, res) => {
  try {
    // Fetch categories from the database
    const categories = await Category.find({});

    // Render the view with categories
    res.render("dashboard", {
      user: req.user,
      pageTitle: "Add New Blog",
      viewPath: "blogs/addBlogForm", // Correct relative path to the partial
      categories, // Pass categories to the EJS view
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching categories");
  }
});

//for adding new blog
router.post("/blogs/add", isAdmin, upload.single("coverImage"), (req, res) => {
  // Extract form data
  const { title, body, category } = req.body;

  // Create the blog post
  Blog.create({
    description: body, // Assign `body` to `description`
    title,
    slugName: title.toLowerCase().replace(/ /g, "-"),
    createdBy: req.user._id,
    thumbnailImage: `/uploads/${req.file.filename}`,
    category,
  })
    .then((blog) => {
      // Redirect to the newly created blog's page
      res.redirect(`/blogs/${blog._id}`);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error creating the blog post. Please try again.");
    });
});

//for deleting blog
router.post("/blogs/delete/:id", isAdmin, async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).send("Blog deleted");
  } catch (err) {
    res.status(500).send("Error deleting blog");
  }
});

//for rendering the ejs screen for the modifying blog
router.get("/blogs/modify/:id", isAdmin, (req, res) => {
  Blog.findById(req.params.id)
    .then((blogs) => {
      if (!blogs) {
        return res.status(404).send("Blog not found");
      }
      res.render("dashboard", {
        user: req.user,
        pageTitle: "Modify Blog",
        viewPath: "blogs/modifyblog.ejs", // View for "Modify Blog"
        blogs,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error fetching blog");
    });
});

//for modifying blog
router.post("/blogs/modify/:id", isAdmin, (req, res) => {
  const blogId = req.params.id;

  Blog.findByIdAndUpdate(blogId, req.body, { new: true })
    .then((blog) => {
      res.redirect(`/blogs/${blog._id}`);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error updating blog");
    });
});

//getting all categories
router.get("/categories", isAdmin, (req, res) => {
  Category.find({ createdBy: req.user._id })
    .then((categories) => {
      res.render("dashboard", {
        user: req.user,
        pageTitle: "All Categories",
        viewPath: "blogs/allCategories.ejs", // View for "All Categories"
        categories,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error fetching your categories. Please try again.");
    });
});

//for rendering the ejs screen for the new category
router.get("/categories/add", isAdmin, (req, res) => {
  res.render("dashboard", {
    user: req.user,
    pageTitle: "Add New Category",
    viewPath: "blogs/addCategoryForm.ejs", // View for "Add Category Form"
  });
});

//for adding new category
router.post("/categories/add", isAdmin, async (req, res) => {
  const { categoryName } = req.body;
  Category.create({ categoryName, createdBy: req.user._id })
    .then(() => {
      res.status(200).send("Category created");
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .send("Error creating the category post. Please try again.");
    });
});

//for deleting category
router.post("/categories/delete/:id", isAdmin, async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).send("Category deleted");
  } catch (err) {
    res.status(500).send("Error deleting category");
  }
});

module.exports = router;
