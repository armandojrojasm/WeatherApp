import convert from 'convert-units';
import { 
    SUN,
    //WINDY
} from './../constants/weathers';

const transformWeather = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }

    return data;
};

const getWeatherState = (weather_data) => {
    return SUN;
};

const getTemp = (kelvin) => {
    console.log(kelvin);
    return convert(kelvin).from("K").to("C").toFixed(2);
};

export default transformWeather;