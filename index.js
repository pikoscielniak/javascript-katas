var express = require('express');

var app = express();
require('./server/config/express')(app);
require('./server/config/routes')(app);

app.listen(3030);
console.log("Listening on port " + 3030+ '...');