var request = new XMLHttpRequest();

request.addEventListener('load', function (e) {
  console.log(this.responseText);
});

// Get All Art Objects from France
request.open('GET', 'https://collection.sciencemuseumgroup.org.uk/search/category/Art/places/France');
// Url is equivalent to https://collection.sciencemuseumgroup.org.uk/search?category=Art&places=France

request.setRequestHeader('accept', 'application/json');

request.send();
