import React, {Component} from 'react';
import {Container} from '@material-ui/core';
import {gql} from 'apollo-boost';
import {Mutation} from 'react-apollo';
import ParticipateSuccess from '../components/participate-success';
import ParticipateFail from '../components/participate-fail';
import {withRouter} from 'react-router-dom';

// Todo(Myoung-hee): Redirect to error page when error occured.
// Join event mutation for mutate the event-user participate.
const JOINEVENT_QUERY = gql`
  mutation ($eventId: String!, $orderId: String!){
    joinEvent (eventId: $eventId, orderId: $orderId)
  }`;

const containerStyle = {
  height: '500px',
  marginTop: '80px',
};

// Join Event page component.
class JoinEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      participateResult: false,
    };
  }

  // Redirect to participate success page when after mutation success.
  redirectJoinSuccess() {
    return <div>
      {this.state.participateResult === null ? 'Loading...' : (
          this.state.participateResult ?
              <ParticipateSuccess price={this.props.location.state.price}/> :
              <ParticipateFail/>)}
    </div>;
  }

  // Request mustation for join event.
  saveJoinEvent() {
    return (<Mutation mutation={JOINEVENT_QUERY}
                      variables={{
                        eventId: this.props.location.state.eventId,
                        orderId: this.props.location.state.orderId,
                      }}
                      onCompleted={(data) => {
                        console.log(data);
                        this.setState({
                          participateResult: data.joinEvent,
                        });
                      }}
                      onError={
                        (error) => {
                          console.log('error: ', error);
                        }
                      }>
      {(mutate, {data, called}) => {
        if (!called) {
          console.log('sent');
          mutate();
        }
        return this.redirectJoinSuccess();
      }
      }
    </Mutation>);
  }

  render() {
    return (
        <Container maxWidth='sm' style={containerStyle}>
          {this.saveJoinEvent()}
        </Container>
    );
  }
}

export default withRouter(JoinEvent);
