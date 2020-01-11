import React from 'react';
import ApolloClient from '../components/ApolloClient';
import { gql } from '@apollo/client';

import Layout from '../components/Layout';

export default function About(props) {
  console.log(props);
  const content = (
    <div>
      <h1>About</h1>
    </div>
  );

  return <Layout content={content} />;
}

About.getInitialProps = async () => {
  const query = gql`
    {
      users {
        name
        age
      }
    }
  `;

  const users = await ApolloClient.query({ query });

  return users;
};
