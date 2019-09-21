const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    name: String,
    age: Number,
    sex: Number,
    cp: Number,
    trestbps: Number,
    chol: Number,
    fbs: Number,
    restecg: Number,
    thalach: Number,
    exang: Number,
    oldpeak: Number,
    slope: Number,
    ca: Number,
    thal: Number,
    doctor: String,
    phone: Number,
    address: String,
    hospital: String
}, {
    timestamps: true
})

module.exports = Patient = mongoose.model('patients', PatientSchema);