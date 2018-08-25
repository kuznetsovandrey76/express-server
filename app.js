var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8000, function () {
  console.log('Express запущен на http://localhost:8000\nнажмите CTRL+C для завершения');
});