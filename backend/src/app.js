var express = require('express');
var data = require('./data/data');

class AppController {

  constructor() {
    this.express = express();

    this.middlawares();
    this.routes();
    this.mongoose();
    this.errorHandler();

  }

  mongoose() {
    data();    
  }

  errorHandler() {
    this.express.use((err, req, res, next) => {
      res.locals.message = err.message;

      res.status(err.status || 500);
      res.send(err);
    });
    
  }

  middlawares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.express.use(require('./routes/routes'));
  }
}

module.exports = new AppController().express;