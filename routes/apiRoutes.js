// const path = require(path);
// const router = require('express').Router();
// const db = require('../db/db.json');
// const md = path.join(__dirname, './public');

// router.get('/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, '../db/db.json'));
// //   return res.json(db);
// });

// router.get('/animals/:id', (req, res) => {
//   const result = findById(req.params.id, animals);
//   if (result) {
//     res.json(result);
//   } else {
//     res.send(404);
//   }
// });

// router.post('/animals', (req, res) => {
//   // set id based on what the next index of the array will be
//   req.body.id = animals.length.toString();

//   if (!validateAnimal(req.body)) {
//     res.status(400).send('The animal is not properly formatted.');
//   } else {
//     const animal = createNewAnimal(req.body, animals);
//     res.json(animal);
//   }
// });

// module.exports = router;
