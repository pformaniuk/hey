import { gql } from '@apollo/client';

const ADD_NEW_QUESTION = gql`
  mutation AddNewQuestion($newQuestionData: PublishablePostInput!) {
    addQuestion(body: $newQuestionData) @rest(
      type: "Question"
      path: "questions"
      method: "POST"
      bodyKey: "body"
    ) {
        question
        published_at
        choices{
          choice
          url
          votes
        }
    }
  }
`
const CACHEE_NEW_QUESTION = gql`
  mutation CacheNewQuestion($newQuestionData: QuestionInput!) {
    cacheNewQuestion(newQuestion: $newQuestionData) @client {
      question
        choices{
          choice
          url
          votes
        }
    }
  }
`