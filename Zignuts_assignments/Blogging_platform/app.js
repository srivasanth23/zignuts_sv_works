// exporting packages
require("dotenv").config();
const express = require("express");
const { connectDatabase } = require("./config/db");
const path = require("path");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const blogsRoute = require("./routes/blogs");
const Blogs = require("./models/blogs");
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middleware/authentication");

const app = express();
const PORT = 8000;

//Set view-engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

connectDatabase(
  // "mongodb+srv://jammulasrivasanth:Srivasanth23@blogs-web-app.2koo6.mongodb.net/?retryWrites=true&w=majority&appName=blogs-web-app"
)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB error", err));

//Routes
app.get("/", async (req, res) => {
  const allBlogs = await Blogs.find({}).sort({ createdAt: -1 });
  return res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/blogs", blogsRoute);

//Listening to the PORT
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
