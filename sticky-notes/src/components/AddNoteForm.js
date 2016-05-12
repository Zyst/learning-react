import React from 'react';

import AppActions from '../actions/AppActions';

class AddNoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const note = {
      text: this.refs.text.value.trim(),
    };

    // Reset text field
    this.refs.text.value = '';

    AppActions.addNote(note);
  }

  render() {
    return (
      <div>
        <h5>Add a note</h5>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="large-12 columns">
              <label htmlFor="">
                Note Text
                <input type="text" ref="text" placeholder="Enter Text..." />
              </label>
              <button type="submit" className="button">Add</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNoteForm;
