const users = [
  {
    id: '1',
    name: 'Elizabeth Bennet',
  },
  {
    id: '2',
    name: 'Fitzwilliam Darcy',
  },
];

export default {
  Query: {
    numberSix() {
      return 6;
    },
    numberSeven() {
      return 7;
    },
    user(_, { id }) {
      return users.find((user) => user.id === id);
    },
    async randomDog(_, __, { dataSources }) {
      const { ExampleAPI } = dataSources;

      const response = await ExampleAPI.getRandomDog();

      return {
        url: response.url,
      };
    },
  },
  Mutation: {},
};
