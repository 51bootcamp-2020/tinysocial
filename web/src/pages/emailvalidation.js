import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {Mutation} from 'react-apollo';
import {withRouter} from 'react-router-dom';

const queryString = require('query-string');

/* Query sending user Information to server */
const EMAIL_VALIDATE_QUERY = gql`
  mutation ($token: String!){
    emailValidate(token: $token){
      success
      message
      token
      user{
        firstName
        lastName
      }
    }
  }`;

// eslint-disable-next-line require-jsdoc
class EmailValidation extends Component {
  constructor(props) {
    super(props);

    const token = queryString.parse(this.props.location.search, {ignoreQueryPrefix: true}).token;
    console.log('token:', token);

    this.state = {
      token: token,
    };
  }

  render() {
    return (
      <div>
        <Mutation mutation={EMAIL_VALIDATE_QUERY}
          variables={{token: this.state.token}}
          onCompleted={
            (data)=>{
              // data.signInWithGoogle.token);
            }}
          onError={
            (error)=>{
              // TODO(Hyejin): Implement query error processing
            }
          }>
          {(execute_mutation) => {
            {/* Google Login Button */}
            return (
              <button
                onClick={execute_mutation} // Our client ID
              />
            );
          }
          }
        </Mutation>
      </div>);
  }
}

EmailValidation.propTypes = {};

export default withRouter(EmailValidation);

