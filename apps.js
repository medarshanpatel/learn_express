var express = require('express')
var app = express()

app.all('/', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})

app.get('/', function (req, res) {
      res.send('GET request to the homepage')
});

app.get('/:from-:to', function (req, res) {
    res.send('GET request to the homepage with user ID: '+JSON.stringify(req.params));
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})

app.listen(3000);