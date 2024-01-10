'use strick';

const express = require('express');
const app = express();
const port = 5000;
const path = require('path');


// app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, '../public', 'index1.html'));
  res.sendFile('index.html', { root: path.join(__dirname, './public') });
})
app.get('./contact', (req, res) => {
  res.sendFile('contact', { root: path.join(__dirname, './public') });
})
app.get('/gallerie', (req, res) => {
  res.sendFile('gallerie.html', { root: path.join(__dirname, './public') });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

