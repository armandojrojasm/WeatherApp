import React, { Component } from 'react'; 
import Location from './Location'; 
import WeatherData from './WeatherData';
import './styles.css';
import { 
    SUN
} from './../../constants/weathers';

const data = {
    temperature: 27,
    weatherState: SUN,
    humidity: 17,
    wind: '10 m/s'
}

/*const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"Barcelona"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);*/

class WeatherLocation extends Component {
    
    constructor() {
        super();// super constructor
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };
    }

    render()
    {
        return (
            <div className="weatherLocationCont">
                <Location city={"Barcelona"}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }      

    handleUpdateClick = () => {
        console.log("actualizado");
    };


}



export default WeatherLocation;