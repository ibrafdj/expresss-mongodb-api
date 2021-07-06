// Initialize libraries
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Initialize middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// Import routes
const route = require('./routes/routes');
app.use('/user', route);

// Connect to DB
mongoose.connect("mongodb+srv://admin:admin@cluster0.o4tig.mongodb.net/user_db?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true },
                ()=> console.log("Connected to MongoDB server!"));
// Note: It is not reccommended to embed the full connection string (Containing the MongoDB user and password) in the source code like this
//       because it presents a large security risk for the database. 
//       However because this is only for testing purposes, I've decided to leave it as is.

// Initialize home page
app.get("/", (req,res) =>{
    res.sendFile(process.cwd() + "/public/index.html");
});

// Initialize server to listen to port 3000
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("App listening to port " + port);
});