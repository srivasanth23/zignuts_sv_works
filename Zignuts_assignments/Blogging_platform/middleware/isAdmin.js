// Middleware to restrict access to admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.redirect("/login"); // Redirect non-admin users
  }
};

module.exports = isAdmin;
