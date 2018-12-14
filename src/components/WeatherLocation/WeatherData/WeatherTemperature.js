import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{ `${temperature}` }</span>
        <span className="temperatureType">{ `C°` }</span>
    </div>
);

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}></WeatherIcons>;

    return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon}></WeatherIcons>;
}

//diccionary
const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
