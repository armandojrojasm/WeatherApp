import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTempature from './WeatherTemperature';
import './styles.css';

//doble destructuring
const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => (
    <div className="weatherDataCont">
        <WeatherTempature 
            temperature={temperature} 
            weatherState={weatherState}>
        </WeatherTempature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>
);

export default WeatherData;