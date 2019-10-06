import gql from "graphql-tag";

export const VERIFY_TOKEN = gql`
  query verifyToken($token: String!) {
    verifyToken(token: $token) {
      _id
      name
      email
      birth
      password
      photoUrl
      isAdmin
      googleLink
      fridge {
        _id
        name
        container
      }
    }
  }
`;
