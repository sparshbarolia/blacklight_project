require("dotenv").config();
const express = require("express");
const path = require("path");

const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.get("/",(req,res) => {
    res.render('home');
})

app.use("/api",userRoutes);

app.listen(PORT,() => {
    console.log(`server started at http://localhost:${PORT}`)
})