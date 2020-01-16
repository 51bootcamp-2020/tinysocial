const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const {mainAPI} = require('./utils');
const {createStore} = require('./database');
const jwt = require('jsonwebtoken');

const store = createStore();

const dataSources = () => ({
  mainAPI: new mainAPI(store),
});

const APP_SECRET = process.env.SECRET || "1234567890";

const context = async ({req})=>{
  if(!req.headers.authorization) return {userId:null};
  try{
    const token = req.headers.authorization;
    const userId = jwt.verify(token,APP_SECRET);
    return {userId};
  }catch(e){
    return{userId:null};
  }
}
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: context
});

if (process.env.NODE_ENV !== 'test') {
  server.listen({port: 15780}).
      then(({url}) => console.log(`Server running at at ${url}`));
}
