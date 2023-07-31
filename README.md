# NodeJS Books RESTFUL api

[![License](https://img.shields.io/badge/License-MIT-green.svg)]()


A minimal, secure RESTFUL api for NodeJS. This project is basically a books api that demonstrates all the CRUD operations.

# Installation

- Clone the repo by using `git clone`.
- Run `npm install` on the cloned directory.
- Add a .evn file and include your mongoDB collection string to connect to your MongoDB instance.
- Test your APIs on Postman to see if all the endpoints are working as required.

# Steps to add new API

- Copy the template model (model/bookModel.js) to a new file in the **models** folder and make the modifications outlined in the header.

`copy model/bookModel.js --> model/bookModel.js`

- Copy the template controller (controllers/RecipeController.js) to a new file in the **controllers** folder and make the modifications outlined in the header.

`copy controllers/bookController.js --> controllers/customController.js`

```
const booksController = require('../controllers/booksController');
const customController = require('../controllers/customController');
```

- You can add a test route to server.js underneath the existing routes, like so:

```
app.use('/api/v1/books', bookRouter);
app.use('/api/v1/books', customRouter);
```

# Running the software

- `node app.js` for simple setups.
- I would recommend looking at [the pm2 module](https://www.npmjs.com/package/pm2) for running on a production server.

# API Endpoints

### GET ALL BOOKS

```
GET: http://localhost:5050/api/v1/books
```

### GET A SINGLE BOOK

```
GET: http://localhost:5050/api/v1/book/:id
```

### UPDATE A BOOK

```
POST: http://localhost:5050/api/v1/book/update/:id
```

### DELETE A BOOK

```
DELETE: http://localhost:5050/api/v1/book/:id
```


### Project Tests
For this project, we will implement the tests using **Mocha**, **Chai** and **Sinon**.

## Show your support

Give a ⭐️ if you like this project!

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
