var url = 'https://collection.sciencemuseumgroup.org.uk/search/museum/Science%20Museum?page[number]=2';
var opts = { headers: { Accept: 'application/json' } };

fetch(url, opts)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error(res.status + ' Failed to fetch results'));
    }
  })
  .then(function (json) {
    console.log(json);
  })
  .catch(function (err) {
    console.error(err);
  });
