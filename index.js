const server = require('./server');
const database = require('./db.connect');

const app = server.init();
server.start(app);
database.connect();