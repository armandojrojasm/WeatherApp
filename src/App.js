import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import { Grid, Row, Col } from 'react-flexbox-grid';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

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

  // render() {
  //   return (
  //     <div className="App">
  //       <LocationList cities={cities}
  //       onSelectedLocation={this.handleSelectedLocation}></LocationList>
  //     </div>
  //   );
  // }

  render() {
    return (
      <Grid>
        <Row>
          Titulo
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <div className="details">

            </div>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default App;
