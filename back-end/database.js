const mongoose = require("mongoose");
const empSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
});

const empModel = mongoose.model("user", empSchema);
module.exports = empModel;

//'6b6c76c48c85d7c2bea73d670cfc6e5933c2a6fbeb405175c6ba47c50b3d6b8737ee3f' - secert token