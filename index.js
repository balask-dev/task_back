const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/routes");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv")
dotenv.config()
 
app.use(express.json());
app.use(cors());
app.use("/photos", router);  

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true},
       ()=> console.log("connected"))
  
  app.listen( process.env.PORT ,()=> console.log("Connected"))
