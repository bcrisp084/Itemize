const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

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
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error("Error during login:", error.message);
        throw new AuthenticationError("An error occurred during login");
      }
    },
  },
};

module.exports = resolvers;
