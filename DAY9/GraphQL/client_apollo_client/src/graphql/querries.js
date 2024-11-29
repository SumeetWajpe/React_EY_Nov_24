import { gql } from "@apollo/client";

export const GETALLCOURSES = gql`
  query GetAllCourses {
    courses {
      title
      price
      id
      likes
      rating
      imageUrl
      description
    }
  }
`;

export const GETCOURSEBYID = gql`
  query GetCourseById($courseId: ID!) {
    course(id: $courseId) {
      id
      title
      price
      likes
      rating
      imageUrl
      trainer {
        name
      }
      description
    }
  }
`;
