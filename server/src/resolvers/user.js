module.exports.User = {
  firstName: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getAttributeOfUser('firstName', id);
  },
  lastName: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getAttributeOfUser('lastName', id);
  },
  email: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getAttributeOfUser('email', id);
  },
  age: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getAgeOfUser(id);
  },
  address: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getAttributeOfUser('address', id);
  },
  phone: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getAttributeOfUser('phone', id);
  },
  selfDescription: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getAttributeOfUser('selfDescription', id);
  },
  hostedEvents: async ({id}, _, {dataSources}) => {
    return dataSources.eventAPI.getHostedEventIdsOfUser({userId: id});
  },
  participatedEvents: async ({id}, _, {dataSources}) => {
    return dataSources.eventAPI.getParticipatedEventIdsOfUser({userId: id});
  },
  birthday: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getAttributeOfUser('birthday', id);
  },
  registrationDate: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getAttributeOfUser('registrationDate', id);
  },
  profileImgUrl: async ({id}, _, {dataSources}) => {
    return dataSources.userAPI.getAttributeOfUser('profileImgUrl', id);
  },
};
