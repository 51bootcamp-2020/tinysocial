module.exports.EventSchedule = {
  startDateTime: async ({id}, __, {dataSources}) => {
    const startDateTime = dataSources.eventAPI.getAttributeOfSchedule(
        'startDateTime',
        id,
    );
    return startDateTime;
  },
  endDateTime: async ({id}, __, {dataSources}) => {
    const endDateTime = dataSources.eventAPI.getAttributeOfSchedule(
        'endDateTime',
        id,
    );
    return endDateTime;
  },
  address: async ({id}, __, {dataSources}) => {
    const address = dataSources.eventAPI.getAttributeOfSchedule('address', id);
    return address;
  },
  latitude: async ({id}, __, {dataSources}) => {
    const latitude = dataSources.eventAPI.getAttributeOfSchedule(
        'latitude',
        id,
    );
    return latitude;
  },
  longitude: async ({id}, __, {dataSources}) => {
    const longitude = dataSources.eventAPI.getAttributeOfSchedule(
        'longitude',
        id,
    );
    return longitude;
  },
  city: async ({id}, __, {dataSources}) => {
    let address = await dataSources.eventAPI.getAttributeOfSchedule('address', id);
    address = address.replace(/\s+/g, '');
    const city = address.split(',')[2];
    return city;
  },
  state: async ({id}, __, {dataSources}) => {
    let address = await dataSources.eventAPI.getAttributeOfSchedule('address', id);
    address = address.replace(/\s+/g, '');
    const state = address.split(',')[3];
    return state;
  },
};
