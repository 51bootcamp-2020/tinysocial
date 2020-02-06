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

class EmailValidation extends Component {
  constructor(props) {
    super(props);

    const token = queryString.parse(this.props.location.search, {ignoreQueryPrefix: true}).token;

    this.state = {
      token: token,
      verifyResult: null,
    };
  }

  verifyEmail() {
    return (<Mutation mutation={EMAIL_VALIDATE_QUERY}
      variables={{token: this.state.token}}
      onCompleted={(data) => {
        this.setState({
          verifyResult: data.emailValidate.success,
        });
      }}
      onError={
        (error)=>{
        }
      }>
      {(mutate, { data, called }) => {
        if (!called) {
          mutate();
        }

        return <div>
          {this.state.verifyResult === null ? 'Loading...' : (
              this.state.verifyResult ? 'Email Verified' : 'Fail to verify')}
        </div>;
      }
      }
    </Mutation>);
  }

  render() {
    return (
      <div>
        {this.verifyEmail()}
      </div>);
  }
}

EmailValidation.propTypes = {};

export default withRouter(EmailValidation);

