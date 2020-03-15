import React, { Component, Fragment } from "react";
import uuid from "react-uuid";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import "./Launches.scss";

class Launches extends Component {
  render() {
    const {
      getLaunches,
      flights,
      button,
      getFlightInfo,
      nextPage,
      prevPage,
      offset
    } = this.props;

    return (
      <div className="fullStars">
        <div className="main-wrapper">
          <div id="launches">
            {button ? (
              <button className="whereto" onClick={getLaunches}>
                Where to Miss?
              </button>
            ) : (
              <Fragment>
                <h1>To the stars</h1>
              </Fragment>
            )}

            <div className="flights">
              {flights.map(flight => {
                return (
                  <Zoom cascade key={uuid()}>
                    <div
                      className="flight"
                      onClick={() => getFlightInfo(flight.flight_number)}
                    >
                      <img src={flight.links.mission_patch_small} alt="" />
                      <span className="flightNumber">
                        Flight number: &nbsp; &nbsp;
                        <span className="number"> {flight.flight_number} </span>
                      </span>
                      <h3>{flight.mission_name}</h3>
                      <span className="launchYear">
                        Launch year: &nbsp; <span>{flight.launch_year}</span>
                      </span>
                    </div>
                  </Zoom>
                );
              })}
              {button ? null : (
                <Fragment>
                  <button
                    disabled={offset == 0 ? true : false}
                    className="movePage"
                    onClick={prevPage}
                  >
                    Previous Page
                  </button>
                  <button
                    disabled={offset > 89 ? true : false}
                    className="movePage"
                    onClick={nextPage}
                  >
                    Next Page
                  </button>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Launches };
