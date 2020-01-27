module.exports.Tag = {
  name: async ({id}, __, {dataSources}) => {
    const name = dataSources.tagAPI.getNameOfTag(id);
    return name;
  },
  events: async ({id}, __, {dataSources}) => {
    const events = dataSources.tagAPI.getEventsOfTag(id);
    return events;
  },
};
