console.log(`Autobots, let's roll out!`);

$(document).ready(handleReady);

function handleReady() {
    console.log('jquery is loaded');

    //click listeners
    $('#submit').on('click', handleSubmit);
    $('#clear').on('click', handleResetButton);

}; //end handleReady

//POST
function handleSubmit() {
    console.log('submit for answer clicked');


    $.ajax({
        url: '/equation'
        type: 'POST',
        data: 
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
}