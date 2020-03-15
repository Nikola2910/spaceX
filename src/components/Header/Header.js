import React, { Component } from "react";
import logo from "../../img/logo.png";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="main-wrapper">
          <div className="navbar">
            <a href="#cover">
              <img src={logo} alt="" />
            </a>

            <ul>
              <li>
                <a href="#space">space</a>
              </li>
              <li>
                <a href="#mars">mars</a>
              </li>
              <li>
                <a href="#launches">launches</a>
              </li>
              <li>
                <a href="#laika">laika</a>
              </li>
              <li>
                <a href="#moonwalk">moonwalk</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export { Header };
