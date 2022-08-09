require('dotenv').config();
const fs = require('fs');
const Client = require('ssh2-sftp-client');

let config = {
    port: 22,
    host: process.env.HOST,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    passphrase: process.env.PASSPHRASE,
    privateKey: fs.readFileSync(process.env.PRIVATE_KEY_DIR),
    readyTimeout: 20000,
    retries: 2,
    retry_minTimeout: 2000,
  };

  class SFTPClient {
    constructor() {
      this.client = new Client();
    }
  
    async connect(options) {
      console.log(`Connecting to ${options.host}:${options.port}`);
      try {
        await this.client.connect(options);
        console.log('conectou parcero')
      } catch (err) {
        console.log('Failed to connect:', err);
      }
    }
  
    async disconnect() {
      await this.client.end();
    }
  
  }

  const client = new SFTPClient();
client.connect(config);