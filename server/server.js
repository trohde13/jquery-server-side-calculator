const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
// bodyParser added for GET & POST routes
app.use(bodyParser.urlencoded({extended: true}));
// serves up static files
app.use(express.static('server/public'));

const mathResults =[];




//POST ROUTE
app.post('/equation', (req, res) => {
    // variables for math
    let numOne = req.body.numOne;
    let numTwo = req.body.numTwo;
    let operator = req.body.operator;
    let total = 0;

    //switch statement to do the math
    switch (operator) {
        case '+':
            total = Number(numOne) + Number(numTwo);
            break;
        case '-':
            total = Number(numOne) - Number(numTwo);
            break;
        case '*':
            total = Number(numOne) * Number(numTwo);
            break;
        case '/':
            total = Number(numOne) / Number(numTwo);
            break;
    }

    let mathEquation = {
        numOne: numOne,
        numTwo: numTwo,
        operator: operator,
        total: total,
    }


    console.log(mathEquation);
    res.sendStatus(201);

    return mathResults.push(mathEquation);
})


//GET ROUTE
app.get('/equation', (req,res) => {
    console.log('you committed have math');
    res.send(mathResults);
})

//PORT
app.listen(PORT, () => {
    console.log('Server is rolling on PORT: ', PORT)
})