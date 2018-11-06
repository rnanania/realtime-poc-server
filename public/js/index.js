var socket = io();
var generateButton = document.getElementById('generateButton');

socket.on('connect', function() {
    console.info('Connected to server socket');
});

socket.on('disconnect', function() {
    console.info('DisConnected from server socket');
});

socket.on('newRestriction', function(newRestriction){
    console.info(newRestriction);
});

function createNewRestriction(text) {
    socket.emit('newRestriction', {});
}

generateButton.addEventListener('click', function(e){
    e.preventDefault();
    createNewRestriction();
});

