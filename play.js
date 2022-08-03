// Required
const connect = require(`./client`);

// TCP
const ADDRESS = `165.227.47.243`;
const PORT = `50541`;

console.log(`Connecting to ${ADDRESS}:${PORT}...`);
connect(ADDRESS, PORT);