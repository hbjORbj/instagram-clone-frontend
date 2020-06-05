import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

const Client = new ApolloClient({
  uri: "http://localhost:4000",
  clientState: {
    defaults,
    resolvers,
  },
});

export default Client;