import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To Do App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <form>
            "Today's Tasks:" <input type='text' name='Tasks'/>
          </form>
        </p>
      </div>
    );
  }
}

export default App;
// L16-20: this is bad practice, form shouldn't appear as descendant of p but i'm just playing for now
// L18: also forgot how to use possesive quote and not have it interfere with displaying on site
