const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
    profile: {
        type: Schema.Types.ObjectId,
        refPath: 'userType'
    }

}, {
    timestamps: true
})

module.exports = User = mongoose.model('users', UserSchema);