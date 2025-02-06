require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // MongoDB connection
const ticketRoutes = require("./routes/ticketRoutes");
const authRoutes = require("./routes/auth"); // Authentication routes

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/tickets", ticketRoutes); // Ticket-related routes
app.use("/api/auth", authRoutes); // Authentication routes (signup, login, google login)

// Test route
app.get("/", (req, res) => {
  res.send("Ticket Reselling Backend is Running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
