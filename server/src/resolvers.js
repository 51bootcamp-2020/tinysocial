module.exports = {
    Query: {
        events: (_, __, {dataSources}) => {
            return dataSources.fakeAPI.getAllEvents();
        },
        event: (_, {id}, {dataSources}) => {

        },
        me: (_, __, {dataSources}) => {
        }
    }
};