module.exports.EventSchedule = {
  startDateTime: async (eventSchedule, __, {dataSources}) => {
    const startDateTime = dataSources.eventAPI.getStartDateTimeOfEventSchedule(eventSchedule.id);
    return startDateTime;
  },
  endDateTime: async (eventSchedule, __, {dataSources}) => {
    const endDateTime = dataSources.eventAPI.getEndDateTimeOfEventSchedule(eventSchedule.id);
    return endDateTime;
  },
  address: async (eventSchedule, __, {dataSources}) => {
    const address = dataSources.eventAPI.getAddressOfEventSchedule(eventSchedule.id);
    return address;
  },
  latitude: async (eventSchedule, __, {dataSources}) => {
    const latitude = dataSources.eventAPI.getLatitudeOfEventSchedule(eventSchedule.id);
    return latitude;
  },
  longitude: async (eventSchedule, __, {dataSources}) => {
    const longitude = dataSources.eventAPI.getLongitudeOfEventSchedule(eventSchedule.id);
    return longitude;
  },
};
