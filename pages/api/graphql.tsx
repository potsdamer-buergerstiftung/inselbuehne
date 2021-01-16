import { ApolloServer, gql } from "apollo-server-micro";
import nodemailer from "nodemailer";

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
      let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
        tls: {
          ciphers: "SSLv3",
        },
      });
      let info = await transporter.sendMail({
        from: '"Inselbühne Potsdam" <hallo@inselbuehne-potsdam.de>',
        to: args.email,
        subject: "Website Inselbühne: Neue Nachricht",
        text: args.message,
      });
      console.log(info);
      return true
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers, tracing: true });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
