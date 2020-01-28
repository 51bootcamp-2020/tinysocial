module.exports.Tag = {
  name: async ({id}, __, {dataSources}) => {
    const name = dataSources.tagAPI.getNameOfTag(id);
    return name;
  },
  events: async ({id}, __, {dataSources}) => {
    const events = dataSources.eventAPI.getEventsOfTag(id);
    return events;
  },
};
