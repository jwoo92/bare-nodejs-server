// eslint-disable-next-line no-unused-vars
function captureErrors(error, req, res, next) {
  const statusCode = error?.output?.statusCode || 500;
  const payload = error?.output?.payload || {
    statusCode,
    error: error.error || error.message,
    message: error.message,
  };

  res.status(statusCode).send(payload);
}

export default captureErrors;
