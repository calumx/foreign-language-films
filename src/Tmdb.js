import React from 'react';
import axios from  'axios';
import "./custom.css"
import FilmInfo from './FilmInfo';
import Recommend from './Recommend';
import AddFilm from './AddFilm';

export default class Tmdb extends React.Component {

    constructor(props) {
        super(props);
        this.refresher = this.refresher.bind(this);
    }

    i = 2;
    apiData =[];

    url = 'https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key=d1e40fddb73df31e61693cbf7ef094aa&session_id=d38ef9ba5672c0c9660f9bdd47b123bf609c2a13';

    state = {
        foreignFilms: [],
        englishFilms: [],
        percentage: 0,
    };

    getAllPages() {
        axios.get(this.url + "&page=" + this.i)
             .then(x => {
             this.apiData.push(...x.data.results);
             this.i++;
             if (this.i <= x.data.total_pages) {this.getAllPages()}
             else this.organiseData();
             })
    }

    componentDidMount() {

        axios.get(this.url)
        .then(x => {
            this.apiData.push(...x.data.results);
            if (this.i <= x.data.total_pages) { this.getAllPages() }
        })
    }

    refresher = () => {
        axios.get(this.url + "&sort_by=created_at.desc")
        .then(x => {
            this.apiData.push(x.data.results[0]);
            this.organiseData();
        })
    }

    organiseData() {
            let foreignFilms = this.apiData.filter (z => z.original_language !== "en");
            let englishFilms = this.apiData.filter (eng => eng.original_language == "en");
            let percentage = (foreignFilms.length/this.apiData.length) * 100;
            if (!Number.isInteger(percentage)) { percentage = percentage.toFixed(2) };
            this.setState({foreignFilms, englishFilms, percentage});
    }

    render() { 
        return (
        <div>
            <FilmInfo foreign={this.state.foreignFilms} english={this.state.englishFilms} percentage={this.state.percentage} />
            <br />
            <div className="buttons"><Recommend /><AddFilm updater={this.refresher} /></div>

        </div>
        ) 
    }
}

