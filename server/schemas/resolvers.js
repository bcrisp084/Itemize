const { User } = require("../models");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      console.log(args);
      const { _id } = args;
      const user = await User.findOne({ _id: _id });
      return user;
    },
    users: async () => {
      const users = await User.find({});
      return users;
    },
  },

  Mutation: {
    addUser: async (
      parent,
      { firstName, lastName, email, password },
      context
    ) => {
      return await User.create({ firstName, lastName, email, password });
    },
  },
};

module.exports = resolvers;
