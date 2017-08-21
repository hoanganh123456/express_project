'use strict';

var socket = io();
var chatForm = document.forms.chatForm;
var chatUsername = document.querySelector('#chat-username');
var chatMessage = document.querySelector('#chat-message');

socket.on('connect', function () {
    if (chatForm) {

        chatForm.addEventListener('submit', function (e) {
            e.preventDefault();
            socket.emit('postMessage', {
                username: chatUsername.value,
                message: chatMessage.value
            });
            // showMessage({
            //
            // });
            chatMessage.value = '';
            chatMessage.focus();
        }); //chatfrom event

        socket.on('updateMessage', function (data) {
            showMessage(data);
        }); // updateMessage
    } //chat form
});
function showMessage(data) {
    var chatDisplay = document.querySelector('.chat-display');
    var newMessage = document.createElement('p');
    if (chatUsername.value == data.username) {
        newMessage.className = 'bg-success chat-text';
    } else {
        newMessage.className = 'bg-info text-warning chat-text';
    }

    newMessage.innerHTML = '<strong>' + data.username + '</strong> : ' + data.message;
    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
}
//# sourceMappingURL=chat.js.map