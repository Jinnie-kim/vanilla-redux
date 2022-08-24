import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function ToDo({ text, onButtonClick }) {
  return (
    <li>
      {text}
      <button onClick={onButtonClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onButtonClick: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
