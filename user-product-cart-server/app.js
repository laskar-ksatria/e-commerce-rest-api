if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV === 'development') {
    require('dotenv').config();
};

const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const indexRouter = require('./routes/index');
const morgan = require('morgan')
const errHandler = require('./middleware/errHandler');

//mongoose-connection
mongoose.connect('mongodb://localhost/e-commerce-local', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Hallo, this is mongoDB');
});

//app-use
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('combined'))
app.use(express.json());
app.use(indexRouter);
app.use(errHandler);


app.listen(PORT,() => console.log(`Server listening on ` + PORT));

module.exports = app;


