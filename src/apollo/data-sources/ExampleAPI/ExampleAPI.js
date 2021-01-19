import { RESTDataSource } from 'apollo-datasource-rest';
import Boom from '@hapi/boom';

class ExampleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://random.dog/';
  }

  willSendRequest(request) {
    if (!request.headers) request.headers = {};

    request.headers['x-Custom-Req-Header-Example'] = '<custom-value-here>';
  }

  async getRandomDog() {
    return this.get('/woof.json').catch((error) => {
      console.log('ERROR: ExampleAPI.getRandomDog - ', error.message);

      throw Boom.badImplementation();
    });
  }
}

export default ExampleAPI;
