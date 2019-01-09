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
      

/*       <div>
        <Grid>
          <Row>
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className='red'>&nbsp;</div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className='green'>&nbsp;</div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className='blue'>&nbsp;</div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className='yellow'>&nbsp;</div>
            </Col>                                    
          </Row>
        </Grid>
      </div> */
      <div className="App">
        <LocationList cities={cities} 
          onSelectedLocation={this.handleSelectedLocation}></LocationList>
        <Grid fluid>
          {/* <Row>
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className='red'>&nbsp;</div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className='green'>&nbsp;</div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className='blue'>&nbsp;</div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className='yellow'>&nbsp;</div>
            </Col>                                    
          </Row> */}
          <Row>
            <Col xs>
              <div className='red'>&nbsp;</div>
            </Col>
            <Col xs>
              <div className='green'>&nbsp;</div>
            </Col>
            <Col xs>
              <div className='blue'>&nbsp;</div>
            </Col>
            <Col xs>
              <div className='yellow'>&nbsp;</div>
            </Col>                                    
          </Row>
        </Grid>
      </div>


    );
  }
}

export default App;
