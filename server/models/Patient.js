const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    name: String,
    contact: String,
    age: String,
    sex: String,
    cp: String,
    trestbps: String,
    chol: String,
    fbs: String,
    restecg: String,
    thalach: String,
    exang: String,
    oldpeak: String,
    slope: String,
    ca: String,
    thal: String,
    target: String,
    doctor: String,
    contact: [{
        phone: String,
        address: String
    }],
    hospital: String
}, {
    timestamps: true
})

module.exports = Patient = mongoose.model('patients', PatientSchema);