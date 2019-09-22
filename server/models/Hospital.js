const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HospitalSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    hospitalName: String,
    phone: String,
    address: String
}, {
    timestamps: true
})

module.exports = Hospital = mongoose.model('hospitals', HospitalSchema);