var http = require('http');

http.get({
  hostname: 'localhost',
  port: '8000',
  // Get All Objects on display in The 'MAking the Modern World Gallery' at the Science Museum
  path: 'https://collection.sciencemuseumgroup.org.uk/search?museum=Science%20Museum&gallery=Making%20The%20Modern%20World%20Gallery',
  // Url is equivalent to: https://collection.sciencemuseumgroup.org.uk/search/museum/Science%20Museum/gallery/Making%20The%20Modern%20World%20Gallery
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
