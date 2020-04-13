const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const mongoose = require("mongoose");
const port = process.env.PORT || 5000
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(cors())


// Configuring the database
const dbConfig = require('./config/database.config.js');


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});


require('./app/routes/answer.routes.js')(app);
require('./app/routes/question.routes.js')(app);

var Users = require('./app/routes/Users')
app.use('/users', Users)




// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});

