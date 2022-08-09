require('dotenv').config();
const Client = require('ssh2-sftp-client');

const config = {
    host: process.env.HOST,
    port: 22,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  };

const sftp = new Client();