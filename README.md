# Mock-API

`http://128.199.112.126:3000/`

### `get ./`
**response**:<br>
```
{
  'message': 'Welcome to Furniture E-Commerce System'
}
```


### `post ./login`

**request**:<br>
* <b>String</b> email
* <b>String</b> password

**response**:<br>
* <b>String</b> access_token

**error**: <br>
```
{
  "status": "error",
  "message": "username or password is invalid"
}
```

### `post ./register`

**request**: <br>
* <b>String</b> email
* <b>String</b> password
* <b>String</b> firstname
* <b>String</b> lastname
* <b>String</b> address
* <b>String</b> phonenumber

**response**:<br>
```
{'status': 'success', 'message': 'register complete'}
```

**error**:<br>
```
{'status': 'error', 'message': 'same username'}
```

### `get ./product/:productID`

**request**:<br>
* <b>String</b> productID

**response**:<br>
if **productID = KIS9987**
```
{
  'status': 'success',
    'data': {
      'serialNumber': 'KIS9987',
      'name': 'JL Bed',
      'price': '999.89',
      'description': 'This is the best.',
      'category': {
        'id': 1,
        'name': 'sofabed'
      }
    }
}
```
or if **productID = KIS9988**
```
{
  'status': 'success',
  'data': {
    'serialNumber': 'KIS9988',
    'name': 'iTable',
    'price': '999.99',
    'description': 'This is the best.',
    'category': {
      'id': 2,
      'name': 'table'
    }
  }
}
```

**error**: <br>
```
{
  'status': 'error',
  'message': 'Product not found.'
}
```
