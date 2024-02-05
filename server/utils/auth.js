const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

const secret = "thesecretofallsecrets";
const expiration = "2h";

module.exports = {
  AuthenticationError: new GraphQLError(
    "Unable to authenticate user information",
    {
      extensions: {
        code: "UNAUTHENTICATED",
      },
    }
  ),
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (error) {
      console.log("Error verfiying the token", error.message);
      throw new AuthenticationError("Invalid token");
    }

    return req;
  },

  signToken: function ({ firstName, lastName, email, _id }) {
    const payload = { firstName, lastName, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
