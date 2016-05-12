import React from 'react';

class Result extends React.Component {
  render() {
    return (
      <div>
        <p className="content-lead" dangerouslySetInnerHTML={{__html: this.props.result.Result}}>

        </p>
        <hr />
      </div>
    );
  }
}

Result.propTypes = {
  result: React.PropTypes.object,
};

export default Result;
