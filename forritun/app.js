const path = require('path')
const express = require('express')
const http = require('http')
const ejs = require('ejs')
const app = express();
const httpServer = http.createServer(app);
const port = 4000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// serve static files
app.use(express.static(__dirname + '/public'));
/**
 * Server middleware
 */
app.use(require('serve-static')(path.join(__dirname, 'build')))


// load controllers
require('./lib/boot')(app, { verbose: !module.parent });

/**
 * Universal Application endpoint
 */
app.get('*', (req, res) => res.render('index'));

httpServer.listen(port);