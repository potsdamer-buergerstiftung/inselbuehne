import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    hello: String!
  }
  type Mutation {
    contactRequest(input: ContactRequest!): Boolean
  }
  input ContactRequest {
    name: String!
    email: String!
    message: String!
  }
`;

const resolvers = {
  Query: {
    hello(parent, args, context): string {
      return "Hello!";
    },
  },
  Mutation: {
    async contactRequest(parent, args, context): Promise<boolean> {
      return true;
    }
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers, tracing: true });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
