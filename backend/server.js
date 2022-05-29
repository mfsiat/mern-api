const path = require('path')
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5555;

// MongoDB Connection
connectDB();

const app = express();

// Middleware
// @desc this helps to pass objects through request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// APIs
app.use("/api/v1/goals", require("./routes/goalRoutes"));
app.use("/api/v1/users", require("./routes/userRoutes"));

// Server Frontend
// Specify the static build folder and html file
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else {
  app.get('/', (req, res) => res.send('Please set to production'))
}

app.get("/", (req, res) => {
  res.status(200).json({
    message: "This is the Root",
  });
});

app.use(errorHandler);

app.listen(port, () => console.log(`Server Started on ${port}`));
