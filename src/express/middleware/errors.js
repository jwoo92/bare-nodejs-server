// This is a custom error middleware for Express.
// https://expressjs.com/en/guide/error-handling.html
// eslint-disable-next-line no-unused-vars
async function errors(err, _req, res, next) {
  const code = err?.output?.statusCode || 400;

  // log error
  console.error(err); // eslint-disable-line no-console

  // The default error message looks like this.
  const error = err?.output?.payload || {
    statusCode: code,
    error: code === 400 ? 'Bad Request' : 'Internal Server Error',
    message: err?.details?.[0]?.message,
  };

  return res.status(code).send({ ...error });
}

export default errors;
