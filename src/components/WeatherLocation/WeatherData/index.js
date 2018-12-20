import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTempature from './WeatherTemperature';
import './styles.css';
import PropTypes from 'prop-types';

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

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default WeatherData;