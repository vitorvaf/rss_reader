const mongoose = require('mongoose');
const { User } = require('../models/user_model');


module.exports.getAllUsers = async (req, res) => {
    let users = await User.find({});
    return res.send(users);
};

module.exports.getUser = async (req, res) => {
    let userId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).send("Invalid object id");
    }

    let user = await User.findById(userId);
    if (!user) {
        return res.status(404).send("User not found");
    }

    return res.send(user);
};

module.exports.createUser = async (req, res) => {
    const { name, email } = req.body;
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let user = new User({
        name: name,
        email: email
    });

    if(!regex.test(email)){
        return res.status(400).send("email not valid");
    }    

    await user.save()
        .catch(() =>{
            return res.status(500).json({erro: "user not created"});
        });

    return res.send(user);
};



