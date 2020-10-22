const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const taskroutes = require('../src/routes/Task')

app.use(bodyParser.json());
app.use('/api/tasks', taskroutes)

module.exports = app;