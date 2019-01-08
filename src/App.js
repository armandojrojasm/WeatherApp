import React, { Component } from 'react';
//import WeatherLocation from './components/WeatherLocation';
//import logo from './logo.svg';
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

  handleSelectionLocation = (city) => {
    console.log(city);
  };

  render() {
    return (
      <div className="App">
        <LocationList cities={cities}
        onSelectedLocation={this.handleSelectionLocation}></LocationList>
      </div>
    );
  }
}

export default App;
