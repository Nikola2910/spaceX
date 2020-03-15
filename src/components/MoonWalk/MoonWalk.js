import React from "react";
import moonwalk from "../../img/moonwalk.jpg";
import Fade from "react-reveal/Fade";
import "./MoonWalk.scss";

const MoonWalk = () => {
  return (
    <div className="main-wrapper">
      <div id="moonwalk">
        <Fade left>
          <a href="https://www.youtube.com/watch?v=Zi_XLOBDo_Y" target="blank">
            <img src={moonwalk} alt="" />
          </a>
        </Fade>
        <div className="content">
          <Fade right>
            <h2>Moon Walk</h2>
            <p>
              An illusion is involved in creating the appearance of the dancer
              gliding backwards. Initially, the front foot is held flat on the
              ground, while the back foot is in a tiptoe position. The flat
              front foot remains on the ground but is slid lightly and smoothly
              backward past the tip-toe back foot. What is now the front foot is
              lowered flat, while the back foot is raised into the tiptoe
              position. These steps are repeated over and over creating the
              illusion that the dancer is being pulled backwards by an unseen
              force while trying to walk forward. Variations of this move allow
              moonwalking to appear to glide forward, sideways, or even in a
              circle.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export { MoonWalk };
