const jwt = require("jsonwebtoken");
const secret = "&ri/asanth@23";

const createTokenForUser = (user) => {
  const payload = {
    _id: user._id,
    email: user.email,
    role: user.role,
    profileImageUrl: user.profileImageUrl,
    fullName: user.fullName,
  };
  const token = jwt.sign(payload, secret);
  return token;
};

const validateToken = (user) => {
  const payload = jwt.verify(user, secret);
  return payload;
};

module.exports = { createTokenForUser, validateToken };
