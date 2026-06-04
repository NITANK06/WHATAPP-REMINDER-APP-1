
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const appointmentRoutes = require("./routesappointment");
require("./cron reminderjob");
const app = express();
app.use(express.json());
app.use("/appointments", appointmentRoutes);
const PORT = process.env.PORT || 3000;
mongoose




    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })

    require("./cron reminderjob");
    const app = express();
    app.use(express.json());
    app.use("/appointments", appointmentRoutes);
     mongoose.connect(process.env.MONGO_URI), 
        app.use("/api/appointments",require("./routesappointment"));
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
