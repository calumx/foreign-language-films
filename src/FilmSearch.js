import React from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';

class FilmSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            query: '',
            results: [],
            typed: false
        }
    }
         url = "https://api.themoviedb.org/3/search/movie?api_key=d1e40fddb73df31e61693cbf7ef094aa&query="
    
    getInfo = () => {
        axios.get(this.url + this.state.query + "&adult=false")
        .then(x => {
            const results = x.data.results;
            this.setState({results})
        })

    }

    handleInput() {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                    this.setState({typed: true});
                }
            } else if (!this.state.query) {
                this.setState({typed: false});
            }
        })
    }

    render() {

        return (
            <form>
                <input placeholder="Film name... "
                ref={input => this.search = input}
                onChange={this.handleInput} />
                {(this.state.query) ? <Suggestions results={this.state.results} typed={this.state.typed} updater={this.props.updater} />: <div />}
              </form>    
        )
    }
}

export default FilmSearch;