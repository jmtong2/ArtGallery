const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))        //Parse form
app.use(bodyParser.json())                              //Parse json
app.use(express.static(path.join(__dirname, "files")))  //static folder

//http://localhost:3000/
app.get("/", function(req, res){
        res.sendFile(__dirname + "/files/form.html");
})

app.listen(port, function() {
        console.log("App listening at port " + port)
})