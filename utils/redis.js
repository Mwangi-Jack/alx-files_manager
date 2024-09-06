const redis = require('redis');

const client = redis.createClient({
  url: 'redis://localhost:6379'
});

class RedisClient {
  constructor () {
    client.connect();
    client.on('err', (err) => {
      console.log(err);
    });
  }

  isAlive () {
    return !!client;
  }

  async get (key) {
    const value = await client.get(key);
    return value;
  }

  async set (key, val, dur) {
    await client.set(key, val, {
      EX: dur
    });
  }

  async del (key) {
    await client.del(key);
  }
}

const redisClient = new RedisClient();

module.exports = redisClient;
