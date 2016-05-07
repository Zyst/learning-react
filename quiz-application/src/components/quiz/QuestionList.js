import React from 'react';

import Question from './Question';

class QuestionList extends React.Component {
  render() {
    return (
      <div className="questions">
        {
          this.props.questions.map(question => {
            if (question.id === this.props.current) {
              return <Question key={question.id} question={question} {...this.props} />;
            }
          })
        }
      </div>
    );
  }
}

export default QuestionList;
