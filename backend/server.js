require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express')
const workoutRoutes = require('./routes/workouts')

const app = express()

// middleware
app.use(express.json())

app.use((req, res , next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

// connect to db

mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    app.listen(process.env.PORT, ()=> {
        console.log('connected to db & Listening on 5000', process.env.PORT)
    })

  })
  .catch((error)=>{
    console.log(error)
  })
