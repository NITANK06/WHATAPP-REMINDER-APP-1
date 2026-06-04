
const express = require("express");
const router = express.Router();
const Appointment = require("../model appointment");
const sendwhatappmessage = require("../whatappservices");


router.post("/", async (req ,res)) => {


    try {
        const {
            customerName,
            phoneNumber,
            appointmentTime
        } = req.body;
        const appointment = await Appointment.create({
            customerName,
            phoneNumber,
            appointmentTime
        });
        await sendwhatappmessage(
            phonenumber,
            `Hello ${ customerName}, your appointment is confirmed for ${new Date(
                appointmentTime
            ).toLocaleString()
            }            )}`
        );
        res.status(201).json(appointment);
    } catch (error){
        res.status(500).json({
            error:"error.message",
        });
    }
    router.get("/", async (req, res) => {
        const appointments = await Appointment.find().sort({ appointmentTime: 1});
    });
    res.json(Appointment);
};
module.exports = router;
