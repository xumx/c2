express = require 'express'

app = express.createServer()
app.set 'view engine', 'jade'
# app.use require('connect-assets')()
app.use express.static('assets')
app.listen 3333

# all = require('now').initialize(app)
# all.now.variable = 666

# Routes
require('./apps/routes')(app)