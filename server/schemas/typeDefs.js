const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
