import React from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{ `${temperature} C°` }</span>
    </div>
);

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    
    if(icon)
        return <WeatherIcons name={icon} size="2x"></WeatherIcons>;

    return <WeatherIcons name={"day-sunny"} size="2x"></WeatherIcons>;
}

//diccionary
const icons = {
    sunny: "day-sunny",
    fog: "day-fog"
};

export default WeatherTemperature;
