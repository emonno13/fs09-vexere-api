const express = require('express');
const app = express();

app.use(express.json())

// lấy hình ảnh
app.use("/uploads", express.static("./uploads"))
app.use("/api",require("../controlllers/stations"))
app.use("/api", require("../controlllers/trips"))
app.use("/api", require("../controlllers/users"))
app.use("/api", require("../controlllers/tickets"))

module.exports = app;