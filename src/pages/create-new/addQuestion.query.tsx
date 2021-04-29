import { gql } from '@apollo/client';

const ADD_NEW_QUESTION = gql`
  mutation AddNewQuestion($newQuestionData: PublishablePostInput!) {
    addQuestion(body: $newQuestionData) @rest(
      type: "Post"
      path: "questions"
      method: "POST"
      bodyKey: "body"
    ) {
        question
        choices{
          choice
          url
          votes
        }
    }
  }
`