console.log(`Autobots, let's roll out!`);

$(document).ready(handleReady);

function handleReady() {
    console.log('jquery is loaded');

    //click listeners
    $('#submit').on('click', handleSubmit);
    $('#clear').on('click', handleResetButton);

}; //end handleReady

function handleSubmit () {
    console.log('submit for answer clicked');

}; //end handleSubmit