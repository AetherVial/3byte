import React from 'react';
import logo from './logo.svg';
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

function App() {

  return (
    <div className="App">
      <Column col = "1" name="Winnie"/>
      <Column col = "2" name="Bob"/>
      <Column col = "3" name="Thomas"/>
      <Column col = "4" name="George"/>
    </div>
  );
}

export default App;
