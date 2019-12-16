if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const PORT = process.env.PORT
const Router = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(Router)



app.listen(PORT, () => console.log('Server listening on ' + PORT))