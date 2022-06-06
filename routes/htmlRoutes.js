// this file is to generate the html
const path = require('path');
const router = require('express').Router();
// router to generate the second page upon clicking notes in the public notes html
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});
// router to generate the index html home page in public
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
