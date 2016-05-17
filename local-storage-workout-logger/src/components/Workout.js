import React from 'react';
import AppActions from '../actions/AppActions';

class Workout extends React.Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  delete(e) {
    e.preventDefault();

    AppActions.deleteWorkout(this.props.workout.id);
  }

  render() {
    let miles = null;

    if (this.props.workout.miles !== 'N/A') {
      miles = ` | ${this.props.workout.miles} miles`;
    }

    return (
      <li className="list-group-item">
        {this.props.workout.type} - {this.props.workout.minutes} minutes {miles}
        <a onClick={this.delete} href="#" className="delete pull-right">
          <span className="glyphicon glyphicon-trash"></span>
        </a>
      </li>
    );
  }
}

Workout.propTypes = {
  workout: React.PropTypes.object,
};

export default Workout;
