const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        reuired: true
    },
    password: {
        type: String,
        required: true
    },
})