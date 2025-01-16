const express = require("express");
const urlRoute = require("./routes/index");
const { connectMongoDb } = require("./connection");
const app = express();
const PORT = 8000;

connectMongoDb(
  "mongodb+srv://jammulasrivasanth:Srivasanth23@cluster0.rofqcpa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB error", err));

app.use(express.json());
app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
