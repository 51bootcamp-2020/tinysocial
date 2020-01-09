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

    scalar Date

    type User {
        id: ID!
        firstName: String!
        lastName: String # last name is optional
        email: String!
        age: Int
        city: String
        state: String
        phone: String
        hostedEvents: [Event]!
        participatedEvents: [Event]!
        birthday: Date
        createdAt: DateTime!
    }

    type Event {
        id: ID!
        host: User!
        createdAt: DateTime!
        updatedAt: DateTime!
        schedule: [EventSchedule]!
        title: String!
        description: String!
        price: Float!
        # image: Upload!
        # TODO(arin-kwak): Implement image uploading feature
        maxParticipants: Int!
        tags: [Tag]!
        participants: [User]!
    }
    # Every event can have multiple tags.
    # Tags are predefined by ours(developers)
    # and used by the event host to categorize his event.
    # So we are able to categorize events by tags.
    type Tag {
        id: ID!
        name: String!
        events: [Event]!
    }

    type EventConnection {
        cursor: String!
        hasMore: Boolean!
        events: [Event]!
    }

    scalar DateTime

    type EventSchedule {
        id: ID!
        start: DateTime!
        end: DateTime!
        locationLatitude: Float!
        locationLongitude: Float!
        city: String!
        state: String!
    }
`;

module.exports = typeDefs;
