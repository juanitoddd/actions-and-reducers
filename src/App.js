import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCityWeather } from "./Weather.actions.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // Necesary bind for react
    this.changeCity = this.changeCity.bind(this);
  }

  // Inital city
  componentWillMount() {
    this.props.getCityWeather("bogota");
  }

  componentWillReceiveProps(props) {}

  changeCity(e) {
    this.props.getCityWeather(e.target.value);
  }

  colorFromWeather(_weather) {
    let color;
    if (_weather < 12) {
      color = "#1a75ff";
    } else if (_weather < 26) {
      color = "#73e600";
    } else {
      color = "#e6b800";
    }
    return color;
  }

  render() {
    const boxStyle = {
      backgroundColor: this.colorFromWeather(this.props.data.weather)
    };
    return (
      <div className="markdown-body">
        <h1>Reducers and Actions</h1>
        <h4>Select a city</h4>
        <select onChange={this.changeCity}>
          <option value="bogota">Bogota, Colombia</option>
          <option value="vienna">Vienna, Austria</option>
          <option value="bangkok">Bangkok, Thailand</option>
        </select>
        <div className="cityBox" style={boxStyle}>
          <div>
            <span className="title">{this.props.data.city}</span>
            <span className="weather">{this.props.data.weather} °C</span>
          </div>
          <span className="humidity">
            {this.props.data.humidity} grams of water per cubic meter
          </span>
        </div>
        <div className="storeData">
          Global state: <br />
          {JSON.stringify(this.props.data)}
        </div>
      </div>
    );
  }
}

// Map the optained city Weather to the props of this container
const mapStateToProps = state => ({
  data: state.cityWeather
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCityWeather
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
