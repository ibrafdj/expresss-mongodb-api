// Initialize libraries
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Initialize middleware
app.use(express.json());
app.use(cors());

// Import routes
const route = require('./routes/routes');
app.use('/user', route);

// Connect to DB
mongoose.connect("mongodb+srv://admin:admin@cluster0.o4tig.mongodb.net/user_db?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true },
                ()=> console.log("Connected to MongoDB server!"));


// Initialize home page
app.get("/", (req,res) =>{
    res.send("<h1>Express MongoDB API</h1>");
});

// Initialize server to listen to port 3000
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("App listening to port " + port);
});