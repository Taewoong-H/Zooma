import http from 'http';
import WebSocket from 'ws';
import express from 'express';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (req, res) => res.render('home'));
app.get('/*', (req, res) => res.redirect('/'));

const handleListen = () => console.log('Listening on http://localhost:3000');

// app.listen(3000, handleListen);

// http server create
const server = http.createServer(app);
// webSocket server create
const wss = new WebSocket.Server({ server });
// => 두개 서버 같이 같은 포트에 만듬

wss.on('connection', (socket) => {
  // browser에서 server에 접속할 때
  console.log('Connected to Browser');
  // browser connect가 종료되었을 때
  socket.on('close', () => console.log('Disconnected from the Browser X'));
  // browser에서 메시지를 보낼 때
  socket.on('message', (message) => {
    console.log(message.toString('utf8'));
  });
  // browser에 메시지를 보낼때
  socket.send('hello!!!');
});

server.listen(3000, handleListen);
