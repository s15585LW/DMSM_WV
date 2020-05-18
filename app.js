const express = require('express')
const path = require('path')
const routes = require('./routes/index')
const exhbs = require('express-handlebars')
const soap = require('./config/soap/client_own')
const app = express()


app.engine('handlebars', exhbs({
    defaultLayout: 'main',
    helpers: soap, dupa : function (name2, name1) {
        return name2 + " vs " + name1;
    }
}))



app.set('view engine','handlebars')
app.use(express.static(path.join(__dirname, '/public')))
app.use('/', routes)

module.exports = app
