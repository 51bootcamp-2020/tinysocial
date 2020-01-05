const {ApolloServer} = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const {fakeAPI} = require("./utils");
const {createStore} = require("./utils");


console.log("Hello!!! Have a nice day");

const fakeDB = createStore();
const dataSources = () => ({
    fakeAPI: new fakeAPI({fakeDB})
});
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => new dataSources(),
    context: ({req}) => {
        // todo: serve user authentication infos like token, ...
        return {};
    }
});


server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});
