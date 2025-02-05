require("dotenv").config();
const express = require("express");
const cors = require("cors");
const ticketRoutes = require("./routes/ticketRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Use ticket routes
app.use("/api", ticketRoutes);  // This will handle all routes under /api

// Test route
app.get("/", (req, res) => {
  res.send("Ticket Reselling Backend is Running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// jj 