const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Recipe = require('../models/recipe.js');





/* SAVE recipe */
router.post('/User', function (req, res, next) {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    msg: req.body.msg
  });
  newUser.save((err, user) => {
    if (err) {
      res.json(err);
    } else {
      res.json(user);
    }
  })
});

/* Add RECIPE */
router.post('/User', (req, res, next) => {
  ({
    name: req.body.name,
    email: req.body.email,
    msg: req.body.msg,
    created_date: req.body.created_date

  });
  newUser.save((err, user) => {
    if (err) {
      res.json({
        msg: 'Failed to add user'
      });
    } else {
      res.json({
        msg: 'User added successfully'
      });
    }
  })
});



module.exports = router;
