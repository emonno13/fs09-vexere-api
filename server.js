const express = require('express');
const mongoose = require("mongoose");
const config = require('./config')

console.log(config)

// console.log("local port:", process.env.LOCAL_PORT)
// console.log("local port:", process.env.STAGING_PORT)

// let port;
// if (process.env.NODE_ENV === 'staging') {
//   port =  process.env.STAGING_PORT
// } else {
//   port = process.env.PORT || process.env.LOCAL_PORT
// }
// const stations = require("./routes/api/stations")

// UNIX && MACOS
// export NODE_ENV =staging && yarn start:watch
// Windows
//set NODE_ENV=staging & yarn start:watch

const app = express();
app.use(express.json())

// lấy hình ảnh
app.use("/uploads", express.static("./uploads"))

app.use("/api",require("./routes/api/controlllers/stations"))
app.use("/api", require("./routes/api/controlllers/trips"))
app.use("/api", require("./routes/api/controlllers/users"))
app.use("/api",require("./routes/api/controlllers/tickets"))
//app.use(express.urlencoded)
// app.get("/api/stations", stations.getStations) 
// app.get("/api/stations/:id",stations.getStationById) 
// app.post("/api/stations",stations.postStations)
// app.put("/api/stations/:id", stations.putStationById)
// app.patch("/api/stations/:id",stations.patchStationById)
// app.delete("/api/stations/:id",stations.deleteStationById)
// Build localhost with Express
//const port =5000

const port = process.env.PORT || config.port

// có sẽ xài port heroku, ngược lại là 5000
app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
// "mongodb://localhost:27017/fs09-vexere"
// Connect to DB
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connect to DB successfully"))
  .catch(console.log)

