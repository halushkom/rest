const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()
app.use(express.json({extended: true }))
//app.use('/api/about', require('./routes/about.routes'))
app.use('/api/reservation', require('./routes/reservation.routes'))
const PORT = config.get('port') // отримую port з файла default.json
async function start(){
     try{
        await mongoose.connect( config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
         app.listen(PORT, ()=> console.log(`Server has been started on port ${PORT}`))
     } catch (e) {
         console.log('server error', e.message)
         process.exit(1)
     }
}


start()
