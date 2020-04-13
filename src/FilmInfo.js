import "./custom.css";
import React from 'react';
import Button from 'react-bootstrap/Button';

class FilmInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        fill : 0
    }
}

componentDidUpdate(prevProps) {
    if (this.props.percentage !== prevProps.percentage) {
    this.setState({fill: this.props.percentage});
    }
}
    render() {

        return (

            <div>
            
            <p>You have watched {this.props.foreign.length} foreign language films and {this.props.english.length} English language films.
            </p>
            <p>This means that {this.props.percentage}% of your viewing has been in a foreign language.</p>
          
            <p>{(this.props.percentage >= 50) ? "Great! Keep it up. Check out a recommendation below." : "You can do better. Why not get a recommendation below?"}</p>

            <div id="prbar">
              <div id="prpos" style={{width: this.state.fill + "%"}}>
                  </div>
                  </div>
                </div>
        )
    }
}

export default FilmInfo;
