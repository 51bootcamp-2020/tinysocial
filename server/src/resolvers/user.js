module.exports.User = {
  firstName: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getFirstNameOfUser(id);
  },
  lastName: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getLastNameOfUser(id);
  },
  email: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getEmailOfUser(id);
  },
  age: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getAgeOfUser(id);
  },
  address: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getAddressOfUser(id);
  },
  phone: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getPhoneOfUser(id);
  },
  selfDescription: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getSelfDescriptionOfUser(id);
  },
  hostedEvents: async ({id}, _, {dataSources}) => {
    return dataSources.eventAPI.getHostedEventIdsOfUser({userId: id});
  },
  participatedEvents: async ({id}, _, {dataSources}) => {
    return dataSources.eventAPI.getParticipatedEventIdsOfUser({userId: id});
  },
  birthday: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getBirthdayOfUser({userId: id});
  },
  registrationDate: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getRegistrationDateOfUser({userId: id});
  },
  profileImgUrl: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getProfileImgUrlOfUser({userId: id});
  },
};
