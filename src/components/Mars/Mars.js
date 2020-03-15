import React, { Component } from "react";
import mars from "../../img/mars.jpg";
import Fade from "react-reveal/Fade";
import "./Mars.scss";

const Mars = () => {
  return (
    <div className="main-wrapper">
      <div id="mars">
        <Fade left>
          <a href="https://www.google.com/mars/" target="blank">
            <img src={mars} alt="" />
          </a>
        </Fade>
        <div className="content">
          <Fade right>
            <h2>Mars</h2>
            <p>
              Mars is the fourth planet from the Sun and the second-smallest
              planet in the Solar System after Mercury. In English, Mars carries
              a name of the Roman god of war and is often referred to as the
              'Red Planet'. The latter refers to the effect of the iron oxide
              prevalent on Mars' surface, which gives it a reddish appearance
              distinctive among the astronomical bodies visible to the naked
              eye. Mars is a terrestrial planet with a thin atmosphere, having
              surface features reminiscent both of the impact craters of the
              Moon and the valleys, deserts, and polar ice caps of Earth.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export { Mars };
