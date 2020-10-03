import React, { useState } from 'react';
import axios from 'axios';

function RecsList(props) {
  const [blah, setBlah] = useState('');
  const [blurb, setBlurb] = useState('');

  if (blah === '') {
    axios
      .get(
        'https://api.themoviedb.org/3/list/138980?api_key=d1e40fddb73df31e61693cbf7ef094aa'
      )
      .then((x) => {
        let filmNum = Math.floor(Math.random() * x.data.item_count);
        console.log(x.data);
        setBlurb('"' + x.data.items[filmNum]['overview'] + '"');
        setBlah(x.data.items[filmNum]['title'] + '?');
      });
  }

  return (
    <div>
      <p>{blah}</p>
      <p>{blurb}</p>
    </div>
  );
}

export default RecsList;
