






//mongoose-connection
mongoose.connect('mongodb://localhost/e-commerce-local', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Hallo, this is mongoDB');
});