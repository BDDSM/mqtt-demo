const mqtt = require('mqtt');
const config = require('./aedes.config');

const client = mqtt.connect(`mqtt://${config.host}:${config.port}`);

client.on('connect', () => {
    console.log('Connected!');
    client.subscribe('mqtt', function (err) {
        console.log('Subscribed!');
        if (!err) {
            setInterval(() => {
                client.publish('mqtt', 'Hello mqtt')
            }, 5000);
    }
  })
})

client.on('message', function (topic, message) {
  console.log(message.toString())
})
