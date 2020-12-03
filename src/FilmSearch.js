import React from 'react';
import Suggestions from './Suggestions';

class FilmSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      query: '',
      results: [],
      typed: false,
    };
  }

  getInfo = () => {
    //Send GET request to TMDB search function with "&query=" + this.state.query
    //Set state "results" to the return, e.g. res.data.results
    //Rendering is handled by the "Suggestions" component
  };

  handleInput() {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
            this.setState({ typed: true });
          }
        } else if (!this.state.query) {
          this.setState({ typed: false });
        }
      }
    );
  }

  render() {
    return (
      <>
        <form>
          <input
            placeholder="Film name... "
            ref={(input) => (this.search = input)}
            onChange={this.handleInput}
          />
          {this.state.query ? (
            <Suggestions
              results={this.state.results}
              typed={this.state.typed}
              updater={this.props.updater}
            />
          ) : (
            <div />
          )}
        </form>
      </>
    );
  }
}

export default FilmSearch;
