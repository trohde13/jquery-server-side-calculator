const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
// bodyParser added for GET & POST routes
app.use(bodyParser.urlencoded({extended: true}));
// serves up static files
app.use(express.static('server/public'));

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









app.listen(PORT, () => {
    console.log('Server is rolling on PORT: ', PORT)
})