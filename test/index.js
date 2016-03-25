var assert = require('assert')

process.env.NODE_ENV = 'test'

var request = require('supertest')
var PagesController = require('../app/pagesController')

describe('GET /', function() {
    var app
    beforeEach(function() {
        app = require('../app/app')()
    })
    it('responds with json', function(done) {
        var pages = PagesController('development-string')
        app.get('/', pages.index)

        request(app).get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({ msg: 'development-string'})
            .expect(200, done);
    })

    it('it does not respond with development-string', function(done) {
        request(app).get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(function(response) {
                assert.notEqual(response.body.msg, 'development-string')
            })
            .expect(200, done);
    })
})
