const mongoose = require("mongoose");

const DB_URL = "URL......For__Next__Class"

const connectToDatabase = async() => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Database is connected")
    } catch (error) {
        console.log(`Error while connecting database is ${error}`);
    }
}

module.exports = connectToDatabase;