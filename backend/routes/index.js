var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Character = require('../model/characterModel'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Route for character lookup
router.get('/api/:characterName', async function(req, res) {
  const characterName = req.params.characterName;
  
  try {
    
    const char = await Character.findOne({ character: characterName });
    
    if (char) {
      res.json({ character: char});
    } else {
      res.status(404).json({ message: 'Character not found' });
    }
  } catch (err) {
    // Handle any errors here
    console.log("Oh no! Something went wrong!");
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
