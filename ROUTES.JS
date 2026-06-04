const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment");
const sendWhatsAppMessage = require("../services/whatsappService");

router.post("/", async (req, res) => {
  try {
    const { customerName, phoneNumber, appointmentTime } = req.body;

    const appointment = await Appointment.create({
      customerName,
      phoneNumber,
      appointmentTime,
    });

    await sendWhatsAppMessage(
      phoneNumber,
      `Hello ${customerName},
Your appointment is confirmed for ${appointmentTime}.`
    );

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const appointments = await Appointment.find().sort({
    appointmentTime: 1,
  });

  res.json(appointments);
});

module.exports = router;
