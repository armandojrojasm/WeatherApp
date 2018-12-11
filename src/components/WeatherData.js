import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTempature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTempature></WeatherTempature>
        <WeatherExtraInfo></WeatherExtraInfo>
    </div>
);

export default WeatherData;