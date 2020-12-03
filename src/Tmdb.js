import React from 'react';
import './custom.css';
import FilmInfo from './FilmInfo';
import Recommend from './Recommend';
import AddFilm from './AddFilm';

export default class Tmdb extends React.Component {
  constructor(props) {
    super(props);
    this.refresher = this.refresher.bind(this);
  }

  pageNum = 2;
  apiData = [];

  state = {
    foreignFilms: [],
    englishFilms: [],
    percentage: 0,
  };

  getAllPages() {
    //Make GET request to your watchlist and append "?page=" + this.pageNum
    //Spread results into apiData eg. this.apiData.push(...res.data.results)
    //Increment this.pageNum
    //if (this.pageNum <= res.data.total_pages) i.e. if there are still more pages to get then
    //this.getAllPages() - call function again to get the other pages
    //else this.organiseData() - prepare data for render.
  }

  componentDidMount() {
    //Make GET request to your watchlist then
    //Spread results into apiData eg. this.apiData.push(...res.data.results)
    //if (this.pageNum <== res.data.total_pages) i.e. if your watchlist is spread across multiple pages then
    //this.getAllPages() - call function to get the other pages
    //else this.organiseData() - prepare data for render.
  }

  refresher = () => {
    //Make GET request to your watchlist and append "?sort_by=created_at.desc"
    //This ensures most recently added film will be the first entry.
    //So push it into apiData e.g. this.apiData.push(res.data.results[0])
    //Call this.organiseData() - prepare data for render.
  };

  organiseData() {
    let foreignFilms = this.apiData.filter(
      (film) => film.original_language !== 'en'
    );
    let englishFilms = this.apiData.filter(
      (eng) => eng.original_language === 'en'
    );
    let percentage = (foreignFilms.length / this.apiData.length) * 100;
    if (!Number.isInteger(percentage)) {
      percentage = percentage.toFixed(2);
    }
    this.setState({ foreignFilms, englishFilms, percentage });
  }

  render() {
    return (
      <div>
        <FilmInfo
          foreign={this.state.foreignFilms}
          english={this.state.englishFilms}
          percentage={this.state.percentage}
        />
        <br />
        <div className="buttons">
          <Recommend />
          <AddFilm updater={this.refresher} />
        </div>
      </div>
    );
  }
}
