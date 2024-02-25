require("dotenv").config();
const express = require("express");

const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/api",userRoutes);

app.listen(PORT,() => {
    console.log(`server started at http://localhost:${PORT}`)
})