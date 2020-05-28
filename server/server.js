const express = require("express");
const conectDB = require("./config/db");
const cors = require("cors");

const app = express()

conectDB()
app.use(express.json({extended: false}))
app.use(cors())

app.get("/", (req, res) => res.send("API running"))
app.use("/cities", require("./routes/cities"))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started at port ${PORT}`))