const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;



app.get('/', (req, res) => {
    res.status(200).send("Hello Form Node API")
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});


//Connect to database
mongoose.connect("mongodb+srv://hr_patel:sdABhS5yJtTC7sOk@backenddb.i65yp8z.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((error) => {
        console.error("Connection to the database failed:", error);
    });

