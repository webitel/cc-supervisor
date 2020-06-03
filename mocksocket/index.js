const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8081 });
const not = [
    {
      type: 'attention',
      subject: 'Help!',
      description: 'Petr Mamonov',
      read: true,
    },
    {
      type: 'request',
      subject: 'Olga Truman',
      description: 'Plz call me!',
      read: true,
    },
    {
      type: 'widget',
      subject: 'Service Level:',
      description: '36%',
      read: true,
    },
    {
      type: 'agent-utilization',
      subject: 'Maxim Lis',
      description: '45%',
      read: true,
    },
    {
      type: 'agent-disconnect',
      subject: 'Dima45',
      description: '14:46',
      read: true,
    },
  ];

// eslint-disable-next-line arrow-body-style
const delayLoop = (fn, delay) => {
    return (x, i) => {
        setTimeout(() => {
        fn(x);
        }, i * delay);
    };
};

wss.on('connection', (ws) => {
    not.forEach(delayLoop((item) => {
        console.log('next tick');
        ws.send(JSON.stringify(item));
    }, 5000));
});
