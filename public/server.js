var express = require('express')
var app = express()
var PORT = 3000

app.get('/', function (req, res) {
    res.send('Hello Wolrd')
})



app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

app.use(functon (req, res) {
    res, setHeader("Content-Type", "text/plain")
    res.write('Content')
})



//Listener
app.listen(PORT, function() {
    console.log("PORT IS LISTENING " + PORT)

});