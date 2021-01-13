import React from "react";
import axios from "axios";
import "./index.css";

import Clock from "../Clock";

class Weather extends React.Component{

    // API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Rivne&appid=d663677633bd6cb690bbdea66fe5a981&units=metric`;

    state = {
        weather: "",
        location: "Рівне",
        coord: "",
        temp: "",
        time: "",
        date: "",
    }

    componentDidMount(){
        this.updateWeather(this.state.location);
    }

    async updateWeather(location){
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c1fb2275690ca17e568dd7636b4f9511&lang=ua&units=metric`
        await axios.get(API_URL)
      .then((res) => {
        console.log(res.data.name)
        this.setState({
          items: res.data,
          weather: res.data.weather[0].description,
          temp: res.data.main.temp,
          coord: res.data.coord
        });
      })
      .catch((err) => console.log(err.responceText));
    }
    getCity = (event) => {
        console.log(event.target.value)
        this.setState({
        location: event.target.value,
        });
  }

    handleSubmit = (event)  =>{
    event.preventDefault();
    this.updateWeather(this.state.location);
  }

    render(){
        const { location, weather, temp } = this.state;
        return(
             <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
        <div className="row d-flex justify-content-center px-3">
          <div className="card">
            <form onSubmit={this.handleSubmit}>
              <div className="group ml-auto mr-4 mt-3 mb-0">
                <input type="text" onChange={this.getCity} required />
                <span className="bar" />
                <label>Введіть місто</label>
              </div>
            </form>
            <h2 className="ml-auto mr-4 mt-3 mb-0">{location}</h2>
            <p className="ml-auto mr-4 mb-0 med-font">{weather}</p>
            <h1 className="ml-auto mr-4 large-font">{temp}&#176;</h1>
            <Clock />
          </div>
        </div>
      </div>
        )
    }
}

export default Weather;