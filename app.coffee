express = require 'express'
# data = require './data'

app = express.createServer()
app.set 'view engine', 'jade'
app.use express.static(__dirname + '/assets')
app.listen process.env.C9_PORT

# app.use require('connect-assets')()

# all = require('now').initialize(app)
# all.now.variable = 666

# Routes
require('./apps/routes')(app)