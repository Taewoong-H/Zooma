const socket = new WebSocket(`ws://${window.location.host}`);

// server와 연결 했을 때
socket.addEventListener('open', () => {
  console.log('Connected to Server O');
});

// server에서 보낸 메시지를 받을 때
socket.addEventListener('message', (message) => {
  console.log('Just got this: ', message.data, 'from the Server');
});

// server와의 연결이 끊어졌을 때
socket.addEventListener('close', () => {
  console.log('Connected so Server X');
});

// server에 메시지를 보낼 때
setTimeout(() => {
  socket.send('hello from the browser!');
}, 10000);
