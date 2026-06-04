const cron = require("node-cron");
const Appointment = require("../models/Appointment");
const sendWhatsAppMessage = require("../services/whatsappService");

cron.schedule("* * * * *", async () => {
  const now = new Date();

  const oneHourLater = new Date(
    now.getTime() + 60 * 60 * 1000
  );

  const appointments = await Appointment.find({
    reminderSent: false,
    appointmentTime: {
      $gte: now,
      $lte: oneHourLater,
    },
  });

  for (const appointment of appointments) {
    await sendWhatsAppMessage(
      appointment.phoneNumber,
      `Reminder: Your appointment is at ${appointment.appointmentTime}`
    );

    appointment.reminderSent = true;
    await appointment.save();
  }
});

console.log("Reminder scheduler running");
