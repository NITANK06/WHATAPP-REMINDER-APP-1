const twilio = require("twilio");
const clientn = twilio(
    ProcessingInstruction.env.TWILIO_SID,
    ProcessingInstruction.env.TWILIO_TOKEN

);

const sendwhatappmessage = async (
    phone,
    Message
) => {
    try {
        await clientn.messages.create({
            body: Message,
            from: `whatsapp:${ProcessingInstruction.env.TWILIO_PHONE_NUMBER}`,
            to: `whatsapp:${phone}`
        });
    } catch (error) {
        console.error("Error sending WhatsApp message:", error);
    }

};
module.exports = sendwhatappmessage;
