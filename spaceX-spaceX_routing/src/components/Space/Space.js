import React, { Component } from "react";
import space from "../../img/space.jpg";
import Fade from "react-reveal/Fade";

import "./Space.scss";

const Space = () => {
  return (
    <div className="main-wrapper">
      <div id="space">
        <div className="content">
          <Fade left>
            <h2>Space</h2>
            <p>
              Space is the boundless three-dimensional extent in which objects
              and events have relative position and direction. Physical space is
              often conceived in three linear dimensions, although modern
              physicists usually consider it, with time, to be part of a
              boundless four-dimensional continuum known as spacetime. The
              concept of space is considered to be of fundamental importance to
              an understanding of the physical universe. However, disagreement
              continues between philosophers over whether it is itself an
              entity, a relationship between entities, or part of a conceptual
              framework.
            </p>
          </Fade>
        </div>
        <Fade right>
          <a href="https://www.google.com/sky/" target="blank">
            <img src={space} alt="" />
          </a>
        </Fade>
      </div>
    </div>
  );
};

export { Space };
