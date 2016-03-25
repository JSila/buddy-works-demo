var express = require('express')

module.exports = function() {
    var app = express();
    var pages = require('./pagesController')('production-string')

    return app.get('/', pages.index);    
}
