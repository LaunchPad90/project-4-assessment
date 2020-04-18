import React, { Component } from 'react';
import './App.css';
import CircleSelector from './CircleSelector'
import Circles from './Circles';


class App extends Component {
  state = {
    className: 1
  }

  handleClick = (selected) => {
    console.log('clicked')
    this.setState({className: selected})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            className={this.state.className}
            handleClick={this.handleClick}
          />
          <Circles
            className={this.state.className}
          />
        </main>
      </div>
    );
  }
}

export default App;