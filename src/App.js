import React, { Component } from 'react';
import './App.css';
import PuppyContainer from './components/PuppyContainer'


class App extends Component {

  state = {
    puppies: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/puppies')
      .then(response => response.json())
      .then(puppies => this.setState({ puppies }))
  }

  render() {
    return (
      <div className="App">
        <PuppyContainer puppies={this.state.puppies} />
      </div>
    )
  }
}

export default App;
