var mongoose = require('mongoose');

module.exports = ()=> {
    
    mongoose.connect('mongodb://localhost:27017/rss', {
        useNewUrlParser: true,
        useCreateIndex: true, 
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to MongoDB at mongodb://localhost/rss ...")
    }).catch(err => {
        console.log("Failed to connect to MongoDb...", err)
    });    

}

