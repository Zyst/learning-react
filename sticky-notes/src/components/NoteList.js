import React from 'react';

import Note from './Note';

class NoteList extends React.Component {
  render() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        {this.props.notes.map((note, index) => <Note note={note} key={index} />)}
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: React.PropTypes.array,
};

export default NoteList;
