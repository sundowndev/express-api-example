const express = require('express');
const routes = require('./app/routes');

const app = express();

const port = process.env.PORT || 8080; // set our port

app.use('/', routes);

app.use(function(req, res) {
    res.status(404).json({ message: 'Resource not found.' });
});

// Start the server
app.listen(port);
console.log('Server started on port ' + port);
