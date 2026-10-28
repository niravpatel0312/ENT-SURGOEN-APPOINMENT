const mongoose = require("mongoose");

const appointSchema = new mongoose.Schema({
    appoint_id: Number,
    appoint_date: Date,
    slot_id: Number,
    medical_history: String,
    patient_id: Number,
    appoint_status: Number
}, {
  versionKey: false // Disable the version key
});

const Appoint = mongoose.model("appointment_detail",appointSchema);
module.exports = Appoint;