const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
// bodyParser added for GET & POST routes
app.use(bodyParser.urlencoded({extended: true}));
// serves up static files
app.use(express.static('server/public'));

let numOne = numOne;
let numTwo = numTwo;
let operator = operator;
let total = 0;

switch (operator) {
    case $('#plus'):
        total = Number(numOne) + Number(numTwo);
        handleSubmit(total);
        break;
    case $('#minus'):
        total = Number(numOne) - Number(numTwo);
        handleSubmit(total);
        break;
    case $('#times'):
        total = Number(numOne) + Number(numTwo);
        handleSubmit(total);
        break;
    case $('#divide'):
        total = Number(numOne) + Number(numTwo);
        handleSubmit(total);
        break;
}

const mathResults =


//POST ROUTE
app.post('/equation', (req, res) => {
    let mathEquation = req.body;
    console.log(mathEquation);
    res.sendStatus(201);

    
})


//GET ROUTE
app.get('/equation', (req,res) => {
    console.log('you have math');
    res.send(mathResults);
})

//PORT
app.listen(PORT, () => {
    console.log('Server is rolling on PORT: ', PORT)
})