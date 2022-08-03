// Required
const net = require(`net`);
const connect = require(`./client`);
const setupInput = require(`./input`);
const {ADDRESS, PORT} = require(`./constants`);

// Functions
console.log(`Connecting to ${ADDRESS}:${PORT}...`);
const host = connect(ADDRESS, PORT);
setupInput(host);