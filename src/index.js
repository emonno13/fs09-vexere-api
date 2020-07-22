const mongoose = require("mongoose");
const config = require('./config')
const app = require('./api/routes')

const port = process.env.PORT || config.port

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})

mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connect to DB successfully"))
  .catch(console.log)

console.log(config)
