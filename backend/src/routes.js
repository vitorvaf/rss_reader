const routes = require('express').Router(_);

routes.get('/', ()=> {
    return "Hello World"
})

module.exports = routes;

