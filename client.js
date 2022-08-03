// Required
const { on } = require("events");
const net = require(`net`);
const { stdin } = require("process");


const connect = function (address, port) {
  // Create connection to server
  const client = net.createConnection({
    host: address,
    port: port
  });
  // Set encoding to utf8
  client.setEncoding(`utf8`);
  // On a successful connection
  client.on(`connect`, () => {
    console.log(`...connection successful`);
    client.write(`Name: SAD`);
  });

  // Recieve a message from server
  client.on(`data`, (data) => {
    console.log(data);
  });


  /* Movement */
  // Up
  // client.write(`Move: up`);
  // Down
  // client.write(`Move: down`);
  // Right
  // client.write(`Move: right`);
  // Left
  // client.write(`Move: left`);




  return client;
};

// Exports
module.exports = connect;