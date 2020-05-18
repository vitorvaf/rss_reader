const express = require('express');
const createError = require('http-errors');
const userRoutes = require('./user.routes');
const channelRoutes = require('./channel.routes');


const routes = express();


routes.use("/api/users", userRoutes);

routes.use('/api/channels', channelRoutes );

routes.use((request, response, next) =>{
    next(createError(404));
});

module.exports = routes;

