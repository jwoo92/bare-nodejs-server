import ExampleResolver from './ExampleResolver';

const baseResolvers = {
  Query: {
    ping() {
      return 'pong';
    },
  },
};

export default [baseResolvers, ExampleResolver];
