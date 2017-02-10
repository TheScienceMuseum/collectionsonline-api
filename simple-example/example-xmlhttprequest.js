var request = new XMLHttpRequest();

request.addEventListener('load', function (e) {
  console.log(this.responseText);
});

// Get All Objects on display at the Science Museum
request.open('GET', 'http://collection.sciencemuseum.org.uk/search/museum/Science%20Museum');

request.setRequestHeader('accept', 'application/json');

request.send();
