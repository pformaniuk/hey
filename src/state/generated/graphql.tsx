import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Choice = {
  choice?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  votes?: Maybe<Scalars['Int']>;
};

export type ChoiceInput = {
  choice?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  votes?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  addQuestion?: Maybe<Question>;
};


export type MutationAddQuestionArgs = {
  body?: Maybe<PublishablePostInput>;
};

export type PublishablePostInput = {
  question: Scalars['String'];
  choices?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Query = {
  getAllQuestions?: Maybe<Array<Maybe<Question>>>;
  getQuestion?: Maybe<Question>;
};


export type QueryGetQuestionArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type Question = {
  id: Scalars['ID'];
  question: Scalars['String'];
  published_at: Scalars['String'];
  choices?: Maybe<Array<Maybe<Choice>>>;
  url?: Maybe<Scalars['String']>;
};

export type AddNewQuestionMutationVariables = Exact<{
  newQuestionData: PublishablePostInput;
}>;


export type AddNewQuestionMutation = { addQuestion?: Maybe<(
    Pick<Question, 'question'>
    & { choices?: Maybe<Array<Maybe<Pick<Choice, 'choice' | 'url' | 'votes'>>>> }
  )> };

export type GetQuestionDetailsQueryVariables = Exact<{
  questionId: Scalars['ID'];
}>;


export type GetQuestionDetailsQuery = { getQuestion?: Maybe<(
    Pick<Question, 'question'>
    & { choices?: Maybe<Array<Maybe<Pick<Choice, 'choice' | 'url' | 'votes'>>>> }
  )> };

export type GetAllQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllQuestionsQuery = { getAllQuestions?: Maybe<Array<Maybe<(
    Pick<Question, 'question' | 'published_at' | 'url'>
    & { choices?: Maybe<Array<Maybe<Pick<Choice, 'url'>>>> }
  )>>> };


export const AddNewQuestionDocument = gql`
    mutation AddNewQuestion($newQuestionData: PublishablePostInput!) {
  addQuestion(body: $newQuestionData) @rest(type: "Post", path: "questions", method: "POST", bodyKey: "body") {
    question
    choices {
      choice
      url
      votes
    }
  }
}
    `;
export type AddNewQuestionMutationFn = Apollo.MutationFunction<AddNewQuestionMutation, AddNewQuestionMutationVariables>;

/**
 * __useAddNewQuestionMutation__
 *
 * To run a mutation, you first call `useAddNewQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewQuestionMutation, { data, loading, error }] = useAddNewQuestionMutation({
 *   variables: {
 *      newQuestionData: // value for 'newQuestionData'
 *   },
 * });
 */
export function useAddNewQuestionMutation(baseOptions?: Apollo.MutationHookOptions<AddNewQuestionMutation, AddNewQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNewQuestionMutation, AddNewQuestionMutationVariables>(AddNewQuestionDocument, options);
      }
export type AddNewQuestionMutationHookResult = ReturnType<typeof useAddNewQuestionMutation>;
export type AddNewQuestionMutationResult = Apollo.MutationResult<AddNewQuestionMutation>;
export type AddNewQuestionMutationOptions = Apollo.BaseMutationOptions<AddNewQuestionMutation, AddNewQuestionMutationVariables>;
export const GetQuestionDetailsDocument = gql`
    query GetQuestionDetails($questionId: ID!) {
  getQuestion(id: $questionId) @rest(type: "Question", path: "questions/{args.id}") {
    question
    choices {
      choice
      url
      votes
    }
  }
}
    `;

/**
 * __useGetQuestionDetailsQuery__
 *
 * To run a query within a React component, call `useGetQuestionDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionDetailsQuery({
 *   variables: {
 *      questionId: // value for 'questionId'
 *   },
 * });
 */
export function useGetQuestionDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetQuestionDetailsQuery, GetQuestionDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuestionDetailsQuery, GetQuestionDetailsQueryVariables>(GetQuestionDetailsDocument, options);
      }
export function useGetQuestionDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionDetailsQuery, GetQuestionDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuestionDetailsQuery, GetQuestionDetailsQueryVariables>(GetQuestionDetailsDocument, options);
        }
export type GetQuestionDetailsQueryHookResult = ReturnType<typeof useGetQuestionDetailsQuery>;
export type GetQuestionDetailsLazyQueryHookResult = ReturnType<typeof useGetQuestionDetailsLazyQuery>;
export type GetQuestionDetailsQueryResult = Apollo.QueryResult<GetQuestionDetailsQuery, GetQuestionDetailsQueryVariables>;
export const GetAllQuestionsDocument = gql`
    query GetAllQuestions {
  getAllQuestions @rest(type: "Question", path: "questions") {
    question
    published_at
    url
    choices {
      url
    }
  }
}
    `;

/**
 * __useGetAllQuestionsQuery__
 *
 * To run a query within a React component, call `useGetAllQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllQuestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllQuestionsQuery, GetAllQuestionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllQuestionsQuery, GetAllQuestionsQueryVariables>(GetAllQuestionsDocument, options);
      }
export function useGetAllQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllQuestionsQuery, GetAllQuestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllQuestionsQuery, GetAllQuestionsQueryVariables>(GetAllQuestionsDocument, options);
        }
export type GetAllQuestionsQueryHookResult = ReturnType<typeof useGetAllQuestionsQuery>;
export type GetAllQuestionsLazyQueryHookResult = ReturnType<typeof useGetAllQuestionsLazyQuery>;
export type GetAllQuestionsQueryResult = Apollo.QueryResult<GetAllQuestionsQuery, GetAllQuestionsQueryVariables>;