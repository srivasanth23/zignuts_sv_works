const express = require("express");
const {
  handleGetAllUser,
  getUserById,
  handleUpdateUserId,
  handleDeletdUserById,
  handleAddUser,
} = require("../controllers/userControllers");

const router = express.Router();

//Routes
// app.get("/users", (req, res) => {
//   const html = `
//           <ul>
//           ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//           </ul>
//       `;
//   res.send(html);
// });

router.route("/").get(handleGetAllUser).post(handleAddUser);

router
  .route("/:id")
  .get(getUserById)
  .put(handleUpdateUserId)
  .delete(handleDeletdUserById);

module.exports = router;
