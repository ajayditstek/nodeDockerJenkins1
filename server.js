'use strict';

const express = require('express');

// Constants
const PORT = 3005;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('get method');
});
app.get('/sdfdsf', (req, res) => {
  res.send('get mdfdfethod');
});
app.get('/sdfd4444sf', (req, res) => {
  res.send('get md3333fdfethod');
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