module.exports.EventSchedule = {
  startDateTime: async ({id}, __, {dataSources}) => {
    const startDateTime = dataSources.eventAPI.getStartDateTimeOfEventSchedule(id);
    return startDateTime;
  },
  endDateTime: async ({id}, __, {dataSources}) => {
    const endDateTime = dataSources.eventAPI.getEndDateTimeOfEventSchedule(id);
    return endDateTime;
  },
  address: async ({id}, __, {dataSources}) => {
    const address = dataSources.eventAPI.getAddressOfEventSchedule(id);
    return address;
  },
  latitude: async ({id}, __, {dataSources}) => {
    const latitude = dataSources.eventAPI.getLatitudeOfEventSchedule(id);
    return latitude;
  },
  longitude: async ({id}, __, {dataSources}) => {
    const longitude = dataSources.eventAPI.getLongitudeOfEventSchedule(id);
    return longitude;
  },
};
