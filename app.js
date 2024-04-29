const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the directory for views
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route handler for the root route
app.get('/', (req, res) => {
  res.render('index.ejs');
});

// Route handler for the '/about' route
app.get('/about', (req, res) => {
  res.render('components/about.ejs');
});

app.get('/contact', (req, res) => {
  res.render('components/contact.ejs');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
