export const schema = gql`
  type User {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    email: String!
    name: String!
    preferences: JSON!
    hashedPassword: String!
    salt: String!
    GroupMember: [GroupMember]!
  }

  type Query {
    users: [User!]! @requireAuth(roles: ["userRead"])
    user(id: Int!): User @requireAuth(roles: ["userRead"])
  }

  input CreateUserInput {
    email: String!
    name: String!
    preferences: JSON!
    hashedPassword: String!
    salt: String
  }

  input UpdateUserInput {
    email: String
    name: String
    preferences: JSON
    hashedPassword: String
    salt: String
  }
  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth(roles: ["userCreate"])
    updateUser(id: Int!, input: UpdateUserInput!): User @requireAuth(roles: ["updateUser", "admin"])
    deleteUser(id: Int!): User! @requireAuth(roles: ["manager", "admin"])
  }
`
