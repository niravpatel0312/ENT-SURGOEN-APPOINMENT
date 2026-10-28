const mongoose = require("mongoose");

const tsSchema = new mongoose.Schema({
    slot_id: Number,
    slot_time: String,
    emp_id: Number
}, {
  versionKey: false // Disable the version key
});

const Slot = mongoose.model("time_slot_info",tsSchema);
module.exports = Slot;