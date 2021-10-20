require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    // Database connection 🥳


    mongoose.connect(
        process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(
        () => {
            console.log("Connected to MongoDB");
        }).catch(e => console.log(e));
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;