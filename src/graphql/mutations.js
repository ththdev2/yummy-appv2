import gql from "graphql-tag";

export const GOOGLE_SIGNIN = gql`
  mutation googleSignIn($email: String!) {
    googleSignIn(email: $email) {
      token
    }
  }
`;
