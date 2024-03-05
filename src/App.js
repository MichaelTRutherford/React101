import './App.css';
import React from 'react';

class StarWars extends React.Component{
  constructor() {
    super()
    this.state ={
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      image: null,
      species: null,
    }
  }
// https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api
//https://raw.githubusercontent.com/akabab/starwars-api/master/api
  getNewCharacter(){
    const randomNumber = Math.ceil(Math.random() * 88)
    const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loadedCharacter: true,
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          image: data.image,
          species: data.species,
        })
      })
    
  }
  render(){
    return (
      <div>
        <div className="content">
          {
            this.state.loadedCharacter && 
            <div>
              <h1>{this.state.name}</h1>
              <p><img width="300" src={this.state.image} alt={this.state.name} className="img" /></p>
              <p>{this.state.height} m</p>
              <p>Homeworld: {this.state.homeworld}</p>
              <p>Species: {this.state.species}</p>
            </div>
          }
          
          <button 
            type="button" 
            onClick={() => this.getNewCharacter()} 
            className="btn">
              Randomize Character
          </button>
        </div>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
