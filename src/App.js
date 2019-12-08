import React, {useReducer} from 'react';
import './App.css';
import Column from './components/column';

/*
4 columns
cards in columns
move cards between columns

1. render a board with 4 columns, give a column a name and 2 cards
2. add styles 
3. add a card
4. move cards
5. offline refresh 
*/

let initialState = {
  columns: [
    ['card1', 'card2'],
    ['card1', 'card2'],
    ['card1', 'card2'],
    ['card1', 'card2']
  ]
}

function reducer(state, action) {
  let newState = Object.assign({}, state);
  let text;
  switch (action.type) {
    case 'add':
      newState.columns[action.payload.col].push(action.payload.text);
      return newState;
    case 'right':
      text = newState.columns[action.col][action.idx];
      newState.columns[action.col + 1].push(text)
      newState.columns[action.col].splice(action.idx, 1);
      return newState;
    case 'left':
      text = newState.columns[action.col][action.idx];
      newState.columns[action.col - 1].push(text)
      newState.columns[action.col].splice(action.idx, 1);
      return newState;
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(
    reducer,
    initialState,
  );
  
  return (
    <div className="App">
      <Column col={0} name="Winnie" cards={state.columns[0]} dispatch={dispatch}/>
      <Column col={1} name="Bob"    cards={state.columns[1]} dispatch={dispatch}/>
      <Column col={2} name="Thomas" cards={state.columns[2]} dispatch={dispatch}/>
      <Column col={3} name="George" cards={state.columns[3]} dispatch={dispatch}/>
    </div>
  );
}

export default App;
