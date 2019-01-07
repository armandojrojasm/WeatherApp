import convert from 'convert-units';
import { 
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../constants/weathers';

const transformWeather = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }

    return data;
};

const getWeatherState = (weather) => {
    const { id } = weather;

    if(id >= 200 && id < 300){
        return THUNDER;
    } else if(id >= 300 && id < 400){
        return DRIZZLE;
    } else if(id >= 500 && id < 600){
        return RAIN;
    } else if(id >= 600 && id < 700){
        return SNOW;
    } else if(id > 800 && id < 900){
        return CLOUD;
    } else if(id === 800){
        return SUN;
    }

    return "";
};

const getTemp = (kelvin) => {
    console.log(kelvin);
    let temp = convert(kelvin).from("K").to("C").toFixed(2);
    return Number.parseInt(temp);
};

export default transformWeather;