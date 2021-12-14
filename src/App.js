

import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: 'Frankenstein', id: 'asc0' },
        { name: 'Dracula', id: 'asc1'  },
        { name: 'Zombie',  id: 'asc2' },
      ]
    }
  }

  render () {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))
        }
      </div>
    );
  }
}

export default App;
