import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTempature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTempature 
            temperature={20} 
            weatherState={''}>
        </WeatherTempature>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
);

export default WeatherData;