// require path, express and body-parser
//require path so that we can use path stuff like path.join
var express = require("express");
var path = require("path");

var bodyParser = require("body-parser");
//instantiate the app
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './client'));
app.set('view engine', 'ejs');

// connecting to database
require('./config/mongoose.js');
//connecting to routes
require('./config/routes.js')(app);


// mongoose.connect('mongodb://localhost/dojo_qoutes');

// mongoose.connection.on('error', function(err){});

// declare QuotesSchema
// var QuotesSchema = new mongoose.Schema({
//  name: String,
//  quotes: String
// })

// Validations
// QuotesSchema.path('name').required(true, 'Name cannot be blank');
// QuotesSchema.path('qoutes').required(true, 'Quotes cannot be blank');

// var Qoutes = mongoose.model('Quotes', QuotesSchema)

//we're going to have /routes/index.js handle all of our routing
// this line requires and runs the code from our routes.js file and passes it app so that we can attach our routing rules to our express application!

// var route = require('./routes/index.js')(app, Quotes);


// setting server to run on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
 console.log('Quoting Dojo');
})
