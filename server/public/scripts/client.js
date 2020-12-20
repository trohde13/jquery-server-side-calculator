console.log(`Autobots, let's roll out!`);

$(document).ready(handleReady);

let operator = '';

function handleReady() {
    console.log('jquery is loaded');

    //click listeners
    //selecting operator buttons to do the math by class, using this and .html()
    //to register the specific button clicked
    $('.operatorButton').on('click', function() {
        operator = $(this).html();
    });

    $('#submit').on('click', handleSubmit);
    $('#clear').on('click', handleResetButton);

}; //end handleReady





//POST
function handleSubmit() {
    console.log('submit for answer clicked');

    let numOne = $('numOne').val();
    let numTwo = $('numTwo').val();
    let mathData = {
        numOne: numOne,
        numTwo: numTwo,
        operator: operator
    }

    $.ajax({
        url: '/equation',
        type: 'POST',
        data: mathData
    }).then(function(response){
        console.log(response);
        renderToDom();
    })

}; //end handleSubmit

function handleResetButton() {
    console.log('clear inputs clicked');

    $('.inputIn').val('');

}; //end handleResetButton

// GET
function renderToDom() {
    $.ajax({
        url: '/equation',
        type: 'GET'
    }).then(function(response) {
        console.log(response);

        //appending to DOM, getting rid of zombie dups
        $('').empty();
    })
}; //end renderToDom