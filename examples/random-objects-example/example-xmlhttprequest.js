var request = new XMLHttpRequest();

request.addEventListener('load', function (e) {
  var galleries = {};
  var body = document.getElementById('body');

  // response comes back as "{data: [{attributes: {locations: [{...}], summary_title: '...'} ...}, {} ...]}"
  JSON.parse(this.responseText).data.forEach(function (el) {
    if (!galleries[el.attributes.locations[0].value]) {
      // store all gallery names in an object
      galleries[el.attributes.locations[0].value] = [];
    }

    // store the title of all objects on display in that gallery in an array in the gallery object
    galleries[el.attributes.locations[0].value].push(el.attributes.summary_title);
  });

  for (var gal in galleries) {
    // for each gallery, create a heading
    var heading = document.createElement('h1');

    heading.innerText = gal;
    body.appendChild(heading);

    galleries[gal].forEach(function (el) {
      // for each item in a gallery, add it under the gallery heading
      var subHeading = document.createElement('h3');
      subHeading.innerText = '-->  ' + el;
      body.appendChild(subHeading);
    });
  }
});

// Get 5 random objects on display in the Science Museum
request.open('GET', 'http://collection.sciencemuseum.org.uk/search/museum/science%20museum?random=5');
// This url is equivalent to: http://collection.sciencemuseum.org.uk/search?museum=science%20museum&random=5

request.setRequestHeader('accept', 'application/json');

request.send();
