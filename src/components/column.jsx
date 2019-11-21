import React, {useEffect, useState} from 'react';
import Card from './card';

const Column = ({col, name}) => {
  const [cards, setCards] = useState(["card1", "card2"]);

  useEffect(() => {}, [cards.length]);

  let entries = cards.map((i) => {
    return <Card col={col} msg={i}/>
  })

  function msg(e){
    e.stopPropagation()
    const input = prompt("Add a tag in the input below")
    setCards(cards.concat([input]))
  }
  

  return (
    <div>
      <div className={name}>{name}</div>
      <div>
        {entries}
      </div>
      <div onMouseDown={e => msg(e)}>
        add a card >_>
      </div>
    </div>
  )
}

export default Column;