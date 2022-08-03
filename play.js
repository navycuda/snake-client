// Required
const net = require(`net`);
const connect = require(`./client`);
const setupInput = require(`./input`);

// TCP
const ADDRESS = `165.227.47.243`;
const PORT = `50541`;

// Functions



console.log(`Connecting to ${ADDRESS}:${PORT}...`);
connect(ADDRESS, PORT);
setupInput();