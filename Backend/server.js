const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentsignuproutes");

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/exam-registration";

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(" MongoDB connected"))
.catch((err) => console.error(" MongoDB connection error:", err));

// Routes
app.use("/api/student", studentRoutes);

app.get("/", (req, res) => {
    res.send("Hello world");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
