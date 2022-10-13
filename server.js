'use strict';

const express = require('express');

// Constants
const PORT = 3005;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('these are the changes made by me on development');
});
app.get('/sdfdsf', (req, res) => {
  res.send('get mdfdfethod');
});

app.get('/sdfdsf445555', (req, res) => {
  res.send('get mdfdfethod');
});

app.post('/', (req, res) => {
  res.send('post method');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});