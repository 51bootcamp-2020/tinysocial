const {gql} = require('apollo-server');

const typeDefs = gql`
    scalar Date
    scalar DateTime
    
    type Query {
        events(pageSize: Int, after: String): EventConnection
        event(id: ID!): Event # Return specific event whose id is 'id'.
        # user information about the user currently logged in
        me: User
        user(id: ID!): User
    }

    type Mutation {
        signInWithGoogle(googleId: String): AuthResponse
        signUpWithGoogle(googleId: String,
            email: String, firstName: String, lastName: String): AuthResponse
        logout: Boolean! # success, then True.  
    }

    type AuthResponse {
        token: String!
        name: String!
    }
    
    type User {
        id: ID!
        firstName: String!
        lastName: String!
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

    # TODO(arin-kwak): Implement EventConnection.
    #  Reference:
    #  https://www.apollographql.com/docs/tutorial/resolvers/#paginated-queries 
    type EventConnection {
        cursor: String!
        hasMore: Boolean!
        events: [Event]!
    }
    
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
