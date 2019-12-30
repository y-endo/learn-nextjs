import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function ToDoItem(props) {
  return (
    <Link href="/detail/[id]" as={`/detail/${props.data.id}`}>
      <a>{props.data.text}</a>
    </Link>
  );
}

ToDoItem.propTypes = {
  data: PropTypes.object.isRequired
};
