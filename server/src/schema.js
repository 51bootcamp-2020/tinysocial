const {gql} = require('apollo-server');

const typeDefs = gql`
    scalar Date
    scalar DateTime

    type Query {
        # Returns certain size of events after the cursor
        # Reference:
        #  https://www.apollographql.com/docs/tutorial/resolvers/#paginated-queries 
        events(pageSize: Int, after: String): EventConnection!
        # Return specific event whose id is 'id'.
        # If not exist, return null
        event(id: ID!): Event
        # Return the user currently logged in
        me: User
        # Return the user whose id is 'id'.
        # If not exist, return null
        user(id: ID!): User
    }

    type Mutation {
        signInWithGoogle(googleId: String!): AuthResponse!
        signUpWithGoogle(
            googleId: String!
            email: String!
            firstName: String!
            lastName: String!
            profileImgUrl: String
        ): AuthResponse!
        # If successful, then return True.  
        logout: Boolean!
    }

    type AuthResponse {
        success: Boolean!
        # Contains error message, if not successful
        message: String
        # If not successful, these fields are null. 
        token: String
        user: User
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
        creationTime: DateTime!
        profileImgUrl: String
    }

    type Event {
        id: ID!
        host: User!
        creationTime: DateTime!
        # When the schedule of the event is updated,
        # lastUpdatedTime of the event also need to be updated.
        lastUpdatedTime: DateTime!
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
    # Reference:
    # https://www.apollographql.com/docs/tutorial/resolvers/#paginated-queries 
    type EventConnection {
        cursor: String!
        hasMore: Boolean!
        events: [Event]!
    }

    type EventSchedule {
        id: ID!
        start: DateTime!
        end: DateTime!
        country: String!
        state: String!
        city: String!
        zip: String!
        street: String!
        additionalAddress: String!
        latitude: String!
        longtitude: String!
    }
`;

module.exports = typeDefs;
