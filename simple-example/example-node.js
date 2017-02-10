var http = require('http');

http.get({
  hostname: 'localhost',
  port: '8000',
  // Get All Objects on display at the Science Museum
  path: 'http://collection.sciencemuseum.org.uk/search/museum/Science%20Museum',
  headers: {
    'accept': 'application/json'
  }
}, function (res) {
  var response = '';

  res.on('data', function (data) {
    response += data;
  });

  res.on('end', function () {
    console.log(response);
  });
});
