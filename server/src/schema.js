const {gql} = require('apollo-server');

const typeDefs = gql`
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
        myEvents(info: String!): [Event]
        userReviews(userId: Int, eventId: Int): Review
        tagNames(pageSize: Int, after: Int): TagConnection!
    }
    type Review {
        eventId: ID!
        userId: ID!
        title: String!
        content: String!
        author: User!
        isPublic: Boolean!
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
        # Default Sign Up / Sign In
        signUp(
            email: String!
            firstName: String!
            lastName: String!
            pw: String!
            repw: String!
        ): AuthResponse!
        signIn(
            email: String!
            pw: String!
        ): AuthResponse!
        # Email Vlidation
        emailValidate(
            token: String!
        ): AuthResponse!
        # If successful, then return True.  
        logOut: Boolean!
        createOrModifyReview(
            eventId: Int!
            title: String!
            content: String!
            isPublic: Boolean!
        ): Review!
    }

    input EventFilter {
        recommendation: Boolean, # User-based recommendation flag
        tagIds: [Int!]
        # TODO(yun-kwak): range-based search
        # range: Float,
        # from: String 
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
        age: Int # TODO(yun-kwak): Calculate the age of the user from birthday
        # TODO(yun-kwak): Split the address into city, state, zip, street,
        # additional street addres
        address: String
        phone: String
        selfDescription: String
        hostedEvents: [Event]! # Events hosted by this user.
        participatedEvents: [Event]! # Events participated by this user.
        birthday: DateTime
        registrationDate: DateTime!
        profileImgUrl: String
        lastInterationTime: DateTime
    }

    interface Event {
        id: ID!
        host: User!
        thumbnailUrl: String
        creationTime: DateTime!
        # When the schedule of the event is updated, lastUpdatedTime of the
        # event also need to be updated.
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
        reviews: [Review]
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
        bookImageUrl: String!
        bookTitle: String!
        bookAuthor: String!
        bookDescription: String!
        bookISBN: Int!
        tags: [Tag]!
        participants: [User]!
        maxParticipantNum: Int
        reviews: [Review]
    }

    # Every event can have multiple tags. Tags are predefined by ours(developers)
    # and used by the event host to categorize his event. So we are able to
    # categorize events by tags.
    type Tag {
        id: ID!
        name: String!
        events: [Event]!
    }
    type TagConnection {
        cursor: Int!
        tags: [Tag]!
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
        # TODO(yun-kwak): Split the address into country, state, city, zip, 
        # street, additionalStreetAdress
        address: String!
        latitude: Float!
        longitude: Float!
    }
`;

module.exports = typeDefs;
