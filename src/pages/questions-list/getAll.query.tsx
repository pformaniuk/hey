import { gql } from "@apollo/client";

const GET_ALL_QUESTIONS = gql`
  query GetAllQuestions {
    getAllQuestions @rest(type: "Question", path: "questions") {
        question
        published_at
        url
        choices{
          url
        }
    }
  }
`;