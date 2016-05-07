import React from 'react';

class Results extends React.Component {
  render() {
    const percent = (this.props.score / this.props.questions.length * 100).toFixed(2);
    let message = '';

    if (percent >= 80) {
      message = 'Awesome job!';
    } else if (percent > 60) {
      message = 'You did alright';
    } else {
      message = 'You failed!';
    }

    return (
      <div className="well">
        <h4>You got {this.props.score} out of {this.props.questions.length} questions correctly.</h4>
        <h1>{percent}% - {message}</h1>
        <hr />
        <a className="btn btn-primary btn-lg center-block" href="/">Try again!</a>
      </div>
    );

  }
}

export default Results;
