import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import "./OneLaunch.scss";

import yes from "../../img/checkmark.png";
import no from "../../img/close.png";

class OneLaunch extends Component {
  render() {
    const { oneFlightInfo, closeFlight, showFlight } = this.props;

    return (
      <div id="oneLaunch">
        <Zoom>
          <div className="main-wrapper">
            <div className="flight-content">
              <h1>{oneFlightInfo.mission_name}</h1>

              <span className="oneLaunchYear">
                Launch Year: <span> {oneFlightInfo.launch_year} </span>
              </span>

              <h3 className="rocket">
                Rocket Name: <span> {oneFlightInfo.rocket.rocket_name}</span>
              </h3>
              <h4>
                Rocket Type: <span> {oneFlightInfo.rocket.rocket_type}</span>
              </h4>

              <h3 className="success">
                {" "}
                Launch Success:&nbsp;&nbsp;{" "}
                {oneFlightInfo.launch_success ? (
                  <img src={yes} alt="" />
                ) : (
                  <img src={no} alt="" />
                )}{" "}
              </h3>

              <p>{oneFlightInfo.details}.</p>

              <img
                className="emblem"
                src={oneFlightInfo.links.mission_patch}
                alt=""
              />
            </div>

            <div className="flight-video">
              <iframe
                width="580"
                height="330"
                src={`https://www.youtube.com/embed/${oneFlightInfo.links.youtube_id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button className="closeWindow" onClick={closeFlight}>
              {" "}
              Take me back!{" "}
            </button>
          </div>
        </Zoom>
      </div>
    );
  }
}

export { OneLaunch };
