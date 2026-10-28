const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    profile_id: Number,
    patient_id: Number,
    medical_history: String,
    profile_date: Date
    
}, {
  versionKey: false // Disable the version key
});

const Profile = mongoose.model("patient_profile",profileSchema);
module.exports = Profile;