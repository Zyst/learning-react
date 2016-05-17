import React from 'react';

import Workout from './Workout';

class Workouts extends React.Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.workouts.map((workout, index) =>
          <Workout workout={workout} key={index} />)}
      </ul>
    );
  }
}

Workouts.propTypes = {
  workouts: React.PropTypes.array,
};

export default Workouts;
