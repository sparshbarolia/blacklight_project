require("dotenv").config();
const express = require("express");

const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

const UserDB = require("./connection")
app.get("/all" , (req, res) => {

  const query = 'SELECT * FROM userScore WHERE WEEK(TimeStamp)=WEEK(CURRENT_TIMESTAMP) ORDER BY score desc';

  try{
      UserDB.query(query, (error, results, fields) => {
          if (error) {
              console.error('Error executing query: ' + error.stack);
              return res.status(500).json({ error: 'Internal server error' });
          }
          res.json(results);
      });
  }
  catch(err){
      console.error('Error executing query: ' + error.stack);
      return res.status(500).json({ error: 'Internal server error' });
  }
})

app.use("/api",userRoutes);

app.listen(PORT,() => {
    console.log(`server started at http://localhost:${PORT}`)
})