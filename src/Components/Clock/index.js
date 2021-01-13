import React from "react";

class Clock extends React.Component {

constructor(props){
    super(props);
    this.state = {
        time : "",
        date : ""
    }
}

  componentDidMount() {
    this.timerID = setInterval(() => {
      const days = [
        "Неділя",
        "Понеділок",
        "Вівторок",
        "Середа",
        "Четвер",
        "П'ятниця",
        "Субота",
      ];
      const months = [
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

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { time, date } = this.state;
    return (
      <div>
        <p className="time-font mb-0 ml-4 mt-auto">{time}</p>
        <p className="ml-4 mb-4">{date}</p>
      </div>
    );
  }
}

export default Clock;
