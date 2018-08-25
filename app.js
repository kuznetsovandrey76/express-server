const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.listen(process.env.PORT || port, () => console.log(`Express запущен на http://localhost:${port}\nнажмите CTRL+C для завершения`)); 

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(8000, function () {
//   console.log('Express запущен на http://localhost:8000\nнажмите CTRL+C для завершения');
// });
