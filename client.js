// Required
const { on } = require("events");
const net = require(`net`);

const connect = function (address, port) {
  // Create connection to server
  const client = net.createConnection({
    host: address,
    port: port
  });
  // Set encoding to utf8
  client.setEncoding(`utf8`);
  // Recieve a message from server
  client.on(`data`, (data) => {
    console.log(`server > `, data);
  });
  return client;
};

// Exports
module.exports = connect;