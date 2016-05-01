import React from 'react';
import ajax from 'superagent';

class Detail extends React.Component {

  constructor(props) {
    super(props);

    this.state = { commits: [] };
  }

  componentWillMount() {
    ajax.get('https://api.github.com/repos/facebook/react/commits')
      .end((error, response) => {
        if(!error && response) {
          this.setState({ commits: response.body });
        } else {
          console.log('There was an error fetching from Github.');
        }
      });
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
        <h2>
          If <a href="http://motherfuckingwebsite.com/">Motherfucking website</a> is to be believed,
          this is the ultimate aesthetic. Not me being lazy.
        </h2>
        { this.state.commits.map((commit, index) => (
          <p key={index}>
            <strong>{ commit.author ? commit.author.login : 'Anonymous' }</strong>
            <br/>
            <a href={ commit.html_url }>{ commit.commit.message }</a>
          </p>
        ))}
      </div>
    );
  }
}

export default Detail;
