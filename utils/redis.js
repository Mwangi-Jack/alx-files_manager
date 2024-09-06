import { createClient } from 'redis';

class RedisClient {
  constructor () {
    this.client = createClient({
      url: 'redis://127.0.0.1:6379'
    });

    this.client.connect();
    this.client.on('err', (err) => {
      console.log(err);
    });
  }

  isAlive () {
    return !!this.client;
  }

  async get (key) {
    const value = await this.client.get(key);
    return value;
  }

  async set (key, val, dur) {
    await this.client.set(key, val, {
      EX: dur
    });
  }

  async del (key) {
    await this.client.del(key);
  }
}

const redisClient = new RedisClient();

export default redisClient;
