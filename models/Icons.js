const mongoose = require("mongoose");
const IconsSchema = new mongoose.Schema({
  icons: {
    type: Array,
    required: false,
  },
});



module.exports = mongoose.model("Icons", IconsSchema);
