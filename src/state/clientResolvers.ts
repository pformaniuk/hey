import { InMemoryCache } from "@apollo/client";
import { QuestionInput } from "./generated/graphql";

export const clientResolvers = {
  cacheNewQuestion: (_root: any, variables: { newQuestion: QuestionInput }, { cache }: { cache: InMemoryCache }) => {
    cache.modify({
      fields: {
        getAllQuestions(existing = []) {
          return [...existing, variables.newQuestion];
        }
      }
    });
  }
}