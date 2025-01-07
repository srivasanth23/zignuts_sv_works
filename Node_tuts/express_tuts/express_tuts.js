const express = require("express");
var app = express();
app.listen(3000);

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.send("This is hompage");
// });

// app.get("/contacts", (req, res) => {
//   res.send("This is contact Page");
// });

//Router params
// app.get("/profile/:id", (req, res) => {
//   res.send("You requested to see a profile with the id of " + req.params.id);
// });

//Template Engines
app.get("/", (req, res) => {
  res.render('home');
});

app.get("/contacts", (req, res) => {
  res.render('contacts');
});

app.get("/profile/:name", (req, res) => {
  var data = {
    age: 29,
    job: "ninja",
    hobbies: ["eating", "treking", "trading"],
  };
  res.render("profile", {
    person: req.params.name,
    data: data,
  });
});
