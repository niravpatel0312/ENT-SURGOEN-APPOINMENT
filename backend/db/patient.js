const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    patient_id: Number,
    patient_name: String,
    address: String,
    city: String,
    mobile_no: String,
    email_id: String,
    pwd:String
}, {
  versionKey: false // Disable the version key
});

const Patient = mongoose.model("patient_regis",patientSchema);
module.exports = Patient;