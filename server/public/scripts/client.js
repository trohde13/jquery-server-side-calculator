console.log(`Autobots, let's roll out!`);

$(document).ready(handleReady);

function handleReady() {
    console.log('jquery is loaded');

    //click listeners
    $('.btn').on('click', handleTotal);
    $('#submit').on('click', handleSubmit);
    $('#clear').on('click', handleResetButton);

}; //end handleReady


let operator = '';


function handleTotal() {
    console.log('in handleTotal')
    
}

//POST
function handleSubmit() {
    console.log('submit for answer clicked');

    let mathData = handleTotal

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