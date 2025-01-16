const express = require("express");
// const users = require("./MOCK_DATA.json");
const { logReqRes } = require("./middleware/logMiddleware.js");
const { connectMongoDb } = require("./views/config");
const userRouter = require("./routes/userRoutes");
const app = express();
const PORT = 3000;

//MongoDb connection
connectMongoDb(
  "mongodb+srv://jammulasrivasanth:Srivasanth23@cluster0.rofqcpa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB error", err));

//Middleware - plugin
app.use(express.urlencoded({ extended: false }));

//middleware creation
app.use((req, res, next) => {
  console.log("Middleware 1");
  //write the function of middleware
  next(); //executes the next funtion to be execute in the code
});

// Middleware - logs data in log.txt file
// app.use(logReqRes);



//Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
