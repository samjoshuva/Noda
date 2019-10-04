const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log(` ${req.method}    ${req.path}     ${new Date().toISOString()} `);
    next();
});


module.exports = app;
