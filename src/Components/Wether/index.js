import React, { Fragment } from "react";
import "./index.css";
import axios from "axios";
import ReactDOM from "react-dom";

class Weather extends React.Component {
  API_URL = `https://api.openweathermap.org/data/2.5/weather?q=rivne&appid=c1fb2275690ca17e568dd7636b4f9511&lang=ua&units=metric`;

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      weather: "",
      location: "",
      temp: "",
      time: "",
      date: "",
    };
  }

  componentDidMount() {
    axios
      .get(this.API_URL)
      .then((res) => {
        console.log(res.data);
        this.setState({
          items: res.data,
          weather: res.data.weather[0].description,
          location: res.data.name,
          temp: res.data.main.temp,
        });
      })
      .catch((err) => console.log(err.responceText));

    setInterval(() => {
      var days = [
        "Неділя",
        "Понеділок",
        "Вівторок",
        "Середа",
        "Четвер",
        "П'ятниця",
        "Субота",
      ];
      var months = [
        "Січня",
        "Лютого",
        "Березеня",
        "Квітня",
        "Травня",
        "Червня",
        "Липня",
        "Серпня",
        "Вересеня",
        "Жовтня",
        "Листопада",
        "Грудня",
      ];

      const myDate = new Date();
      const fullDate =
        days[myDate.getDay()] +
        ", " +
        myDate.getDate() +
        " " +
        months[myDate.getMonth()] +
        " " +
        myDate.getFullYear() +
        " року";

      this.setState({
        time: new Date().toLocaleTimeString(),
        date: fullDate,
      });
    }, 1000);
  }

  render() {
    // console.log("STATE", this.state);

    const { items, location, weather, temp, time, date } = this.state;
    // console.log("ITEMS", items);

    return (
      <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
        <div className="row d-flex justify-content-center px-3">
          <div className="card">
            <h2 className="ml-auto mr-4 mt-3 mb-0">{ location }</h2>
            <p className="ml-auto mr-4 mb-0 med-font">{ weather }</p>
            <h1 className="ml-auto mr-4 large-font">{ temp }&#176;</h1>
            <p className="time-font mb-0 ml-4 mt-auto">{ time }</p>
            <p className="ml-4 mb-4">{date}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
