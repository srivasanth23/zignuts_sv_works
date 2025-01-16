const User = require("../models/userModel");

const handleGetAllUser = async (req, res) => {
  res.setHeader("X-myName", "Srivasanth"); //setting a custom Header
  console.log(req.headers); //gets output of Headers
  // Always add X- to custome Header - to recognise that it is custom header

  const result = await User.find({}); //gets documnets from mongodb
  return res.json(result);
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const result = await User.findById(id); //gets a single documnet by using id
  // const user = users.find((user) => user.id === id);
  return res.json(result);
};

const handleUpdateUserId = async (req, res) => {
  const body = req.body;
  const id = req.params.id;

  const result = await User.findByIdAndUpdate(id, {
    lastName: body.last_name,
  }); //present I only erote code to change last_name
  return res.status(200).json({ msg: "updated" }); //not handled code well just wrote randomly

  // const userIndex = users.findIndex((user) => user.id === id);
  // if (userIndex === -1) {
  //   return res.status(404).json({ status: "error", message: "User not found" });
  // }

  // users[userIndex] = { ...users[userIndex], ...body };

  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
  //   if (err) {
  //     return res.json(err);
  //   } else {
  //     return res.status(200).json({ message: "success" });
  //   }
  // });
};

const handleDeletdUserById = async (req, res) => {
  const id = req.params.id;
  const result = await User.findByIdAndDelete(id);
  return res.json(result);

  // const userIndex = users.findIndex((user) => user.id === id);
  // if (userIndex === -1) {
  //   return res.status(404).json({ status: "error", message: "User not found" });
  // }
  // users.splice(userIndex, 1);

  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
  //   if (err) {
  //     return res.json(err);
  //   } else {
  //     return res.status(200).json({ message: "success" });
  //   }
  // });
};

const handleAddUser = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.gender ||
    !body.job_title ||
    !body.email
  ) {
    return res.status(400).json({ msg: "All fields are required..." });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  console.log(result);

  return res.status(201).json({ ...result, msg: "success" });

  // users.push({ ...body, id: users.length + 1 });
  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  //   return res.json({ status: "success", id: users.length });
  // });
};

module.exports = {
  handleGetAllUser,
  getUserById,
  handleUpdateUserId,
  handleDeletdUserById,
  handleAddUser
};
