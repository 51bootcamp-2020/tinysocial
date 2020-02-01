const jwt = require('jsonwebtoken');

if (!process.env.JWT_SECRET) {
  console.error('Environment variable JWT_SECRET is not provide');
  process.exit();
}
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = async ({req}) => {
  if (!req.headers.authorization) {
    return {
      userId: null,
    };
  }
  try {
    const token = req.headers.authorization;
    const userId = jwt.verify(token, JWT_SECRET);
    const id = userId.id;
    return {userId: id};
  } catch (e) {
    return {
      userId: null,
    };
  }
};
