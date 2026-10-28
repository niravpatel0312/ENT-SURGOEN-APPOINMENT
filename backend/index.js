const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Admin = require("./db/admin");
const Patient = require("./db/patient");
const Emp = require("./db/emp");
const Slot = require("./db/slot");
const Appoint = require("./db/appointment");
const Profile = require("./db/profile");

app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

async function connectDb() {
    await mongoose.connect("mongodb://localhost:27017/", {
        dbName: "ent"
    })
    console.log("Mongodb connected");
}

connectDb().catch((err) => {
    console.error(err);
})

app.get("/", function (req, res) {
    res.send("<h1>Hello From Backend Server</h1>");
})

app.post("/patient_regis", async function (req, res) {
    let result = await Patient.find({ email_id: req.body.email });
    if (result.length == 0) {
        let result2 = await Patient.find().sort({ patient_id: -1 }).limit(1);
        let newpatientid = 0
        if (result2.length == 0) {
            newpatientid = 1;
        } else {
            newpatientid = parseInt(result2[0].patient_id) + 1;
        }
        let ob1 = new Patient({ patient_id: newpatientid, patient_name: req.body.name, address: req.body.add, city: req.body.city, mobile_no: req.body.mno, email_id: req.body.email, pwd: req.body.pwd });
        let result3 = await ob1.save();
        res.send(result3);
    } else {
        res.send({ "message": "Email Id Already Exists" });
    }
})

app.post("/login_user", async function (req, res) {
    let result = await Admin.findOne({ email_id: req.body.email, pwd: req.body.pwd });
    if (result) {
        res.send({ "message": "Admin Login Successfull" });
    } else {
        let result2 = await Patient.findOne({ email_id: req.body.email, pwd: req.body.pwd });
        if (result2) {
            res.send(result2);
        } else {
            let result3 = await Emp.findOne({ email_id: req.body.email, pwd: req.body.pwd });
            if (result3) {
                res.send(result3);
            } else {
                res.send({ "message": "Check Your Email Id or Password" })
            }
        }
    }
})

app.post("/add_emp", async function (req, res) {
    let result = await Emp.find({ email_id: req.body.email });
    if (result.length == 0) {
        let result2 = await Emp.find().sort({ emp_id: -1 }).limit(1);
        let newempid = 0
        if (result2.length == 0) {
            newempid = 1;
        } else {
            newempid = parseInt(result2[0].emp_id) + 1;
        }
        let ob1 = new Emp({ emp_id: newempid, emp_name: req.body.name, address: req.body.add, city: req.body.city, mobile_no: req.body.mno, email_id: req.body.email, pwd: req.body.pwd });
        let result3 = await ob1.save();
        res.send(result3);
    } else {
        res.send({ "message": "Email Id Already Exists" });
    }
})


app.get("/fetch_emp", async function (req, res) {
    let result = await Emp.find();
    res.send(result);
})

app.delete("/delete_emp/:eid", async function (req, res) {
    let result = await Emp.deleteOne({ emp_id: parseInt(req.params.eid) });
    res.send(result);
})

app.get("/fetch_single_emp/:eid", async function (req, res) {
    let result = await Emp.findOne({ emp_id: parseInt(req.params.eid) });
    res.send(result);
})


app.post("/update_emp", async function (req, res) {
    let result = await Emp.updateOne({ emp_id: parseInt(req.body.eid) }, { $set: { emp_name: req.body.name, address: req.body.add, city: req.body.city, mobile_no: req.body.mno, email_id: req.body.email, pwd: req.body.pwd } })
    res.send(result);
})


app.post("/add_slot", async function (req, res) {
    let result2 = await Slot.find().sort({ slot_id: -1 }).limit(1);
    let newslotid = 0
    if (result2.length == 0) {
        newslotid = 1;
    } else {
        newslotid = parseInt(result2[0].slot_id) + 1;
    }
    let ob1 = new Slot({ slot_id: newslotid, slot_time: req.body.slot, emp_id: parseInt(req.body.empid) });
    let result3 = await ob1.save();
    res.send(result3);
})


app.get("/fetch_slot_detail/:eid", async function (req, res) {
    let result = await Slot.find({ emp_id: parseInt(req.params.eid) });
    res.send(result);
})

app.delete("/delete_slot/:sid", async function (req, res) {
    let result = await Slot.deleteOne({ slot_id: parseInt(req.params.sid) });
    res.send(result);
})


app.get("/fetch_single_slot_detail/:sid", async function (req, res) {
    let result = await Slot.findOne({ slot_id: parseInt(req.params.sid) });
    res.send(result);
})

app.post("/update_slot", async function (req, res) {
    let result = await Slot.updateOne({ slot_id: parseInt(req.body.sid) }, { $set: { slot_time: req.body.slot } });
    res.send(result);
})


app.get("/patientfetchtimeslot", async function (req, res) {
    let result = await Slot.find();
    res.send(result);
})

app.get("/patient_fetch_appointment/:pid", async function (req, res) {
    let result = await Appoint.find({ patient_id: parseInt(req.params.pid) });
    res.send(result);
})

app.get("/emp_view_new_appointment", async function (req, res) {
    let result = await Appoint.find({ appoint_status: parseInt("0") });
    res.send(result);
})


app.post("/take_appointment", async function (req, res) {
    const currentDateUTC = new Date(req.body.adate).toISOString().slice(0, 10);
    let result = await Appoint.find({ appoint_date: currentDateUTC, slot_id: parseInt(req.body.sid) });
    if (result.length == 0) {
        let result2 = await Appoint.find().sort({ appoint_id: -1 }).limit(1);
        let newappointid = 0
        if (result2.length == 0) {
            newappointid = 1;
        } else {
            newappointid = parseInt(result2[0].appoint_id) + 1;
        }
        let ob1 = new Appoint({ appoint_id: newappointid, appoint_date: new Date(req.body.adate), slot_id: parseInt(req.body.sid), medical_history: req.body.mhistory, patient_id: parseInt(req.body.patientid), appoint_status: parseInt("0") });
        let result3 = await ob1.save();
        res.send(result3);
    } else {
        res.send({ "message": "Slot Already Booked" });
    }
})


app.get("/emp_fetch_new_appointment", async function (req, res) {
    let result = await Appoint.find({ appoint_status: parseInt("0") });
    res.send(result);
})

app.get("/fetch_all_patient_detail", async function (req, res) {
    let result = await Patient.find();
    res.send(result);
})


app.get("/approve_appoint/:aid", async function (req, res) {
    let result = await Appoint.updateOne({ appoint_id: parseInt(req.params.aid) }, { $set: { appoint_status: parseInt("1") } });
    res.send(result);
})

app.get("/notapprove_appoint/:aid", async function (req, res) {
    let result = await Appoint.updateOne({ appoint_id: parseInt(req.params.aid) }, { $set: { appoint_status: parseInt("2") } });
    res.send(result);
})

app.post("/add_patientprofile", async function (req, res) {

    let result2 = await Profile.find().sort({ profile_id: -1 }).limit(1);
    let newprofileid = 0
    if (result2.length == 0) {
        newprofileid = 1;
    } else {
        newprofileid = parseInt(result2[0].profile_id) + 1;
    }
    let ob1 = new Profile({ profile_id: newprofileid, patient_id: parseInt(req.body.pid), medical_history: req.body.history, profile_date: new Date() });
    let result3 = await ob1.save();
    res.send(result3);

})


app.get("/fetch_patient_profile", async function (req, res) {
    let result = await Profile.find();
    res.send(result);
})

app.delete("/delete_patient_profile/:pid", async function (req, res) {
    let result = await Profile.deleteOne({ profile_id: parseInt(req.params.pid) });
    res.send(result);
})

app.get("/fetch_single_patient_profile/:pid", async function (req, res) {
    let result = await Profile.findOne({profile_id: parseInt(req.params.pid)});
    res.send(result);
})

app.post("/update_patientprofile", async function (req, res) {
    let result3 = await Profile.updateOne({ profile_id: parseInt(req.body.prid)},{$set:{ patient_id: parseInt(req.body.pid), medical_history: req.body.history, profile_date: new Date() }});
    res.send(result3);
})

app.get("/emp_fetch_confirm_appointment", async function (req, res) {
    let result = await Appoint.find({ appoint_status: parseInt("1") });
    res.send(result);
})

app.get("/emp_fetch_notconfirm_appointment", async function (req, res) {
    let result = await Appoint.find({ appoint_status: parseInt("2") });
    res.send(result);
})

app.get("/emp_fetch_todays_appointment", async function (req, res) {
    const currentDateUTC = new Date().toISOString().slice(0, 10);
   
    let result = await Appoint.find({ appoint_date: currentDateUTC });
   
    res.send(result);
})


app.get("/fetch_patientwise_profile/:prid", async function (req, res) {
    let result = await Profile.find({profile_id: parseInt(req.params.prid)});
    res.send(result);
})


app.listen(3000, "localhost", function () {
    console.log("Server Started At Port No 3000");
})

