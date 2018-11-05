
# Template for node api use Express and Mongoose well documented by swagger-ui

## Just match the connection string mongodb://<user>:<password>@<db-url>:35413/<db-name> to your DB and play the app

### Test 1 : Create new product

var request = require("request");

var options = { method: 'POST',
  url: 'http://localhost:3000/products',
  headers: 
   { 'postman-token': '6a4f77b0-4be4-e711-9bb7-31508640bdcc',
     'cache-control': 'no-cache',
     'content-type': 'application/json' },
  body: 
   { Id: '2',
     Description: 'Long Pants',
     Value: '17',
     Created_date: '2018-12-12',
     Type: 'Pants' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

### Test 2 : Get all products

var request = require("request");

var options = { method: 'GET',
  url: 'http://localhost:3000/products',
  headers: 
   { 'postman-token': '12f5be75-9e2a-c0e7-efb6-ed322bbcfff4',
     'cache-control': 'no-cache',
     'content-type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
