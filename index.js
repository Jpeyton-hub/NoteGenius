const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const fs = require('fs');
const uuid = require('uuid');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });

app.get('/api/notes', (req, res) => {
    res.json('./db/db.json');
})  

  