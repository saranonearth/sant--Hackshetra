const mongooose = require('mongoose');

const Schema = mongooose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    image: {
        type: String
    },
    userType: {
        type: String,
        default: null
    },
    contact: [{
        phone: String,
        address: String
    }],
    specialization
})