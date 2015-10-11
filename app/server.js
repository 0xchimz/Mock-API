var express = require('express')
var bodyParser = require('body-parser')
var mysql = require('./lib/mysql')

var app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

app.get('/', function (request, response) {
  var result = {
    'message': 'Welcome to Furniture E-Commerce System'
  }
  response.json(result)
})

app.post('/login', function (request, response) {
  if (!request.body.email || !request.body.password) {
    return response.status(400).send('Email or Password is empty')
  }
  var user = {
    email: request.body.email,
    password: request.body.password
  }
  mysql.login(user).then(
    function (res) {
      console.log(res)
      if (!res[0]) {
        return response.json({'status': 'error', 'message': 'username or password is invalid'})
      }
      response.json(res)
    })
})

app.post('/register', function (request, response) {
  if (request.body === {}) {
    return response.status(400).send('Some field is empty.')
  }
  var newUser = {
    email: request.body.email,
    password: request.body.password,
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    address: request.body.address,
    phonenumber: request.body.phonenumber
  }
  mysql.findUser(newUser).then(
    function (res) {
      if (res) {
      }
    })
// mysql.register(newUser, function (error, res) {
//   response.json(res)
// })
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('API listening at http://%s:%s', host, port)
})
