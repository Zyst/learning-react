import React from 'react';

import AddForm from './AddForm';
import AppStore from '../stores/AppStore';
import ContactList from './ContactList';
import EditForm from './EditForm';
import AppAPI from '../utils/AppAPI';

function getAppState() {
  return {
    contacts: AppStore.getContacts(),
    contactToEdit: AppStore.getContactToEdit(),
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = getAppState();
  }

  componentDidMount() {
    AppStore.addChangeListener(this.onChange.bind(this));

    AppAPI.getContacts();
  }

  onChange() {
    this.setState(getAppState());
  }

  componentUnmount() {
    AppStore.removeChangeListener(this.onChange.bind(this));
  }

  render() {
    let form = '';

    if (this.state.contactToEdit === '') {
      form = <AddForm />;
    } else {
      form = <EditForm contactToEdit={this.state.contactToEdit} />;
    }

    return (
      <div>
        {form}
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
