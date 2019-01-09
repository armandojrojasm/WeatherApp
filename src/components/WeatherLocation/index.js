import React, { Component } from 'react'; 
import Location from './Location'; 
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';

/*const data = {
    temperature: 27,
    weatherState: SUN,
    humidity: 17,
    wind: '10 m/s'
}*/

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
    
    constructor(props) {
        console.log("constructor");

        super(props);// super constructor o constructor de donde extiende o hereda

        const { city, onWeatherLocationClick } = props;

        this.state = {
            //city: 'Buenos Aires',
            city,
            data: null,// data,
            onWeatherLocationClick
        };

    }

    render() {
        console.log("render");

        const { city, data, onWeatherLocationClick } = this.state;

        /*return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );*/
        /*return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                { data ? <WeatherData data={data}></WeatherData> : "Cargando..." }
            </div>
        );*/
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                { data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50} /> } 
            </div>
        );

    }      

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);

        fetch(api_weather).then((resolve) => {
           
            return resolve.json();// para obtener el json se llama a función 'json',
            //pero devuelve una promesa
        }).then((data) =>{//como devuelve una promesa
            //se una nuevamente 'then' y 'data' es el json
            console.log(data);
            //debugger;
            const newWeather = transformWeather(data);
            console.log(newWeather);
            //debugger;
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

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        
    }
    
    /*componentWillMount() {
        console.log("UNSAFE componentWillMount");
        
    }*/

    /*componentWillUpdate(nextProps, nextState) {
        console.log("UNSAFE componentWillUpdate");
        
    }*/
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


WeatherLocation.propTypes = {
    city : PropTypes.string.isRequired,
    onWeatherLocationClick : PropTypes.func,
};

export default WeatherLocation;