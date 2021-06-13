const express = require('express');
let app = express();
let Student = require('../models/student');

/* 
app.get('/studets', (req, res) => {
  Student.find({})
    .exec((err, Students) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      }
      
      res.json({
        ok: true,
        Students
      });
    });
});


app.post('/students', (req, res) => {
  let body = req.body;

  const Student = new Student({
    firstName: body.firstName,
    lastName: body.lastName,
  });

  Student.save((err, StudentDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if (!StudentDB) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      Student: StudentDB
    });
  });
}); */

module.exports = app;