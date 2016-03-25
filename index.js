var express = require('express')
var app = express()

app.use(require('./app/app')())

var server = app.listen(3000, () => {
    console.log('Listening on port %s', server.address().port);
})
