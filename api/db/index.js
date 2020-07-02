const express = require('express');
const app = express();
const port = 3001;
const userModel = require('../models/user');
// const cors = require('cors');

// app.use(cors({ origin: true }));

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.url);
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers'
  );

  next();
});

app.get('/', (req, res) => {
  userModel
    .getUsers()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
