const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const server = require('./config/server');
require('./config/db');
require('./config/routes')(server);