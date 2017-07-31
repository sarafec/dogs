import React, { Component } from 'react';
import './App.css';
import data from './dogs.json';

//render list based on state
function renderDogList() {
    return this.state.currentlyDisplayed.map((dog, index) => 
      <div key={index}>
        <div className="dog-entry">
          <img className="dog-icon" src={dog.path} alt="dogs" />
          <div className="dog-name">{dog.breed}</div>
        </div>
      </div>
    );
  }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      currentlyDisplayed: data
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.renderDogList = renderDogList.bind(this);

  }

  //define rerendering functionality for change event
  onInputChange (evt) {
    let newDisplay = data.filter((animalBreed) => 
      animalBreed.search.includes(evt.target.value.toLowerCase()));

    this.setState({
      searchTerm: evt.target.value,
      currentlyDisplayed: newDisplay
    });

    return this.renderDogList();
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Dogs.</h1>
          <div className="search-bar">
            <input type="text" onChange={this.onInputChange} placeholder=" Search your heart out" className="input-field"></input>
          </div>
        </header>

        <div className="main-content">{this.renderDogList()}
        </div>

      </div>
    );
  }
}

export default App;
