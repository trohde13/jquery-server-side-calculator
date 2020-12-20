console.log(`Autobots, let's roll out!`);

$(document).ready(handleReady);

let operator = '';

function handleReady() {
    console.log('jquery is loaded');

    //click listeners
    //selecting operator buttons to do the math by class, using this and .html()
    //to register the specific button clicked
    $('.btn').on('click', function() {
        operator = $(this).html();
    });

    $('#submit').on('click', handleSubmit);
    $('#clear').on('click', handleResetButton);

}; //end handleReady





//POST
function handleSubmit() {
    console.log('submit for answer clicked');

    //identifying the values for the object being sent to the server
    let numOne = $('.numOne').val();
    let numTwo = $('.numTwo').val();
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

//clears inputs
function handleResetButton() {
    console.log('clear inputs clicked');

    $('.inputIn').val('');
    $('#result').val('');

}; //end handleResetButton

// GET and append to DOM
function renderToDom() {
    $.ajax({
        url: '/equation',
        type: 'GET'
    }).then(function(response) {
        console.log(response);

        //appending to DOM, getting rid of zombie dups
        $('.resultList').empty();
        $('#result').empty();

        //looping the object returned to append to the results list
        for(let object of response) {
            $('.resultList').append(`
            <li>
            ${object.numOne}
            ${object.operator}
            ${object.numTwo} = 
            ${object.total}
            `)
        }

        
        //looping the object returned to display the solution to the math
        for(let object of response) {
            $('#result').text(`${object.total}`);
        }

        
    })
}; //end renderToDom