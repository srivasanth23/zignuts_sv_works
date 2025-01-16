const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//connect to the database
mongoose
  .connect(
    "mongodb+srv://new_user:7jgwdBPcOdBrL713@cluster0.h1hrf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log(`Server running on 3000`); //To check server is running
    });
  })
  .catch(() => {
    console.log("Connection error");
  });

//create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
  item: String,
});

var Todo = mongoose.model("Todo", todoSchema);


var data = [
  { item: "get milk" },
  { item: "walk dog" },
  { item: "kick soome coding ass" },
];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
  app.get("/todo", async function (req, res) {
    try {
      const todos = await Todo.find({});
      res.render("todo", { todos: todos });
    } catch (err) {
      console.log("Error:", err);
      res.status(500).send("Server Error");
    }
  });

  app.post("/todo", urlencodedParser, async function (req, res) {
    try {
      let newTodo = new Todo(req.body);
      const savedTodo = await newTodo.save();
      res.json(savedTodo);
    } catch (err) {
      console.log("Error:", err);
      res.status(500).send("Server Error");
    }
  });

  app.delete("/todo/:item", async function (req, res) {
    try {
      const result = await Todo.deleteOne({
        item: req.params.item.replace(/\-/g, " "),
      });
      res.json(result);
    } catch (err) {
      console.log("Error:", err);
      res.status(500).send("Server Error");
    }
  });
};
