const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let siteName = "Puma";
  let searchText = "Home Menu";
  let arr = [1, 2, 45, 5555, 680]
  res.render("index", {
    siteName: siteName,
    searchText: searchText, arr
  });
});

// app.get("/blog/:slug", (req, res) => {
//   let blogTitle = "Puma when started ?";
//   let blogContent = "Here is when Puma started";
//   res.render("templates/index.html", {
//     blogTitle: blogTitle,
//     blogContent: blogContent,
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
