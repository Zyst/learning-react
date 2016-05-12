import React from 'react';
import AppStore from '../stores/AppStore';
import AppAPI from '../utils/AppAPI';

import AddNoteForm from './AddNoteForm';
import NoteList from './NoteList';

function getAppState() {
  return {
    notes: AppStore.getNotes(),
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = getAppState();
  }

  componentDidMount() {
    AppStore.addChangeListener(this.onChange.bind(this));

    AppAPI.getNotes();
  }

  onChange() {
    this.setState(getAppState());
  }

  componentUnmount() {
    AppStore.removeChangeListener(this.onChange.bind(this));
  }

  render() {
    return (
      <div>
        <div className="off-canvas-wrapper">
          <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
            <div
              className="off-canvas position-left reveal-for-large"
              data-off-canvas data-position="left"
            >
              <div className="row column">
                <br />
                <AddNoteForm />
              </div>
            </div>
            <div className="off-canvas-content" data-off-canvas-content>
              <NoteList notes={this.state.notes} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
