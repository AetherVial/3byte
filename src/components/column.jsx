import React from 'react';
import Card from './card';

const Column = ({col, name, cards, dispatch}) => {

  let entries = cards.map((msg, idx) => {
    return <Card msg={msg} col={col} dispatch={dispatch} idx={idx}/>
  })

  function msg(e){
    e.stopPropagation()
    const text = prompt("Add a tag in the input below")
    dispatch({type: 'add', payload: {text, col}})
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