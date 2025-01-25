import express from 'express';
import { WebSocketServer } from 'ws';

const app = express();
const PORT = 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀`);
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('A new client connected');
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Echo: ${message}`);
  });
});

