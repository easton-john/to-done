import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Note extends Component {
  
  static propTypes = {
    note: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired
  };

  render() {
    const { note, onEdit } = this.props;

    return (
      <Fragment>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <p>Completed: {note.completed ? 'yes' : 'no' }</p>
        <button name="edit" onClick={onEdit}>Edit</button>
      </Fragment>
    );
  }
}

export default Note;