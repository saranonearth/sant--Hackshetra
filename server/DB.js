const mongoose = require('mongoose');

const db = () => {
    mongoose.connect(process.env.DBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log('connected to DB')
    })
}

module.exports = db;