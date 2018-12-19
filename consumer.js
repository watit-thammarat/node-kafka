const kafka = require('kafka-node');

const client = new kafka.Client('localhost:2181');

const topics = [
  {
    topic: 'kafka-node-dev'
  }
];
const options = {
  autoCommit: true
};

const consumer = new kafka.HighLevelConsumer(client, topics, options);

consumer.on('message', function(message) {
  console.log(message.value);
});
