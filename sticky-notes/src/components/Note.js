import React from 'react';
import AppActions from '../actions/AppActions';

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.removeNote = this.removeNote.bind(this);
  }

  removeNote() {
    AppActions.removeNote(this.props.note._id.$oid);
  }

  render() {
    return (
      <div className="column">
        <div className="note" onDoubleClick={this.removeNote}>
          <p>
            {this.props.note.text}
          </p>
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  note: React.PropTypes.object,
};

export default Note;
