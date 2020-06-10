import { gql } from "apollo-boost";

export const SEARCH = gql`
  query search($term: String!) {
    searchUser(term: $term) {
      id
      avatar
      username
      isFollowing
      isMySelf
    }
    searchPost(term: $term) {
      files {
        url
      }
      likeCount
    }
  }
`;
