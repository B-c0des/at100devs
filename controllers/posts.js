const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const m = new Post;
module.exports = {
    getProfile: async (req, res) => {
        try {
            const posts = await Post.find({
                user: req.user.id
            });
            const posts2 = await Post.find().sort({
                createdAt: "desc"
            }).lean();
            const post = await Post.find({
                user: req.user.id
            });
            const post2 = await Post.findById(req.params.id);
            res.render("profile.ejs", {
                posts: posts,
                user: req.user,
                posts2: posts2,
                post: post,
                post2: posts2
            });
        } catch (err) {
            console.log(err);
        }
    },
    getFeed: async (req, res) => {
        try {
            const posts = await Post.find().sort({
                createdAt: "desc"
            }).lean();
            res.render("feed.ejs", {
                posts: posts
            });
        } catch (err) {
            console.log(err);
        }
    },
    getPost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            res.render("post.ejs", {
                post: post,
                user: req.user
            });
        } catch (err) {
            console.log(err);
        }
    },
    createPost: async (req, res) => {
        try {
            // Upload image to cloudinary
            const result = await cloudinary.uploader.upload(req.file.path, {
                "crop": "limit",
                "tags": "samples",
                "width": 2000,
                "height": 1000
            }, function (result) {
                console.log(result)
            });

            await Post.create({
                name: req.body.name,
                title: req.body.title,
                image: result.secure_url,
                lowresimage: result.secure_url,
                cloudinaryId: result.public_id,
                website: req.body.website,
                contact: req.body.contact,
                likes: 0,
                user: req.user.id,
                icons: req.body.textIcons,
            });
            console.log("Post has been added!");
            res.redirect("/profile");
        } catch (err) {
            res.redirect("/504");
        }
    },

    updateProfile: async (req, res) => {
        try {
            const result = await cloudinary.uploader.upload(req.file.path, {
                "crop": "limit",
                "tags": "samples",
                "width": 2000,
                "height": 1000
            }, function (result) {
                console.log(result)
            });
            await Post.findOneAndUpdate({
                user: req.user.id
            }, {
                $set: {
                    name: req.body.name,
                    title: req.body.title,
                    image: result.secure_url,
                    cloudinaryId: result.public_id,
                    website: req.body.website,
                    contact: req.body.contact,
                    icons: req.body.textIcons,
                }
            }, );

            console.log(req.user._id)
            res.redirect(`/profile/`);
        } catch (err) {
            console.log(err);
        }
    },
    likePost: async (req, res) => {
        try {
            await Post.findOneAndUpdate({
                _id: req.body.id
            }, {
                $inc: {
                    likes: 1
                },
            });
            console.log("Likes +1");
            console.log(req.body.likes)

            res.redirect('/profile/')
        } catch (err) {
            console.log(err);
        }
    },
    commentPost: async (req, res) => {
        try {
            await Post.findOneAndUpdate({
                _id: req.params.id
            }, {
                $push: {
                    comments: {
                        comments: req.body.comments,
                        postedBy: req.user._id
                    }
                }
            }, );
            console.log("Likes +1");
            var data = req.body;

            console.log("Name: ", data.name);
            console.log(req.user['image'])
            res.redirect(`/profile/`);
        } catch (err) {
            console.log(err);
        }
    },
    deleteComment: async (req, res) => {
        try {
            await Post.findOneAndUpdate({
                _id: req.params.id
            }, {
                $push: {
                    comments: {
                        comments: req.body.comments,
                        postedBy: req.user._id
                    }
                }
            }, );
            console.log("Likes +1");
            var data = req.body;

            console.log("Name: ", data.name);
            console.log(req.user['image'])
            res.redirect(`/profile/`);
        } catch (err) {
            console.log(err);
        }
    },
    deletePost: async (req, res) => {

        try {
            // Find post by id
            let post = await Post.findById({
                _id: req.params.id
            });
            // Delete image from cloudinary
            await cloudinary.uploader.destroy(post.cloudinaryId);
            // Delete post from db
            await Post.deleteOne({
                _id: req.params.id
            });
            res.redirect("/profile");
        } catch (err) {
            console.log(err);;
        }
    },
    deleteComment: async (req, res) => {
        try {
            await Post.findOneAndUpdate({
                _id: req.params.id
            }, {
                $pop: {
                    comments: 1
                },
            }, );
            console.log(`Comment: ${req.body.comments} By: ${req.user.id}`);
            res.redirect('/profile/')
        } catch (err) {
            console.log(err);
        }
    },
}