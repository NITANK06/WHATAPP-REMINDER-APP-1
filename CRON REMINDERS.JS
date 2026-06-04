const cron = require("node-cron");
const Appointment = require("./model appointment");
const sendwhatappmessage = require("./whatappservices");

cron.schedule("0 * * * *", async () => {
    const now = new Date();
    const nextHour = new Date(now.getTime() + 60 * 60 * 1000);
    const appointments = await Appointment.find({
        appointmentTime: {
            $gte: now,
            $lt: nextHour,
        },
        remindersent: false,
    }); 
    for (const appointment of appointments) {
        await sendwhatappmessage(
            appointment.phoneNumber,
            `Hello ${appointment.customerName}, this is a reminder for your appointment scheduled at ${new Date(
                appointment.appointmentTime
            ).toLocaleString()}`
        );
        appointment.remindersent = true;
        await appointment.save();
    }
});
