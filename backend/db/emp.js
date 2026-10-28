const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    emp_id: Number,
    emp_name: String,
    address: String,
    city: String,
    mobile_no: String,
    email_id: String,
    pwd:String
}, {
  versionKey: false // Disable the version key
});

const Emp = mongoose.model("emp_detail",empSchema);
module.exports = Emp;