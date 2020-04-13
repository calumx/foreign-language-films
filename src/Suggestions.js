import React, { useState } from 'react';
import './custom.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Suggestions(props) {

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const filmClick = (x) => (setShow(true), sendFilm(x.target.parentNode.getAttribute("filmid")));

        let options = [];

        const sendFilm = (x) => {
            axios.post('https://api.themoviedb.org/3/account/{account_id}/watchlist?api_key=d1e40fddb73df31e61693cbf7ef094aa&session_id=d38ef9ba5672c0c9660f9bdd47b123bf609c2a13', {
                "media_type": "movie",
                "media_id": x,
                "watchlist": true
            }).then(() => {props.updater()})  
        }
        
    if (props.results.length > 0) {
        options = props.results.slice(0, 5).map(x => (
        <div id="clickable-div" onClick={filmClick} key={x.id} filmid={x.id}><li>{x.title}</li></div>
    ))
    
    return <div>
        <Modal show={show} onHide = {handleClose} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>Success!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your film has been logged, and your data should now be updated.</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">Okedoke</Button>
            </Modal.Footer>
        </Modal>
        <div>{options}</div>
     
        </div>;


    } else if (props.typed) { 
        return <div><p>No results</p></div> 
    } else return null;
        
}

export default Suggestions;