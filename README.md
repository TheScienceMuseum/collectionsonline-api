# collectionsonline-api

### `GET /search`
Search all collections.

#### Query parameters

| Name           | Type    | Required | Description                                              |
|----------------|:-------:|:--------:|----------------------------------------------------------|
| q              | string  | No      | Search term                                              |
| random        | integer | No       | Number of random records to return for the specified search criteria |
| page[number]   | integer | No       | Zero indexed pagination page number to retrieve          |
| page[size]     | integer | No       | Pagination page size (default 50, max 100)               |

##### Facet filter parameters
(Plural parameters are optionally multiple)

To comply with the [jsonapi](http://jsonapi.org) spec these filters are also available as `filter[PARAM_NAME]`.

###### All

| Name           | Type    | Required | Description                                              |
|----------------|:-------:|:--------:|----------------------------------------------------------|
| date[from]     | date    | No       | e.g. 1829, 1900-12 or 1984-04-19                         |
| date[to]       | date    | No       | e.g. 1829, 1900-12 or 1984-04-19                         |
| places         | string  | No       | Associated geographical places                           |
| images | boolean | No | Objects/Documents that have images|

There are three main categories of item: `Objects`, `Documents` and `People`

###### Objects  

`/search/objects`

| Name           | Type    | Required | Description                                              |
|----------------|:-------:|:--------:|----------------------------------------------------------|
| type           | string  | No       | e.g. Model locomotive                                    |
| makers         | string  | No       | Name of maker(s)/creator(s)                              |
| people         | string  | No       | Associated people e.g. Robert Stephenson                 |
| categories     | string  | No       | e.g. Locomotives and Rolling Stock                       |
| museum         | enum    | No       | NRM, SMG, NMeM or MSI                                    |
| on_display     | booelan | No       | Whether object is currently on display                   |
| location       | string  | No       | Object's current museum location (only if on_display)    |

###### People  

`/search/people`

| Name           | Type    | Required | Description                                              |
|----------------|:-------:|:--------:|----------------------------------------------------------|
| birth[place]   | string  | No       | Name of place person was born                            |
| birth[date]    | date    | No       | ALIAS for "date[from]"                                   |
| death[date]    | date    | No       | ALIAS for "date[to]"                                     |
| occupation     | string  | No       | Occupation of the person                                 |

###### Documents  

`/search/documents`

| Name           | Type    | Required | Description                                              |
|----------------|:-------:|:--------:|----------------------------------------------------------|
| makers         | string  | No       | Name of maker(s)/creator(s)                              |
| people         | string  | No       | Associated people e.g. Robert Stephenson                 |
| archive        | string  | No       | Name of archive                                          |

#### Example

```js
GET /search?q=Charles&page[number]=3&page[size]=1 HTTP/1.1
```

```js
// HTTP/1.1 200 OK
// Content-Type: application/vnd.api+json

{
  "data": [
    {
      "type": "people", // or objects or documents
      "id": "cp22969",
      "attributes": {
        // Resource attributes TBC
      },
      "relationships": {
        // Resource relationships TBC
        // Format: http://jsonapi.org/format/#document-compound-documents
      },
      "meta": {
        "score": 0.076713204 // Relevance of result
      },
      "links": {
        "self": "http://collection.sciencemuseum.org.uk/people/cp22969" // Link to this resource
      }
    }
  ],
  "meta": {
    "total_pages": 8,
    "count": {
      "type": {
        "all": 8,
        "people": 5,
        "objects": 2,
        "documents": 1
      }
    },
     "filters": {
      "birth[place]": [
        {
          "value": "London",
          "count": 2
        },
        {
          "value": "Portsmouth",
          "count": 1
        }
      ]
    }
  },
  "links": {
    "first": "http://collection.sciencemuseum.org.uk/search?q=Charles&page[number]=0&page[size]=1",
    "last": "http://collection.sciencemuseum.org.uk/search?q=Charles&page[number]=8&page[size]=1",
    "prev": "http://collection.sciencemuseum.org.uk/search?q=Charles&page[number]=2&page[size]=1",
    "next": "http://collection.sciencemuseum.org.uk/search?q=Charles&page[number]=4&page[size]=1"
  }
}
```

Queries can be made using a query string style url, where all the filters are included as a query string:

`http://collection.sciencemuseum.org.uk/search?places=France&museum=scm&images=true`

or as a parameter string:

`http://collection.sciencemuseum.org.uk/search/places/France/museum/scm/images`

---

### `GET /objects/{id}`

### `GET /people/{id}`

### `GET /documents/{id}`

If you know the id of the item you want (found in the data under `id`), you can retrieve just that item, eg:

`http://collection.sciencemuseum.org.uk/objects/co26704`

---

### Filter Categories

Visit the site at http://collection.sciencemuseum.org.uk/search/ to get an idea of the Categories and other filters available

### Examples

See some examples in [this folder](https://github.com/TheScienceMuseum/collectionsonline-api/tree/master/examples)
