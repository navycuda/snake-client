// Required
const net = require(`net`);
const connect = require(`./client`);

// TCP
const ADDRESS = `165.227.47.243`;
const PORT = `50541`;

// Functions
const handleUserInput = (key) => {
  if (key === `\u0003`) {
    process.exit();
  }
  console.log(key);
};
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(`utf8`);
  stdin.resume();

  stdin.on(`data`, handleUserInput);
  return stdin;
};


console.log(`Connecting to ${ADDRESS}:${PORT}...`);
connect(ADDRESS, PORT);
setupInput();