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

const ME_QUERY = gql`
query getMyProfilePic {
  me {
    id
    profileImgUrl
  }
}
`;

const displayNavBar = (isPC, profilepic, loggedIn) => {
  if (isPC) return <NavBarPC profilepic={profilepic} loggedIn={loggedIn}/>;
  return <NavBarMobile profilepic={profilepic} loggedIn={loggedIn}/>;
};

function Navbar(props) {
  const isPC = isWidthUp('md', props.width);
  // When there is token, send me query to get profile pic.
  if (Cookies.get('token')) {
    return (
      <Query query={ME_QUERY}>
        {({loading, error, data}) => {
          if (loading) {
            return displayNavBar(isPC, undefined, true);
          }
          if (error) {
            // Remove cookie if query fails.
            Cookies.remove('token');
            return displayNavBar(isPC, undefined, false);
          }
          return displayNavBar(isPC, data.me.profileImgUrl, true);
        }}
      </Query>
    );
  }

  return displayNavBar(isPC, undefined, false);
}

export default withWidth()(Navbar);
