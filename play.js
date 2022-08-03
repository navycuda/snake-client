// TCP
const { on } = require("events");
const net = require(`net`);
const ADDRESS = `165.227.47.243`;
const PORT = `50541`;

const connect = function () {
  const client = net.createConnection({
    host: ADDRESS,
    port: PORT
  });
  client.setEncoding(`utf8`);
  
  client.on(`data`, (data) => {
    console.log(`server > `, data);
  });
  
  
  return client;
};

console.log(`Connecting to ${ADDRESS}:${PORT}...`);
connect();