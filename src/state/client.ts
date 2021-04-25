import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { clientResolvers } from './clientResolvers';
import { GetAllQuestionsDocument  } from "./generated/graphql";
import { RestLink } from 'apollo-link-rest';

const cache = new InMemoryCache();
const restLink = new RestLink({ uri: "https://polls.apiblueprint.org/" });

export const client = new ApolloClient({
  cache: cache,
  link: restLink,
  resolvers: {
    Mutation: {
      ...clientResolvers
    },
  },
});

client.cache.writeQuery({
  query: GetAllQuestionsDocument,
  data: {
    questions: [],
  },
});
