import React, { Component } from 'react';
import './App.css';
import PuppyContainer from './components/PuppyContainer'
import Favorites from './components/Favorites'


class App extends Component {

  state = {
    puppies: [],
    favorites: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/puppies')
      .then(response => response.json())
      .then(puppies => this.setState({ puppies }))
  }

  addPuppyToFavorites = (puppy) => {
    this.setState({ favorites: [...this.state.favorites, puppy] })
  }

  render() {
    return (
      <div className="App">

        <Favorites favorites={this.state.favorites}/>

        <PuppyContainer 
          addPuppyToFavorites={this.addPuppyToFavorites}
          puppies={this.state.puppies} 
        />

      </div>
    )
  }
}

export default App;
