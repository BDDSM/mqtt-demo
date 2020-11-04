const mqtt = require('mqtt');
const client = mqtt.connect('ws://127.0.0.1:3000');
const { area, send, newMessage } = window;

const sendNewMessage = (msg) => {
    client.publish('mqtt', newMessage.value);
}

client.subscribe('mqtt');

client.on('connect', () => {
    send.addEventListener('click', () => sendNewMessage(send.value));
});


client.on('message', (topic, payload) => {
  area.value += `[${topic}] ${payload.toString()}\r\n`;
})

window.onbeforeunload = () => {
    client.end();
    send.removeEventListener('click', sendNewMessage);
}
