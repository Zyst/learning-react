import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {

  constructor(props) {
    super(props);

    const people = [];

    // We create 10 random people
    for (let i = 0; i < 10; i++) {
      people.push({
        name: chance.first(),
        country: chance.country({ full: true })
      });
    }

    this.state = { people };
  }

  buttonClicked() {
    const newState = {
      name: chance.first()
    };

    this.setState(newState);
  }

  render() {
    return (
      <div>
        <h1>
          Hello, people.
          Here's a list of all of you:
        </h1>



        <ul>
          { this.state.people.map((person, index) => (
            <li key={ index }>Person #{ index + 1 }: { person.name } from { person.country }</li>
          )) }
        </ul>
          
        <button
          onClick={this.buttonClicked.bind(this)}>
          Meet Someone New
        </button>

      </div>
    );
  }
}

export default Detail;
