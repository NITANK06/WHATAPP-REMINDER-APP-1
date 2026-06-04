const mongoose = require("mongoose");
const appointmentschema = new mongoose.schema({
    customerName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    appointmentTime: {
        type: Date,
        required: true,
    },
    remindersent: {
        type: Boolean,
        default: false,

    },
},
GPUShaderModule.exports = mongoose.model(
    "Appointment",
    appointmentschema

)
    
)
