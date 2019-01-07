import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const strToComponents = (cities) => (
    cities.map( city => <WeatherLocation city={city} /> )
);

const LocationList = ({ cities }) => (

    //console.log(cities);

    /*return (<div>
        <WeatherLocation city="Buenos Aires,ar" />
        <WeatherLocation city="Bogota,col" />
        <WeatherLocation city="Caracas,ve" />
        <WeatherLocation city="Barcelona,es" />
        <WeatherLocation city="Miami,us" />
        <WeatherLocation city="Washington,us" />
    </div>);*/


        <div>
            { strToComponents(cities) }
        </div>
);

LocationList.protoTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;