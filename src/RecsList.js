import React, { useState } from 'react';
import './custom.css';

function RecsList() {
  const [recTitle, setRecTitle] = useState('');
  const [recBlurb, setRecBlurb] = useState('');

  if (recTitle === '') {
    //Make GET request to your recommendations list then
    //Generate random number to serve as index of film from list (I used res.data.item_count to get the length of the list)
    //setRecTitle and setRecBlurb appropriately (eg. res.data.items[index]['title'], res.data.iems[index]['overview'])
  }

  return (
    <div>
      <p className="popover-title">{recTitle}</p>
      <p className="blurb">{recBlurb}</p>
    </div>
  );
}

export default RecsList;
