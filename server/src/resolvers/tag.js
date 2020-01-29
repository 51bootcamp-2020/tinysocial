module.exports.Tag = {
  name: async ({id}, __, {dataSources}) => {
    const name = dataSources.tagAPI.getNameOfTag(id);
    return name;
  },
  events: async ({id}, __, {dataSources}) => {
    const eventIds = dataSources.tagAPI.getEventIdsOfTag(id);
    return eventIds;
  },
};
