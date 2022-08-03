// Required
const { on } = require("events");
const net = require(`net`);

const connect = function (address, port) {
  const client = net.createConnection({
    host: address,
    port: port
  });
  client.setEncoding(`utf8`);
  
  client.on(`data`, (data) => {
    console.log(`server > `, data);
  });
  
  
  return client;
};

// Exports
module.exports = connect;