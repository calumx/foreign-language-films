import React from 'react';
import Button from 'react-bootstrap/Button';
import RecsList from './RecsList';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './custom.css';

class Recommend extends React.Component {
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
              <Popover.Title as="h3">What about...</Popover.Title>
              <Popover.Content>
                <RecsList />
              </Popover.Content>
            </Popover>
          }
        >
          <Button variant="primary">Recommend me a film!</Button>
        </OverlayTrigger>
      </div>
    );
  }
}

export default Recommend;
