require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
//const bookingRoutes = require("./routes/bookingRoutes");
//app.use("/api/bookings", bookingRoutes);

// home route
app.get("/", (req, res) => {
    res.send("🚀 SBT Aqua Roots Backend Running");
});

// DB connect + server start
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(process.env.PORT, () => {
        console.log(`✅ Server Running on http://localhost:${process.env.PORT}`);
    });

})
.catch((err) => {
    console.log("❌ MongoDB Error");
    console.log(err.message);
});