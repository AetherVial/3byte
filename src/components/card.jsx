import React, {useState, useEffect} from 'react';

const Card = ({col, msg, cards, setCards}) => {
  const [column, setCol] = useState(parseInt(col));
  
  const handleLeft = (e) => {
    e.preventDefault();
    setCol(column - 1);
  }

  const handleRight = (e) => {
    e.preventDefault();
    setCol(column + 1);
  }

  switch (column) {
    case 1:
      return (
        <div>
          {msg}
          <div className="controls">
            <button onClick = {e => this.handleRight(e)}>right</button>
          </div>
        </div>
      ) 
    case 4:
      return (
        <div>
          {msg}
          <div className="controls">
            <button onClick={e => this.handleLeft(e)}>left</button>
          </div>
        </div>
      ) 
    default:
      return (
      <div>
        {msg}
        <div className="controls">
            <button onClick={e => this.handleLeft(e)}>left</button>
            <button onClick={e => this.handleRight(e)}>right</button>
        </div>
      </div>
    )  
  }
}

export default Card;