import React, { Component } from 'react'; 
import Location from './Location'; 
import WeatherData from './WeatherData';
import './styles.css';
import { 
    SUN,
    //WINDY
} from './../../constants/weathers';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';

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
        console.log("construtor");

        super();// super constructor o constructor de donde extiende o hereda
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };

    }

    render() {
        console.log("render");

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
            const newWeather = transformWeather(data);
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

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        
    }

    
    componentWillMount() {
        console.log("UNSAFE componentWillMount");
        
    }


    componentWillUpdate(nextProps, nextState) {
        console.log("UNSAFE componentWillUpdate");
        
    }
    
    
    
    


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