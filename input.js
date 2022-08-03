// stores the active tcp connection object
let _connection;

const handleUserInput = (key) => {
  if (key === `\u0003`) {
    process.exit();
  }
  switch (key) {
  case 'w':
    _connection.write(`Move: up`);
    break;
  case 's':
    _connection.write(`Move: down`);
    break;
  case 'a':
    _connection.write(`Move: left`);
    break;
  case 'd':
    _connection.write(`Move: right`);
    break;
  case '1':
    _connection.write(`Say: Catch Phrase`);
    break;
  case `2`:
    _connection.write(`Say: Phasers to Full!`);
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