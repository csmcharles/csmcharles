require('dotenv').load();

const express = require('express');
const app = express();

const ECT = require('ect');
const ectRenderer = ECT({ watch: true, root: __dirname + '/views', ext : '.ect' });

const routes = require('./routes/routes');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8000;

// set the view engine to ejs
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

app.use(express.static(__dirname + '/public'));
app.use('/', routes);

setInterval(() => {
    http.get('http://csmcharles.herokuapp.com');
}, 900000);

app.listen(port, () => {
    console.log('Our app is running on http://localhost:' + port);
});
