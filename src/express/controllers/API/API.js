import { version } from '../../../../package.json';
import { PORT } from '../../../config';

const endpoint = `http://localhost:${PORT}`;
class API {
  static getHealthStatus(req, res) {
    return res.status(200).send('OK');
  }

  static getVersion(req, res) {
    return res.send(version);
  }

  static getWorld(req, res) {
    return res.json({
      hello: 'world',
    });
  }

  static overview(req, res) {
    return res.json({
      api: {
        health: `${endpoint}/api/health`,
        hello_world: `${endpoint}/api/hello-world`,
        version: `${endpoint}/api/version`,
      },
      graphql: `${endpoint}/graphql`,
    });
  }
}

export default API;
