const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const session = require('express-session');
// const dbConnection = require('./database'); 
// const MongoStore = require('connect-mongo').default;
// const passport = require('./passport');
//const user = require('./routes/user')

// Added for image upload
// Source: https://dev.to/yosraskhiri/how-to-upload-an-image-using-mern-stack-1j95
const cors = require("cors");

const PORT = process.env.PORT || 3001;

// Define middleware here
//app.use(morgan("dev")); // auth
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(bodyParser.json()); //auth

// image upload
app.use(cors());

// Sessions (auth)
// app.use(
// 	session({
// 		secret: 'falafel-goat', //pick a random string to make the hash that is generated secure
// 		store: new MongoStore({ mongoUrl: dbConnection }),
// 		resave: false, //required
// 		saveUninitialized: false //required
// 	})
// )

// Passport (auth)
//app.use(passport.initialize());
//app.use(passport.session()) ;// calls the deserializeUser
//
// Routes (auth)
//app.use('/user', user);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/react-closet-app",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
