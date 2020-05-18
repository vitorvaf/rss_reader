const mongoose = require('mongoose');

const ChannelSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },

    link:{
        type: String,
        require: true
    },
    
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }

});

module.exports.Channel = mongoose.model('Channel', ChannelSchema);