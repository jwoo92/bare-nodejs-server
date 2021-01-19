import morgan from 'morgan';

morgan.token('gql', (req) => req?.body?.operationName);

const options = {
  skip(req) {
    const noBody = !Object.keys(req?.body || {}).length;
    const isIntrospectionQuery = req?.body?.operationName === 'IntrospectionQuery';

    if (noBody || isIntrospectionQuery) return true;

    return false;
  },
};

const formats = {
  development: ':method :url :gql :status :response-time ms - :res[content-length]',
  production: ':method :url :gql :status :response-time ms - :res[content-length]',
};

const format = formats[process.env.NODE_ENV === 'production' ? 'production' : 'development'];

const logger = morgan(format, options);

export default logger;
