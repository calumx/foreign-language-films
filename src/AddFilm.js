import React from 'react';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import FilmSearch from './FilmSearch';

class AddFilm extends React.Component {
  render() {
    return (
      <div>
        <OverlayTrigger
          rootClose
          trigger="click"
          data-trigger="focus"
          key="bottom"
          placement="bottom"
          overlay={
            <Popover id="popover-positioned-bottom">
              <Popover.Title as="h3">Search film</Popover.Title>
              <Popover.Content>
                <FilmSearch updater={this.props.updater} />
              </Popover.Content>
            </Popover>
          }
        >
          <Button variant="primary">I watched something!</Button>
        </OverlayTrigger>
      </div>
    );
  }
}
export default AddFilm;
