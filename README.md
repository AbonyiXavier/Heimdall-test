# Heimdall-test

[![Build Status](https://travis-ci.com/AbonyiXavier/Heimdall-test.svg?branch=main)](https://travis-ci.com/AbonyiXavier/Heimdall-test)

[![Coverage Status](https://coveralls.io/repos/github/AbonyiXavier/Heimdall-test/badge.svg?branch=main)](https://coveralls.io/github/AbonyiXavier/Heimdall-test?branch=main)

## Heroku Hosted API

Heimdall Technologies Test APIs hosted on heroku [link](https://heimdall-test-api.herokuapp.com/)

# Using Heimdall Technologies Test APIs through a restful client

- Open any restful client application initially installed
- Select the appropriate http method. Either GET, POST, PATCH

### Homepage Endpoint

- Use the GET method
- Use this url https://heimdall-test-api.herokuapp.com/

### All validation passes Endpoint

- Use the POST method
- Use this url https://heimdall-test-api.herokuapp.com/api/v1/input-validate

- Test Data

```Bash
  {
  "data": {
  "type": "durban",
  "crux": "Indices",
  "color": "green",
  "title": "Indict the idiot"
  },
  "rules": ["type", "crux", "color", "title"]
  }

- Output response
  {
  "status": 200,
  "message": "Valid"
  }
```

### Missing input item Endpoint

- Use the POST method
- Use this url https://heimdall-test-api.herokuapp.com/api/v1/input-validate

- Test Data

```Bash
  {
  "data": {
  "type": "durban",
  "color": "green",
  "title": "Indict the idiot"
  },
  "rules": ["type", "crux", "color", "title"]
  }

- Output response
  {
  "status": 400,
  "missingInputItems": [
  "crux"
  ]
  }
```

### Successfully remove item from object Endpoint

- Use the PATCH method
- Use this url https://heimdall-test-api.herokuapp.com/api/v1/remove-item

- Test Data

```Bash
  {
  "data": {
  "type": "durban",
  "crux": "Indices",
  "color": "green",
  "title": "Indict the idiot"
  },
  "item": "type"
  }

- Output response
  {
  "status": 200,
  "output": {
  "crux": "Indices",
  "color": "green",
  "title": "Indict the idiot"
  }
  }
```

### Attribute not found Endpoint

- Use the PATCH method
- Use this url https://heimdall-test-api.herokuapp.com/api/v1/remove-item

- Test Data

```Bash
  {
  "data": {
  "type": "durban",
  "crux": "Indices",
  "color": "green",
  "title": "Indict the idiot"
  },
  "item": "noItemFromObject"
  }

- Output response
  {
  "status": 404,
  "message": "attribute not found"
  }
```

### Valid lowest index Endpoint

- Use the POST method
- Use this url https://heimdall-test-api.herokuapp.com/api/v1/lowest-index

- Test Data

```Bash
  {
  "magic": [3, 2, 5, 4],
  "distance": [2, 3, 4, 2]
  }

- Output response
  {
  "status": 200,
  "message": 0
  }
```

### Return -1 for no solution lowest index Endpoint

- Use the POST method
- Use this url https://heimdall-test-api.herokuapp.com/api/v1/lowest-index

- Test Data

```Bash
  {
  "magic": [3, 2, 5, 4],
  "distance": [2, 3, 4, 2]
  }

- Output response
  {
  "status": 400,
  "message": -1
  }
```

# Technologies

- Node js
- Express js
- Mocha & Chai
- ESLint
- Travis CI && Coveralls
- Babel
- Heroku

# Prerequisites

You must have

- NodeJs Installed
- A browser Installed
- A RESTAPI client(like POSTMAN) Installed
- An Internet connection to download the dependencies.

### Installation code

run:

```Bash
    $ git clone https://github.com/AbonyiXavier/Heimdall-test
    $ cd Heimdall-test
    $ npm install
    $ npm run dev
```

### Tests

```Bash
    $ npm run test
```

## API Documentation

Built with Postman [link](https://documenter.getpostman.com/view/7775892/TVmFmgRB)

# Author

Francis Nnamdi Abonyi
