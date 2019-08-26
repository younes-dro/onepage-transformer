import React, { Component } from 'react';

class App extends Component {
handleClick =  () => {
alert('ready ! goooo ! ');
}

  render() {
    return (
      <div className = "wrap">
      <h1 className = "wp-heading-inline">congratulations!</h1>
      <p className="welcome-panel">you are ready to develop a WordPress Plugin with ReactJS.</p>
      <button onClick={this.handleClick}>Tester click </button>
      </div>
    );
  }

}

export default App;
