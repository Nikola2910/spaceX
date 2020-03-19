import React, { Component, Fragment } from "react";
import axios from "axios";
import loaderGif from "./img/loader.gif";
import "./reset.scss";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Cover } from "./components/Cover/Cover";
import { Space } from "./components/Space/Space";
import { Mars } from "./components/Mars/Mars";
import { Launches } from "./components/Launches/Launches";
import { OneLaunch } from "./components/OneLaunch/OneLaunch";
import { Laika } from "./components/Laika/Laika";
import { MoonWalk } from "./components/MoonWalk/MoonWalk";
import { Footer } from "./components/Footer/Footer";

class App extends Component {
  state = {
    header: true,
    flights: [],
    button: true,
    loading: false,
    flightNumber: 0,
    oneFlight: {},
    showFlight: false,
    limit: 9,
    offset: 0
  };

  getLaunches = () => {
    this.setState({
      loading: true
    });
    axios
      .get(
        `https://api.spacexdata.com/v3/launches?offset=${this.state.offset}&limit=${this.state.limit}`
      )
      .then(response => {
        console.log(response.data);
        const data = response.data;
        this.setState({
          flights: data,
          button: false,
          loading: false
        });
      });
  };

  nextPage = () => {
    this.setState(
      {
        offset: this.state.offset + 9
      },
      () => {
        this.getLaunches();
        console.log(this.state.offset);
      }
    );
  };
  prevPage = () => {
    this.setState(
      {
        offset: this.state.offset - 9
      },
      () => {
        this.getLaunches();
      }
    );
  };

  getFlightInfo = num => {
    console.log(num);

    axios
      .get(`https://api.spacexdata.com/v3/launches/${num}`)
      .then(response => {
        console.log(response);
        this.setState({
          oneFlight: response.data,
          showFlight: true,
          header: false
        });
      });
  };

  closeFlight = () => {
    this.setState({
      showFlight: !this.state.showFlight,
      header: true
    });
  };

  render() {
    return (
      <BrowserRouter>
        {this.state.header && <Header />}
        <Route exact path="/" component={(Cover, Space)}>
          <Cover />
          <Space />
        </Route>

        <Route path="/mars" component={Mars} />

        <Route path="/launches" component={Launches}>
          {this.state.loading ? (
            <div className="loaderDiv">
              {" "}
              <img className="loader" src={loaderGif} alt="loader-gif" />
            </div>
          ) : (
            <Launches
              getLaunches={this.getLaunches}
              flights={this.state.flights}
              button={this.state.button}
              getFlightInfo={num => {
                this.getFlightInfo(num);
              }}
              offset={this.state.offset}
              nextPage={this.nextPage}
              prevPage={this.prevPage}
            />
          )}
        </Route>
        {this.state.showFlight ? (
          <OneLaunch
            oneFlightInfo={this.state.oneFlight}
            closeFlight={this.closeFlight}
            showFlight={this.state.showFlight}
          />
        ) : null}
        <Route path="/laika" component={Laika} />

        <Route path="/moonwalk" component={MoonWalk} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
