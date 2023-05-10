const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`I am online. Look at me here -> localhost:${port}`);
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});