import React from 'react';

const Card = ({msg, col, dispatch, idx}) => {
  
  function handleLeft(e){
    e.preventDefault();
    dispatch({type: 'left', col, idx})
  }

  function handleRight(e){
    e.preventDefault();
    dispatch({ type: 'right', col, idx})
  }

  switch (col) {
    case 0:
      return (
        <div className="card">
          {msg}
          <div className="controls">
            <button onClick = {e => handleRight(e)}>right</button>
          </div>
        </div>
      ) 
    case 3:
      return (
        <div className="card">
          {msg}
          <div className="controls">
            <button onClick={e => handleLeft(e)}>left</button>
          </div>
        </div>
      ) 
    default:
      return (
        <div className="card">
        {msg}
        <div className="controls">
            <button onClick={e => handleLeft(e)}>left</button>
            <button onClick={e => handleRight(e)}>right</button>
        </div>
      </div>
    )  
  }
}

export default Card;