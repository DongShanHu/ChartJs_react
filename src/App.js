import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Chart from "./components/Chart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }
  //定義 getChartData 方法
  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // Ajax calls here
    //該要得類別屬性
    this.setState({
      chartData: {
        labels: [
          "Boston",
          "Worcester",
          "Springfield",
          "Lowell",
          "Cambridge",
          "New Bedford"
        ],
        //資料數量population
        datasets: [
          {
            label: "Population",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            //圖形所用顏色
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Chart
          chartData={this.state.chartData}
          location="Massachusetts"
          //將標列放下方
          legendPosition="bottom"
        />
      </div>
    );
  }
}

export default App;
