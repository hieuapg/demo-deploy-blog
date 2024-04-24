const express = require('express');

const app = express();
const port = 3000;
const path = require('path')


app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

