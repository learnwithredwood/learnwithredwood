export const schema = gql`
  type Legal {
    title: String!
    slug: String!
    body: String!
  }

  type Query {
    legal(slug: String!): Legal! @skipAuth
  }
`
