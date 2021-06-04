const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);
//need to make another for feed to show if logged in

router.post("/createPost", upload.single("file"), postsController.createPost);

router.put("/updateProfile/:id", upload.single("file"), postsController.updateProfile);

router.put("/likePost/:id", postsController.likePost);

router.put("/commentPost/:id", upload.single("file"), postsController.commentPost);

router.put("/deleteComment/:id", upload.single("file"), postsController.deleteComment);
// router.put("/commentPost/:id", async (req,res) =>{      
//     const comment = new Comment({comments:req.body.comments});
//     await comment.save();
//     await Post.findOneAndUpdate({_id:req.body._id}, {$push: {comment}});
//     res.send("Comment was added successfully");
// })  

router.delete("/deletePost/:id", postsController.deletePost);


module.exports = router;
