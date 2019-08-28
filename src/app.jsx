import React, { Component } from 'react';

import NavBar from './components/navbar';

class App extends Component {
handleClick =  () => {
alert('ready ! goooo ! ');
}

  render() {
    return (
      <React.Fragment>
      <NavBar />
      <h1 className = "wp-heading-inline">congratulations! (-- mode prod)</h1>
      <p className="welcome-panel">you are ready to develop a WordPress Plugin with ReactJS, good Job</p>
      <button onClick={this.handleClick}>Tester click </button>
      </React.Fragment>
    );
  }

}

export default App;
