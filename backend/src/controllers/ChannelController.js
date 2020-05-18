const mongoose = require('mongoose');
const { Channel } = require('../models/channel_model');
const { User } = require('../models/user_model');


module.exports.getAllChannels = async (req, res) => {
    const { user_id } = req.headers;
    console.log(req.headers);
    if (!user_id)
        return res.status(401).send("Not authorized");

    let channels = await Channel.find({ user: user_id });
    return res.send(channels);
};

module.exports.getChannel = async (req, res) => {
    let channelId = req.params;
    const { user_id } = req.headers;
    
    if (!mongoose.Types.ObjectId.isValid(channelId)) {
        return res.status(400).send("Invalid object id");
    }
    
    
    let user = await User.findById(user_id);
    if (!user) {
        return res.status(401).send("not authorized");
    }
    
    const channel = await Channel.findById(channelId);

    return res.send(channel);
};

module.exports.createChannel = async (req, res) => {
    const { title, link } = req.body;
    const { user_id } = req.headers;

    if(!user_id){
        return res.status(401).json({ erro: 'not authorized'});
    }

    const user = User.findById(user_id);

    if (!user) {
        return res.status(401).json({ erro: "user not found" });
    }

    const newChannel = await Channel.create({
        user: user_id,
        title,
        link,
    });

    return res.json(newChannel);
};

module.exports.deleteChannel = async (req, res) => {
    const id = req.params;    

    const channel = await Channel.findById(id);

    if (!channel) {
        return res.status(400).send('Not found channel');
    }

    await Channel.deleteOne({ _id: id });

    return res.status(204).send();

}




