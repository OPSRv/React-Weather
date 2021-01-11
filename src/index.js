import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Weather from "./Components/Wether"

class App extends React.Component{
  // API_URL = `api.openweathermap.org/data/2.5/weather?q=rivne&appid=c1fb2275690ca17e568dd7636b4f9511`;

  // async componentDidMount(){
  //   let res = await fetch(this.API_URL)
  //   .then(response => {
  //     return response;
  //   }).catch(err => console.log(err))
  //   const date = await res.json();
  //   console.log(date)
  // }
  
  componentDidMount() {
    fetch("api.openweathermap.org/data/2.5/weather?q=rivne&appid=c1fb2275690ca17e568dd7636b4f9511")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
          console.log(result.items);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render(){
    return(
      <Fragment>
        <Weather />
      </Fragment>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));