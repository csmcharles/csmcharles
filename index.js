require('dotenv').load();

const express = require('express');
const app = express();

const routes = require('./routes/routes');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8000;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use('/', routes);

app.listen(port, () => {
    console.log('Our app is running on http://localhost:' + port);
});