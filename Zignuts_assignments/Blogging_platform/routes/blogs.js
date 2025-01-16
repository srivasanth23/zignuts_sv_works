const { Router } = require("express");
const Blog = require("../models/blogs");
const router = Router();

function convertToSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-') // Replace all non-alphanumeric characters with a hyphen
    .replace(/-+/g, '-') // Replace multiple hyphens with one
    .replace(/^-+|-+$/g, ''); // Remove hyphens from start and end
}

router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('createdBy', 'fullName');
    if (!blog) {
      return res.status(404).send("Blog not found");
    }
    return res.render("blog-details", { user: req.user, blog, createdBy: blog.createdBy });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

// Search Route
router.get('/search', async (req, res) => {
  try {
    const query = req.query.query; // The search term entered by the user
    const slugQuery = convertToSlug(query); // Convert the search term into a slug

    // Find blogs matching the slug
    const blogs = await Blog.find({ slug: { $regex: slugQuery, $options: 'i' } }); // 'i' for case-insensitive matching

    res.render('searchResults', { blogs }); // Render the view with the search results
  } catch (err) {
    console.error(err);
    res.status(500).send('Error while searching blogs');
  }
});

module.exports = router;
