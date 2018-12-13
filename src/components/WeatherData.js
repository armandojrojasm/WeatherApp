import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTempature from './WeatherTemperature';
import {
    SUN,
} from './../constants/weathers'

const WeatherData = () => (
    <div>
        <WeatherTempature 
            temperature={20} 
            weatherState={SUN}>
        </WeatherTempature>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
);

export default WeatherData;