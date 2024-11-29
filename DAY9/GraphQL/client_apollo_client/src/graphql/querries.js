import { gql } from "@apollo/client";

export const GETALLCOURSES = gql`
  query GetAllCourses {
    courses {
      title
      price
    }
  }
`;
