var mysql = require('mysql')
var q = require('q')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Mock-API'
})

connection.connect(function (error) {
  if (!error) {
    console.log('[db] Database is connected ...')
  } else {
    console.log('[db] Error while connecting database ...')
  }
})

module.exports = {
  register: register,
  findUser: findUser,
  login: login
}

function register (data) {
  var deferred = q.defer()
  connection.query('INSERT INTO user SET ?', data, function (error, response) {
    console.log('INSERT TO DB')
    if (!error) {
      deferred.resolve(response)
    } else {
      deferred.reject(error)
    }
  })
  return deferred.promise
}

function findUser (data) {
  var deferred = q.defer()
  var strQuery = "SELECT * FROM user WHERE email = '" + data.email + "'"
  connection.query(strQuery, function (error, rows) {
    if (!error) {
      deferred.resolve(rows)
    } else {
      deferred.reject(error)
    }
  })
  return deferred.promise
}

function login (data) {
  var deferred = q.defer()
  var strQuery = "SELECT * FROM user WHERE email = '" + data.email + "' AND password = '" + data.password + "' LIMIT 1"
  connection.query(strQuery, function (error, rows) {
    if (!error) {
      deferred.resolve(rows)
    } else {
      deferred.reject(error)
    }
  })
  return deferred.promise
}
