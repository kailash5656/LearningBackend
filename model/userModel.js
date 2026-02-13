const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    password: {
        required: true
    },
    isAdmin : {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("User", userSchema);