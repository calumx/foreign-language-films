import React, { useState } from 'react';
import './custom.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Suggestions(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const filmClick = (x) => {
    setShow(true);
    sendFilm(x.target.parentNode.getAttribute('filmid'));
  };

  let options = [];

  const sendFilm = (filmID) => {
    //Send POST request to your watchlist with params as follows:
    //{ media_type: 'movie', media_id: filmID, watchlist: true }
    //Then call "props.updater()"
  };

  if (props.results.length > 0) {
    options = props.results.slice(0, 5).map((film) => (
      <div
        id="clickable-div"
        onClick={filmClick}
        key={film.id}
        filmid={film.id}
      >
        <li>{film.title}</li>
      </div>
    ));

    return (
      <div>
        <Modal show={show} onHide={handleClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Success!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your film has been logged, and your data should now be updated.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Okedoke</Button>
          </Modal.Footer>
        </Modal>
        <div>{options}</div>
      </div>
    );
  } else if (props.typed) {
    return (
      <div>
        <p>No results</p>
      </div>
    );
  } else return null;
}

export default Suggestions;
