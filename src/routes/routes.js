// Initialize libraries
const express = require('express');
const router = express.Router();
const user = require('../models/user');

// Initialize REST API request routes for MongoDB CRUD operations
// CREATE new user data
router.post('/', async (req, res) => {
    try{
        const newUser = new user(req.body);
        const userData = await newUser.save();
        res.json(userData);
        console.log(res.statusCode + " CREATE request received");
    }
    catch(err){
        console.error(res.statusCode + " " + err.message);
        res.json({error: res.statusCode + " " + err.message});
    }
});

// READ all user data
router.get('/', async (req, res) => {
    try{
        const userData = await user.find();
        res.json(userData);
        console.log(res.statusCode + " READ request received");
    }
    catch(err){
        console.error(res.statusCode + " " + err.message);
        res.json({error: res.statusCode + " " + err.message});
    }
});

// READ a user data specified by ID
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const userData = await user.findById(id);
        res.json(userData);
        console.log(res.statusCode + " READ request received");
    }
    catch(err){
        console.error(res.statusCode + " " + err.message);
        res.json({error: res.statusCode + " " + err.message});
    }
});

// Update user data specified by ID
router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updateUser = req.body;
        const userData = await user.updateOne({_id: id}, {$set: updateUser});
        res.json(userData);
        console.log(res.statusCode + " READ request received");
    }
    catch(err){
        console.error(res.statusCode + " " + err.message);
        res.json({error: res.statusCode + " " + err.message});
    }
});

// DELETE all user data
router.delete('/', async (req, res) => {
    try{
        const userData = await user.deleteMany();
        res.json(userData);
        console.log(res.statusCode + " READ request received");
    }
    catch(err){
        console.error(res.statusCode + " " + err.message);
        res.json({error: res.statusCode + " " + err.message});
    }
});

// DELETE a user data specified by ID
router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const userData = await user.deleteOne({_id: id});
        res.json(userData);
        console.log(res.statusCode + " READ request received");
    }
    catch(err){
        console.error(res.statusCode + " " + err.message);
        res.json({error: res.statusCode + " " + err.message});
    }
});

// Export routes
module.exports = router;