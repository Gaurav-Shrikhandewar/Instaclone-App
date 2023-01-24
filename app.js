
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route");
require('dotenv').config({ path: './config.env' });
const app = express();
app.use(express.json());
app.use('/', router);
// const port = 5000;
const uri = process.env.MONGODB_URI ;
const DB = "mongodb+srv://gauravs:gauravs@cluster0.7grqoez.mongodb.net/db1?retryWrites=true&w=majority"

mongoose.set("strictQuery", false);
mongoose.connect(DB , {                
        useNewUrlParser: true,
        useUnifiedTopology: true
        // useCreateIndex: true,
        // useFindAndModify:false
    }).then(() => {
        console.log("Connection to DB is successful!");
    }).catch((e) => { 
        console.log(e); 
    });

app.listen(5000 , () => { console.log(`Server is up and running at port 5000`); })

