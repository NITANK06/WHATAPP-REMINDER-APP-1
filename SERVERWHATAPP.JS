const twilio = require("twilio");

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendWhatsAppMessage = async (to, message) => {
  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:${to}`,
    });

    console.log("Message sent");
  } catch (error) {
    console.error(error);
  }
};

module.exports = sendWhatsAppMessage;
