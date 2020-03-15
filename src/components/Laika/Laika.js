import React from "react";
import Fade from "react-reveal/Fade";
import laika from "../../img/laika.jpg";
import "./Laika.scss";

function Laika() {
  return (
    <div className="main-wrapper">
      <div id="laika">
        <div className="content">
          <Fade left>
            <h2>Laika</h2>
            <p>
              <span>Laika</span> (Russian: Лайка; c. 1954 – 3 November 1957) was
              a Soviet space dog who became one of the first animals in space,
              and the first animal to orbit the Earth. Laika, a stray mongrel
              from the streets of Moscow, was selected to be the occupant of the
              Soviet spacecraft Sputnik 2 that was launched into outer space on
              3 November 1957.
            </p>
            <br />
            <p>
              {" "}
              Little was known about the impact of spaceflight on living
              creatures at the time of Laika's mission, and the technology to
              de-orbit had not yet been developed, so Laika's survival was never
              expected. Some scientists believed humans would be unable to
              survive the launch or the conditions of outer space, so engineers
              viewed flights by animals as a necessary precursor to human
              missions.[1] The experiment aimed to prove that a living passenger
              could survive being launched into orbit and endure a micro-g
              environment, paving the way for human spaceflight and providing
              scientists with some of the first data on how living organisms
              react to spaceflight environments.
            </p>
          </Fade>
        </div>
        <Fade right>
          <a href="https://en.wikipedia.org/wiki/Laika" target="blank">
            <img src={laika} alt="" />
          </a>
        </Fade>
      </div>
    </div>
  );
}

export { Laika };
