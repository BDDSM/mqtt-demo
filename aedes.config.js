module.exports = {
  protos: ['tcp', 'ws'],
  host: '127.0.0.1',
  port: 1883,
  wsPort: 3000,
  brokerId: 'aedes-cli',
  persistence: {
    name: 'redis',
  },
  mq: {
    name: 'redis',
  },
  key: null,
  cert: null,
  rejectUnauthorized: false,
  verbose: true,
  veryVerbose: false,
  noPretty: false
}
