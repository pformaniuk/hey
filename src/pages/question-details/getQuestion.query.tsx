import { gql } from '@apollo/client';

const GET_QUESTION_DETAILS = gql`
  query GetQuestionDetails($questionId: ID!) {
    getQuestion(id: $questionId ) @rest(type: "Question", path: "questions/{args.id}" ) {
      question
        choices{
          url
        }
    }
  }
`