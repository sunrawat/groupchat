const socket = io('http://localhost:8000');
const f = document.getElementById('sendContainer');
const msgToSend = document.getElementById('msgToSend');
const container = document.getElementById('.container');
const userName = prompt("Enter your name");

socket.emit("new-user-joined", userName);

