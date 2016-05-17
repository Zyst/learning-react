import React from 'react';

import AppActions from '../actions/AppActions';

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.selectOption = this.selectOption.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      showMiles: true,
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const workout = {
      id: this.generateId(),
      type: this.refs.type.value,
      minutes: this.refs.minutes.value.trim(),
      date: Date.now(),
    };

    workout.miles = this.state.showMiles ? this.refs.miles.value.trim() : 'N/A';

    AppActions.addWorkout(workout);
  }

  generateId() {
    let id = '';
    const possible = '0123456789';

    for (let i = 0; i < 8; i++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return id;
  }

  selectOption(e) {
    e.preventDefault();

    if (this.refs.type.value === 'Jogging' || this.refs.type.value === 'Elliptical') {
      this.setState({
        showMiles: true,
      });
    } else {
      this.setState({
        showMiles: false,
      });
    }

    this.refs.minutes.value = '';
    this.refs.miles.value = '';
  }

  render() {
    const miles = (
      <div className="form-group">
        <input type="text" className="form-control" ref="miles" placeholder="Miles" />
      </div>
    );

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <select
            className="form-control"
            onChange={this.selectOption}
            defaultValue="Jogging"
            ref="type"
          >
            <option value="Jogging">Jogging</option>
            <option value="Lifting">Lifting</option>
            <option value="Elliptical">Elliptical</option>
            <option value="Yoga">Yoga</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" ref="minutes" placeholder="Minutes" />
        </div>
        {this.state.showMiles ? miles : ''}
        <div className="form-group">
          <button type="submit" className="btn btn-default btn-block">
            Log Workout
          </button>
        </div>
      </form>
    );
  }
}

export default AddForm;
