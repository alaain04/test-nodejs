const express = require('express')

const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/test', function (req, res) {
    console.log('console log from test')
    res.send({
        response: 'Hello World from test with nodemon'
    })
})

app.post('/suma',  express.json(),function (req, res) {
    const number1 = req.body.numeroA;
    const number2 = req.body.numeroB;

    const sum = number1 + number2;
    res.send({
        text: 'SUMA IGUAL A',
        result: sum
    })
})

app.put('/suma-nueva/:numA/:numB', function (req, res) {
    const number1 = req.params.numA;
    const number2 = req.params.numB;

    const sum = parseInt(number1) + parseInt(number2);
    res.send({
        text: 'SUMA IGUAL A',
        result: sum
    })
})

app.listen(3000)