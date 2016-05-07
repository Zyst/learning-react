import React from 'react';

import QuestionList from './quiz/QuestionList';
import Scorebox from './quiz/Scorebox';
import Results from './quiz/Results';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is the capital of Norway?',
          choices: [
            {
              id: 'a',
              text: 'Athens',
            },
            {
              id: 'b',
              text: 'Oslo',
            },
            {
              id: 'c',
              text: 'Stockholm',
            },
          ],
          correct: 'b',
        },

        {
          id: 2,
          text: 'Which is of the following is NOT a dog breed?',
          choices: [
            {
              id: 'a',
              text: 'Beagle',
            },
            {
              id: 'b',
              text: 'Husky',
            },
            {
              id: 'c',
              text: 'Devon Rex',
            },
          ],
          correct: 'c',
        },

        {
          id: 3,
          text: 'What is the airspeed velocity of an unladen swallow?',
          choices: [
            {
              id: 'a',
              text: '11 m/s',
            },
            {
              id: 'b',
              text: 'You wot mate?',
            },
            {
              id: 'c',
              text: 'What do you mean? African or European swallow?',
            },
          ],
          correct: 'c',
        },
      ],
      score: 0,
      current: 1,
    };
  }

  setCurrent(current) {
    this.setState({ current });
  }

  setScore(score) {
    this.setState({ score });
  }

  render() {
    let scorebox = '';

    if (this.state.current > this.state.questions.length) {
      scorebox = <Results {...this.state} />;
    } else {
      scorebox = <Scorebox {...this.state} />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Question list</h1>
            <div className="lead">A simple quiz application written in React.js</div>
            <hr />
            {scorebox}
            <QuestionList
              {...this.state}
              setCurrent={this.setCurrent.bind(this)}
              setScore={this.setScore.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
