const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/blog?directConnection=true"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=> {
        console.log("connection to mongo successfully");
    })
}

module.exports = connectToMongo; 