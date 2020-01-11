import React, {Component} from 'react';
import LoginForm from '../components/login-form'
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "http://localhost:15780"
});

class signin extends Component{
    render(){
        return (
            <div>
                <LoginForm client={client}/>
            </div>
        )
    };
}

export default signin;
