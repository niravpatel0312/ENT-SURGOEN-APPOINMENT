const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    doctor_name: String,
    email_id: String,
    pwd:String
}, {
  versionKey: false // Disable the version key
});

const Admin = mongoose.model("admin_detail",adminSchema);
module.exports = Admin;