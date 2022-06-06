const path = require('path');
const router = require('express').Router();
const md = path.join(__dirname, './public');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

let db = require('../db/db.json');

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../db/db.json'));
});

router.post('/notes', (req, res) => {
  let save = req.body;
  save.id = uuidv4();
  db.push(save);
  fs.writeFile(path.join(__dirname, '../db/db.json'),
  JSON.stringify(db),
  function(err) {
    if(err) {
      console.log(err);
      res.status(500).send('An error occured while saving please try again.')
    } else {
      res.json(save)
    };
  }
  );
});

router.delete('/notes/:id', (req, res) => {
  db = db.filter(note => note.id !== req.params.id)
  fs.writeFile(path.join(__dirname, '../db/db.json'),
  JSON.stringify(db),
  function(err) {
    if(err) {
      console.log(err);
      res.status(500).send('An error occured while deleting please try again.')
    } else {
      res.json(db)
    };
  }
  );
  // this code is explaining how filter works here for my situational awareness
 /*  const newDb = [];
  for(let i=0; i<db.length; i++) {
    const note = db[i];
    if (note.id !== req.params.id) {
      newDb.push(note);
    }
  }
  db = newDb;*/ 
});

module.exports = router;
