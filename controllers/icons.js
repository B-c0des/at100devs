
const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const m = new Post;

module.exports = {

//profile only uses this even if ejsis in different file?
  getIcons: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      const posts2 = await Post.find().sort({ createdAt: "desc" }).lean();
      const post = await Post.find({ user: req.user.id });
      const post2 = await Post.findById(req.params.id);
      res.render("profile.ejs", { posts: posts, user: req.user,  posts2: posts2, post: post , post2: posts2,
      stack: `python sql java ruby net 'c#' perl groovy laravel cakephp express codeigniter flask ruby pylon asp.net spring mysql sqlite sql postgre oracle casandra mongodb ubuntu apache nginx linux mongodb angular express node php mongodb cassandra mysql postgresql mariadb hbase phpfox 'ruby on rails' tornado diaspora yoga relay react flux objective-c java javascript php mysql mongodb 'ms sql' cakephp laravel macgap electron apache aws perl java javascript php ruby es6 mysql mongodb oracle ms sql hadoop cassandr frameworks node react bootstrap 'apache tomcat' google 'amazon aws' marko 'jquery' ruby scala python javascript php node.js angular.js backbone.js react bootstrap django play kafka graphql sqs stylus pug mysql redis cassandra mongodb nginx python php zepto pylon mysql postgresql`});
    } catch (err) {
      console.log(err);
    }
  },
}