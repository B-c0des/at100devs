const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const postRoutes = require("./routes/posts");
const bodyParser = require('body-parser')
const multer = require('multer');
const path = require("path");
//const guest = require("./routes/guest");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));
//app.use(multer({dest: __dirname + '/image'}).single('image')); // <--



//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "demo",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

const db = mongoose.connection

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/post", postRoutes);

//app.use("/guest", guest);

//Server Running
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}, you better catch it!`);
  

});


db.once("open", () => {
console.log("DB connected...");
const msgCollection = db.collection("BUBs");
//console.log(msgCollection)
const changeStream = msgCollection.watch();

// changeStream.on("change", (change) => 
//     console.log('change')
// );


var filter = [{
  $match: {
      $and: [
          { "updateDescription.updatedFields.SomeFieldA": { $exists: true } },
          { operationType: "update" }]
  }
}];

var options = { fullDocument: 'updateLookup' };
db.collection('BUBs').watch(filter, options).on('change', data => 
{
  console.log(new Date(), data);
});


})
  