import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

// const strToComponents = (cities) => (
//     //cities.map((city, index) => ( <WeatherLocation key={index} city={city} /> ))
//     cities.map(city => ( <WeatherLocation key={city} city={city} /> ))
// );

// const LocationList = ({ cities }) => (

//     //console.log(cities);

//     /*return (<div>
//         <WeatherLocation city="Buenos Aires,ar" />
//         <WeatherLocation city="Bogota,col" />
//         <WeatherLocation city="Caracas,ve" />
//         <WeatherLocation city="Barcelona,es" />
//         <WeatherLocation city="Miami,us" />
//         <WeatherLocation city="Washington,us" />
//     </div>);*/


//         <div>
//             { strToComponents(cities) }
//         </div>
// );

const LocationList = ({ cities, onSelectedLocation }) => {

    const handleWeatherLocationClick = (city) => {
        console.log(`(LocationList) handleWeatherLocationClick: ${city}`);
        onSelectedLocation(city);
    }

    const strToComponents = (cities) => (
        cities.map(city =>
            (<WeatherLocation
                key={city}
                city={city}
                onWeatherLocationClick={() => handleWeatherLocationClick(city) } /> ))
    );

    return(
        <div>
            { strToComponents(cities) }
        </div>
    );
};

LocationList.protoTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;