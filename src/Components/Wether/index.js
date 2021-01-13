import React from "react";
import "./index.css";
import axios from "axios";
import Clock from "../Clock";

class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.state = {
      weather: "",
      location: "Рівне",
      coord: "",
      temp: "",
      time: "",
      date: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getWeather(this.state.location)
  }

  getCity = (event) => {
    this.setState({
      location: event.target.value,
    });
  }

  async getWeather(location){
    const firstRequest = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c1fb2275690ca17e568dd7636b4f9511&lang=ua&units=metric`)
      .then((res) => {
        console.log(res.data.name)
        this.setState({
          items: res.data,
          weather: res.data.weather[0].description,
          // location: res.data.name,
          temp: res.data.main.temp,
          coord: res.data.coord
        });
      })
      .catch((err) => console.log(err.responceText));
      console.log(firstRequest)
  }

   componentDidMount() {
    this.getWeather(this.state.location)
  }

  render() {
    const { location, weather, temp } = this.state;
    return (
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
    );
  }
}

export default Weather;
