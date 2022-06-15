import React from 'react';

function Details(props) {
  return (
    <div className='Details'>
      <h3>{props.data.title}</h3>
      <img alt={'daily pick'} src={props.data.url} />
      
      <p>{props.data.explanation}</p>
    </div>
  )
}

export default Details