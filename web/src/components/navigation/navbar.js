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
    profileImgUrl
  }
}
`;

function Navbar(props) {
  if (isWidthUp('md', props.width)) {
    return (
      <Query query={ME_QUERY}>
        {({loading, error, data}) => {
          if (loading) {
            return <NavBarPC error={true}/>;
          }
          if (error) {
            console.log('error:', error.message);
            return <NavBarPC error={true}/>;
          }
          console.log(data);
          return (
            <NavBarPC profilepic={data.me.profileImgUrl} error={false}/>
          );
        }}
      </Query>
    );
  }
  return (
    <Query query={ME_QUERY}>
      {({loading, error, data}) => {
        if (loading) return <NavBarMobile error={true}/>;
        if (error) {
          console.log(error.message);
          return <NavBarMobile error={true}/>;
        }
        return (
          <NavBarMobile profilepic={data.me.profileImgUrl} error={false}/>
        );
      }}
    </Query>
  );
}

export default withWidth()(Navbar);
