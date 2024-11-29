import { gql } from "@apollo/client";

export const ADD_NEW_COURSE = gql`
  mutation AddCourse($newCourse: CourseInput!) {
    addCourse(newCourse: $newCourse) {
      id
      title
    }
  }
`;
