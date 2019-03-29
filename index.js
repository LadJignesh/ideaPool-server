const express = require('express');
const ideaRoutes = require('./routes/idea-routes');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const app = express();

//Setting Port
var port = process.env.PORT || 3000;

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json());

//set up routes
app.use('/v1/ideaApp', ideaRoutes);

//create home route
app.get('/', (req, res) => {
	res.send("Idea Apis Running...");
});

// Handle 404 - Keep this as a last route
app.use(function (req, res, next) {
	res.status(404).send('404: File Not Found');
});

app.listen(port, () => {
	console.log('app now listening for request on port 3000');
});