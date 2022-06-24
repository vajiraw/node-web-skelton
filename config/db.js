const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/craft', {
      useNewUrlParser: true,
      useUnifiedTopology: true,      
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB



// const mongoose = require('mongoose')
// const dotenv = require('dotenv').config();


// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       //useFindAndModify: false,
//     })

//     console.log(`MongoDB Connected: ${conn.connection.host}`)
//   } catch (err) {
//     console.error(err)
//     process.exit(1)
//   }
// }

// module.exports = connectDB