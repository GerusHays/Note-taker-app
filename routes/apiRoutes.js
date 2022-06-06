const path = require('path');
const router = require('express').Router();
const fs = require('fs');
// variable for uuid to make each new generated note have a unique id to be able to delete
const { v4: uuidv4 } = require('uuid');
// let for database to put the notes within the db
let db = require('../db/db.json');
// router to get notes previously entered i left the test to see it 
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../db/db.json'));
});
// router to post the saved notes in the left hand column
router.post('/notes', (req, res) => {
  // saving the notes in the body of the file
  let save = req.body;
  // setting the notes to have a unique id upon saving
  save.id = uuidv4();
  // pushing the saved notes to the database
  db.push(save);
  // writing the notes to the database
  fs.writeFile(path.join(__dirname, '../db/db.json'),
  // making it readable via stringify
  JSON.stringify(db),
  function(err) {
    // if it messes up there will be an error 
    if(err) {
      console.log(err);
      res.status(500).send('An error occured while saving please try again.')
    } else {
      // if there is no error it will save
      res.json(save)
    };
  }
  );
});
// deleting notes via router.delete
router.delete('/notes/:id', (req, res) => {
  // the comments on line 52 is showing line 39
  db = db.filter(note => note.id !== req.params.id)
  // write to file the db
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
