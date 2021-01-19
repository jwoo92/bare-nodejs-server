// https://www.apollographql.com/docs/apollo-server/features/graphql-playground.html

import { enablePlayground, PORT } from '../../config';

const EXAMPLE_QUERY = `query getExamples {
  ping
  numberSix
  numberSeven
  user(id: 1) {
    id
    name
  }
  aliased_user: user(id: 2) {
    id
    name
  }
  randomDog {
    url
  }
}
`;

const playgroundConfig = {
  settings: {
    'editor.theme': 'dark', // accepts 'light' as well
    'request.credentials': 'same-origin', // For sending browser cookies along with the GraphQL requests. use 'omit' to not send browser cookies
  },
  tabs: [
    {
      endpoint: `http://localhost:${PORT}/graphql`,
      query: EXAMPLE_QUERY,
    },
  ],
};

export default enablePlayground ? playgroundConfig : false;
