const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const {
    ensureAuth,
    ensureGuest
} = require("../middleware/auth");
//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);
router.post("/createPost", upload.single("file"), postsController.createPost);
router.put("/updateProfile/:id", upload.single("file"), postsController.updateProfile);
router.put("/likePost/:id", postsController.likePost);
router.put("/commentPost/:id", upload.single("file"), postsController.commentPost);
router.put("/deleteComment/:id", upload.single("file"), postsController.deleteComment);
router.delete("/deletePost/:id", postsController.deletePost);
module.exports = router;