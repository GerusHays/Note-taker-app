const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();
const md = path.join(__dirname, './public');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// const db = require('../db/db.json');
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(md, '../db/db.json'));
});

app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
