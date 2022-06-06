const express = require('express');
const path = require('path');
// using express and the port or 3001
const PORT = process.env.PORT || 3001;
const app = express();
// requiring the html and api routes within routes folder to generate the html and code for notes
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// how the html reads the code
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// listening to the port
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
