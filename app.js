const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const articleRouter = require('./views/components/articles/routes/articles');

const app = express();
const port = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route handler for the root route
app.get('/', (req, res) => {
  res.render('index');
});

// Route handler for the '/about' route
app.get('/about', (req, res) => {
  res.render('components/about.ejs');
});

// Route handler for the '/contact' route
app.get('/contact', (req, res) => {
  res.render('components/contact.ejs');
});

// Integrate the articleRouter for handling CRUD operations for blog posts
app.use('/blog', articleRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
