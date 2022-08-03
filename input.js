// stores the active tcp connection object
let _connection;

const handleUserInput = (key) => {
  if (key === `\u0003`) {
    process.exit();
  }
  switch (key) {
  case 'w':
    console.log(key);
    break;
  case 's':
    console.log(key);
    break;
  case 'a':
    console.log(key);
    break;
  case 'd':
    console.log(key);
    break;
  }
};
const setupInput = function(connection) {
  _connection = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(`utf8`);
  stdin.resume();

  stdin.on(`data`, handleUserInput);
  return stdin;
};

// Exports
module.exports = setupInput;