async function createContext({ req, res }) {
  const context = { req, res };

  return context;
}

export default createContext;
