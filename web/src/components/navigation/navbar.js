import Cookies from 'js-cookie';
import {
  isWidthUp,
  withWidth,
} from '@material-ui/core';
import {gql} from 'apollo-boost';
import NavBarMobile from './navbarmobile';
import NavBarPC from './navbarpc';
import {Query} from 'react-apollo';
import React from 'react';
import {Redirect} from 'react-router-dom';

const ME_QUERY = gql`
query getMyProfilePic {
  me {
    profileImgUrl
  }
}
`;

function Navbar(props) {
  if (isWidthUp('md', props.width)) {
    // When there is token, send me query to get profile pic.
    if (Cookies.get('token')) {
      return (
        <Query query={ME_QUERY}>
          {({loading, error, data}) => {
            if (loading) {
              return <NavBarPC loggedIn={true}/>;
            }
            if (error) {
              // Remove cookie if query fails.
              Cookies.remove('token');
              return <NavBarPC loggedIn={false}/>;
            }
            return (
              <NavBarPC profilepic={data.me.profileImgUrl} loggedIn={true}/>
            );
          }}
        </Query>
      );
    }

    return <NavBarPC loggedIn={false}/>;
  }
  // When there is token, send me query to get profile pic.
  if (Cookies.get('token')) {
    return (
      <Query query={ME_QUERY}>
        {({loading, error, data}) => {
          if (loading) {
            return <NavBarMobile loggedIn={true}/>;
          }
          if (error) {
            // Remove cookie if query fails.
            Cookies.remove('token');
            return <NavBarMobile loggedIn={false}/>;
          }
          return (
            <NavBarMobile profilepic={data.me.profileImgUrl} loggedIn={true}/>
          );
        }}
      </Query>
    );
  }

  return <NavBarMobile loggedIn={false}/>;
}

export default withWidth()(Navbar);
