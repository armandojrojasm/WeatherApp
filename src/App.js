import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  "Lima,pe",
  "Buenos Aires,ar",
  "Bogota,col",
  "Caracas,ve",
  "Barcelona,es",
  "Miami,us",
  "Washington,us",
];

class App extends Component {

  handleSelectedLocation = (city) => {
    console.log(`(App) handleSelectedLocation: ${city}`);
  };

  render() {
    return (
      <div className="App">
        <LocationList cities={cities}
        onSelectedLocation={this.handleSelectedLocation}></LocationList>
      </div>
    );
  }
}

export default App;
