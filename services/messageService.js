const WebSocket = require('ws');
const MessageUtils = require('./messageUtils');

const wss = new WebSocket.Server({ port: 8181 });

wss.on('connection', function connection(ws) {
    setInterval(() => {
        let message = MessageUtils.createMessage();
        ws.send(JSON.stringify(message), () => {
            console.log('Message Sent: \n', message);
        });
    }, 3000);
});
