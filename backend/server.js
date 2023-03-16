const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config();

// App
const app = express();

// Database
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB CONNECTED'))
    .catch(err => console.log('DB CONNECTION ERROR', err));

// Fetch
app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
});

// Middleware
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true}));

// Routes
const testRoutes = require('./routes/test');
app.use("/", testRoutes);
// Port
const port = process.env.PORT || 5000;

// Listener
app.listen(port, () => 
{console.log(`Server is running on port ${port}`)});