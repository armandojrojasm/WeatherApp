import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import { Grid, Row, Col } from 'react-flexbox-grid';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ForecastExtended from './components/ForecastExtended';


const cities = [
  "Lima,pe",
  "Buenos Aires,ar",
  "Bogota,col",
  "Caracas,ve",
  "Barcelona,es",
  "Miami,us",
  "Washington,us",
  "Ciudad de México,mx",
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
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <div className="details">
                <ForecastExtended city={"Buenos Aires,ar"}></ForecastExtended>
              </div>
            </Paper>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default App;
