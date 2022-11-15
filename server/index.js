import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express()


app.use('/posts', postRoutes)
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  })



  

app.use(bodyParser.json({limit: "30mb", extended : true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended : true}))
app.use(cors())

// connect with db
const CONNECTION_URL = 'mongodb+srv://arkadiusz:arkadiusz@cluster0.3unu5qt.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3001

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then (() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch ((error) => console.log(error.message));




