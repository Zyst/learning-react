import React from 'react';
import AppStore from '../stores/AppStore';
import AppActions from '../actions/AppActions';
import AppAPI from '../utils/AppAPI';

import AddForm from './AddForm';
import Workouts from './Workouts';

function getAppState() {
  return {
    showForm: AppStore.getShowForm(),
    workouts: AppStore.getWorkouts(),
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onShowFormClick = this.onShowFormClick.bind(this);

    this.state = getAppState();
  }

  componentDidMount() {
    AppStore.addChangeListener(this.onChange);

    AppAPI.getWorkouts();
  }

  onShowFormClick(e) {
    e.preventDefault();

    AppActions.showForm();
  }

  onChange() {
    this.setState(getAppState());
  }

  componentUnmount() {
    AppStore.removeChangeListener(this.onChange);
  }

  render() {
    let form = '';

    if (this.state.showForm) {
      form = <AddForm />;
    }

    return (
      <div>
        <div>
          <h1 className="text-center page-header">
            WorkoutLogger
          </h1>
          <a onClick={this.onShowFormClick} href="#" className="btn btn-primary btn-block">
            Add Workout
          </a>
        </div>
        <hr />
        <div>
          {form}
        </div>
        <div>
          <Workouts workouts={this.state.workouts} />
        </div>
      </div>
    );
  }
}

export default App;
