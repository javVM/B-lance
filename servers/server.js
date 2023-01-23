"use strict";
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.NODE_PORT || "3000";

app.listen(port, () => {
    console.log(`Successfully listening on port ${port}`);
})

const routes = require('./routes/routes.js');
app.use('/api', routes); 