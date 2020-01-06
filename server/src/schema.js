const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        events(pageSize: Int, after: String): EventConnection!
        event(id: ID!): Event

        # user information about the user currently logged in
        me: User
        user(id: ID!): User
    }

    type Mutation {
        authGoogle(accessToken: AuthInput!): AuthResponse
        authFacebook(accessToken: AuthInput!): AuthResponse
        logout: Boolean! # success, then True.  
    }

    type AuthResponse {
        token: String
        name: String
    }
    input AuthInput {
        accessToken: String!
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        age: Int
        sex: Sex
        city: String
        state: String
        phone: String
    }

    type Event {
        id: ID!
        host: User!
        schedule: 
        title: String!
        description: String!
        price: Float!
        # image: Upload!  not implemented in V0
        maxParticipants: Int!
        tags: [Tag]!
    }

    enum Sex {
        MAN
        WOMAN
        ETC # ?!?!?!
    }

    type Tag {
        id: ID!
        name: String!
    }

    type EventConnection {
        cursor: String!
        hasMore: Boolean!
        events: [Event]!
    }
`;

module.exports = typeDefs;
