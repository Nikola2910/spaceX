import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./Cover.scss";

const Cover = () => {
  return (
    <div id="cover" className="cover">
      <Fade bottom>
        <h1>
          Welcome <span>Space Traveller!</span>
        </h1>
      </Fade>
    </div>
  );
};

export { Cover };
