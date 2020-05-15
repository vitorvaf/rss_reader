const express = require('express');
const createError = require('http-errors');
const userRoutes = require('./user.routes');


const routes = express();


routes.use("/api/users", userRoutes);

routes.use((request, response, next) =>{
    next(createError(404));
});

module.exports = routes;

