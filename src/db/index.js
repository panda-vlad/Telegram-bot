import mongoose from 'mongoose'
import dotenv from 'dotenv'
// import { RequestModel } from './models/requests' // Exmpla importing model

dotenv.config()

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

// Models registration️ ®️
// exports.Request = mongoose.model('requests', RequestModel)
