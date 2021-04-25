import { gql } from "@apollo/client";

// const GET_ALL_QUESTIONS = gql`
//   query getAllQuestions {
//     getAllQuestions @client {
//       id
//       title
//     }
//   }
// `;

// const GET_QUESTION = gql`
//   query getQuestion($id: ID) {
//     getQuestion(id: $id) @client {
//       id
//       question
//     }
//   }
// `;

// const ADD_QESTION_MUTATION = gql`
//    mutation addQuestion($questionInput: String) {
//     addQuestion(title: $questionInput) @client {
//       question
//     }
//   }
// `;