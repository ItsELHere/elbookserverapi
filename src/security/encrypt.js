const bcrypt = require("bcrypt");

const encryptPass = async (plainPass) => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(plainPass, saltRounds);
  return hash;
};

module.exports = encryptPass;
