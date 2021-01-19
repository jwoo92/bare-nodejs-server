export default (error) => {
  console.log('[formatError]: ', error);
  console.log(error?.extensions?.exception?.stacktrace);

  return error;
};
