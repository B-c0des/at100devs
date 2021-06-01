const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  contact: {
    type: String,
    required: false,
  },
  comments: {
    type: Object,
    required: false,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



module.exports = mongoose.model("Post", PostSchema);
