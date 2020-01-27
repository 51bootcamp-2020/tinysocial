const {errorMessages} = require('../errorMessages')

module.exports.EventSchedule = {
  startDateTime: async (eventSchedule, __, {dataSources}) => {
    const startDateTime = await dataSources.eventAPI.getStartDateTimeOfEventSchedule(eventSchedule.id);
    return startDateTime;
  },
  endDateTime: async (eventSchedule, __, {dataSources}) => {
    const endDateTime = await dataSources.eventAPI.getEndDateTimeOfEventSchedule(eventSchedule.id);
    return endDateTime;
  },
  address: async (eventSchedule, __, {dataSources}) => {
    const address = await dataSources.eventAPI.getAddressOfEventSchedule(eventSchedule.id);
    return address;
  },
  latitude: async (eventSchedule, __, {dataSources}) => {
    const latitude = await dataSources.eventAPI.getLatitudeOfEventSchedule(eventSchedule.id);
    return latitude;
  },
  longitude: async (eventSchedule, __, {dataSources}) => {
    const longitude = await dataSources.eventAPI.getLongitudeOfEventSchedule(eventSchedule.id);
    return longitude;
  },
};
