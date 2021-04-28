import { gql } from '@apollo/client';

const ADD_NEW_QUESTION = gql`
  mutation AddNewQuestion($questionId: ID!) {
    getQuestion(id: $questionId ) @rest(type: "Question", path: "questions/{args.id}" ) {
      question
    }
  }
`