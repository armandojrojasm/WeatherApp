import React, { Component } from 'react'; 
import Location from './Location'; 
import WeatherData from './WeatherData';
import './styles.css';
import { 
    SUN,
    //WINDY
} from './../../constants/weathers';

const location = "Buenos Aires,ar";
const api_key = "96b8e87ae43c0ed78d9b24fac11fed1c";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;

const data = {
    temperature: 27,
    weatherState: SUN,
    humidity: 17,
    wind: '10 m/s'
}

/*const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 30,
    wind: '10 m/s'
}*/

/*const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"Barcelona"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);*/

class WeatherLocation extends Component {
    
    constructor() {
        super();// super constructor o constructor de donde extiende o hereda
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }      

    handleUpdateClick = () => {
        fetch(api_weather).then((resolve) => {
           
            return resolve.json();// para obtener el json se llama a función 'json',
            //pero devuelve una promesa
        }).then((data) =>{//como devuelve una promesa
            //se una nuevamente 'then' y 'data' es el json
            console.log(data);
            debugger;
            const newWeather = this.getData(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data: newWeather
            });
        });

        //console.log("actualizado");
        
        //esto no sirve, el unico sitio donde puedo hacer es 'this.state' es en constructor
        //para modificar state, hay que llamar a 'this.setState()'
        /*this.state = {
            city: 'Buenos Aires!',
            data: data2
        };*/

        /*this.setState({
            data: data2
        });*/

    };

    getData = (weather_data) => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);

        const data = {
            humidity,
            temperature : temp,
            weatherState,
            wind: `${speed} m/s`,
        }

        return data;
    };

    getWeatherState = (weather_data) => {
        return SUN;
    };


}


/*EJEMPLO de promesa:
let promesa = new Promise( (resolve, rejected) => {
	setTimeout(() => {
  	resolve("Exito total");
  }, 2000);
});

console.log("Inicio...");

promesa.then( (mensaje) => {
	console.log(mensaje);
  console.log("...Fin");
});
*/



export default WeatherLocation;