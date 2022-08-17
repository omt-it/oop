const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/test', function (req, res) {
    res.send('Hello Test')
})

function calculate(nummer_1, nummer_2, rechenart) {
    let result

    switch (rechenart) {
        case "minus":
            result = nummer_1 - nummer_2
            break
        case "plus":
            result = nummer_1 + nummer_2
            break
    }

    return result
}

//var nummer_1 = 12
//var nummer_2 = 13
//var ergebnis = nummer_1 + nummer_2
//console.log("Mein Ergebnis: " + ergebnis)

var meinErgebnis = calculate(4, 66, "plus")

console.log(meinErgebnis)


app.listen(3000)