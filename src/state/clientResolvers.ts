import { InMemoryCache } from "@apollo/client";

export const clientResolvers = {
    addQuestion: (_root: any, variables: { value: string }, { cache } : { cache: InMemoryCache }) => {
        return null;
    }
}