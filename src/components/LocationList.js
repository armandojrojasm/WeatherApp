import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city="Buenos Aires,ar" />
        <WeatherLocation city="Bogota,col" />
        <WeatherLocation city="Caracas,ve" />
        <WeatherLocation city="Barcelona,es" />
        <WeatherLocation city="Miami,us" />
        <WeatherLocation city="Washington,us" />
    </div>
);

export default LocationList;