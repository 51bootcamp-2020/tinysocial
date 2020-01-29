module.exports.Event = {
  async __resolveType({id}, {dataSources}) {
    const type = await dataSources.eventAPI.getTypeOfEvent(id);
    if (type === 0) {
      return 'EventBookClub';
    }
    throw new Error('Data cannot be resolved to any Event type. Please contact to backend developers.');
  },
};
