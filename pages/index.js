import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import ToDoItem from '../components/ToDoItem';

export default function Index(props) {
  console.log(props);
  const items = props.todos.map(todo => {
    return <ToDoItem key={todo.id} data={todo} />;
  });
  const content = (
    <>
      <div>
        <h1>TODO</h1>
        {items}
      </div>
      <style jsx>{`
        h1 {
          font-size: 20px;
        }
      `}</style>
    </>
  );

  return <Layout content={content} />;
}

Index.getInitialProps = async () => {
  const response = await fetch('http://localhost:3001/api/apollo', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ query: '{ users { name } }' })
  });
  const users = await response.json();
  return {
    todos: [
      {
        id: 1,
        text: 'テキスト1',
        isComplete: false
      },
      {
        id: 2,
        text: 'テキスト2',
        isComplete: false
      },
      {
        id: 3,
        text: 'テキスト3',
        isComplete: false
      }
    ],
    users
  };
};

Index.propTypes = {
  todos: PropTypes.array.isRequired,
  users: PropTypes.object
};
