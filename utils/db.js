const { MongoClient } = require('mongodb');

class DBClient {
  constructor () {
    const host = process.env.DB_HOST || '127.0.0.1';
    const port = process.env.DB_PORT || 27017;
    const databaseName = process.env.DB_DATABASE || 'files_manager';
    this.client = new MongoClient(`mongodb://${host}:${port}`);
    this.db = this.client.db(databaseName);
    this.connect = this.client.connect();
  }

  isAlive () {
    try {
      this.client.connect();
      return true;
    } catch (err) {
      return false;
    }
  }

  async nbUsers () {
    const collection = this.db.collection('users');
    const users = await collection.find({}).toArray();

    return users.length;
  }

  async nbFiles () {
    const collection = this.db.collection('files');
    const files = await collection.find({}).toArray();

    return files.length;
  }
}

const dbClient = new DBClient();

module.exports = dbClient;
