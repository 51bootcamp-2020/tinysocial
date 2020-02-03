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
          console.log(data);
          if (loading || error) return <NavBarPC/>;
          return (
            <NavBarPC profilepic={data.me.profileImgUrl}/>
          );
        }}
      </Query>
    );
  }
  return (
    <Query query={ME_QUERY}>
      {({loading, error, data}) => {
        if (loading || error) return <NavBarMobile/>;
        return (
          <NavBarMobile profilepic={data.me.profileImgUrl}/>
        );
      }}
    </Query>
  );
}

export default withWidth()(Navbar);
