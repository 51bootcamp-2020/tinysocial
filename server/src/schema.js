const {gql} = require('apollo-server');

const typeDefs = gql`
    scalar Date
    scalar DateTime

    type Query {
        # Returns certain size of events after the cursor
        # Reference:
        #  https://www.apollographql.com/docs/tutorial/resolvers/#paginated-queries 
        events(pageSize: Int, after: Int,
            eventFilter: EventFilter, eventSort: EventSort): EventConnection!
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

    input EventFilter {
        recommendation: Boolean, # User-based recommendation flag
        tags: [TagInput!]
        # TODO: range-based search
        # range: Float,
        # from: String 
    }
    
    input TagInput {
        name: String
    }
    
    enum EventSort {
        BEST_MATCH,
        NEWEST,
        MOST_MEMBERS,
        TIME_CLOSEST,
        
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
        age: Int # TODO: Calculate the age of the user from birthday
        # TODO: Split the address into
        # street address
        # additional street address
        # city
        # state
        # zip code
        address: String
        phone: String
        selfDescription: String
        hostedEvents: [Event]! # Events hosted by this user.
        participatedEvents: [Event]! # Events participated by this user.
        birthday: Date
        registrationDate: Date!
        profileImgUrl: String
        lastInterationTime: DateTime
    }

    interface Event {
        id: ID!
        host: User!
        thumbnailUrl: String
        creationTime: DateTime!
        # When the schedule of the event is updated,
        # lastUpdatedTime of the event also need to be updated.
        lastUpdatedTime: DateTime!
        schedule: [EventSchedule]!
        title: String!
        description: String!
        price: Float!
        # TODO(arin-kwak): Implement image uploading feature
        # image: Upload!
        tags: [Tag]!
        participants: [User]!
        maxParticipantNum: Int
    }
    
    type EventBookClub implements Event{
        id: ID!
        host: User!
        thumbnailUrl: String
        creationTime: DateTime!
        # When the schedule of the event is updated,
        # lastUpdatedTime of the event also need to be updated.
        lastUpdatedTime: DateTime!
        schedule: [EventSchedule]!
        title: String!
        description: String!
        price: Float!
        # TODO(arin-kwak): Implement image uploading feature
        # image: Upload!
        bookTitle: String!
        bookAuthor: String!
        bookDescription: String!
        bookISBN: Int!
        tags: [Tag]!
        participants: [User]!
        maxParticipantNum: Int
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

    # TODO(lsh9034): Implement EventConnection.
    # Reference:
    # https://www.apollographql.com/docs/tutorial/resolvers/#paginated-queries 
    type EventConnection {
        cursor: Int!
        events: [Event]!
    }

    type EventSchedule {
        id: ID!
        startDateTime: DateTime!
        endDateTime: DateTime!
        # TODO: Split the address into
#        country: String!
#        state: String!
#        city: String!
#        zip: String!
#        street: String!
#        additionalStreetAddress: String!
        address: String!
        latitude: Float!
        longitude: Float!
    }
`;

module.exports = typeDefs;
