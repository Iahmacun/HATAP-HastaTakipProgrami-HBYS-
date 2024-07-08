import WebSocket from 'ws';
import Message from './db.js';

const wss = new WebSocket.Server({ port: 3030 });

wss.on('connection', function connection(ws) {
  ws.on('message', async function incoming(data) {
    try {
      const messageData = JSON.parse(data);
      const { sender, recipient, content } = messageData;
      const message = await Message.create({ sender, recipient, content });
      // Yeni mesajı tüm bağlı istemcilere yayınla
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(message));
        }
      });
    } catch (error) {
      console.error('Mesaj işlenirken bir hata oluştu:', error);
    }
  });
});