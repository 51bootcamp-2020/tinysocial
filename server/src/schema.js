const {gql} = require('apollo-server');

const typeDefs = gql`
  scalar Date
  scalar DateTime

  type Query {
    # Returns certain size of events after the cursor
    # Reference:
    #  https://www.apollographql.com/docs/tutorial/resolvers/#paginated-queries
    events(pageSize: Int, after: Int): EventConnection!
    # Return specific event whose id is 'id'.
    # If not exist, return null
    event(id: ID!): Event
    # Return the user currently logged in
    me: User
    # Return the user whose id is 'id'.
    # If not exist, return null
    user(id: ID!): User
    upcomingEvents(userId: Int): [Event]
    pastEvents(userId: Int): [Event]
    getUserReviews(userId: Int, eventId: Int): Review
  }
  
  type Review {
      title: String!
      content: String!
      author: User!
      isPublic: Boolean!
      event: Event
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
    createReview(
      userId: Int!
      eventId: Int!
      title: String!
      content: String!
      isPublic: Boolean!
    ): Boolean!
    modifyReview(
      userId: Int!
      eventId: Int!
      title: String!
      content: String!
      isPublic: Boolean!
    ): Boolean!
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
    zip: String
    additionalAddress: String
    phone: String
    hostedEvents: [Event]!
    participatedEvents: [Event]!
    birthday: Date
    registrationDate: Date!
    profileImgUrl: String
    lastInterationTime: DateTime
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
    cursor: Int!
    events: [Event]!
  }

  type EventSchedule {
    id: ID!
    startDateTime: DateTime!
    endDateTime: DateTime!
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
