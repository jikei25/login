const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Mongodb connected");
}).catch(() => {
    console.log("Failed to connect to database");
});

const schema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    } 
});

const collection = new mongoose.model("Users", schema);

module.exports = collection;