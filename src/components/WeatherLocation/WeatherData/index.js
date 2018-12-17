import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTempature from './WeatherTemperature';
import {
    SUN,
} from './../../../constants/weathers';
import './styles.css';

const WeatherData = ({ data }) => {
    const { temperature, weatherState, humidity, wind } = data;

    return (<div className="weatherDataCont">
        <WeatherTempature 
            temperature={temperature} 
            weatherState={weatherState}>
        </WeatherTempature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>);
};

export default WeatherData;