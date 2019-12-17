if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT
const morgan = require('morgan')
const Router = require('./routes/index')

//mongoose-connection
mongoose.connect('mongodb://localhost/e-commerce-local', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Hallo, this is mongoDB');
});

app.use(express.urlencoded({extended: false}))
app.use(morgan('combined'))
app.use(Router)



app.listen(PORT, () => console.log(`Server listening on ${PORT}`))


