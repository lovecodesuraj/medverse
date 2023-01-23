import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import questionsRoutes from "./routes/questions.js"

const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

app.use("/questions",questionsRoutes);

const CONNECTION_URL = "mongodb+srv://suraj:ilovecosmos@cluster0.g6befiv.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{app.listen(PORT , ()=>{console.log(`sever is running at port ${PORT}`)})})
.catch((err)=>{console.log(err)})

// mongoose.set('useFindAndModify', false);
// mongoose.set('strictQuery', true)