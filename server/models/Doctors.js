const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    specialization: {
        type: String,
        default: null,
        required: true
    },
    contact: [{
        phone: String,
        address: String
    }],
}, {
    timestamps: true
})

module.exports = Doctor = mongoose.model('doctors', DoctorSchema);