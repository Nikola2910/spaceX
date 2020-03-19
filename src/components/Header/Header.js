import React, { Component } from "react";
import logo from "../../img/logo.png";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

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
                <NavLink to="/">home </NavLink>
              </li>
              <li>
                <NavLink to="/mars">mars</NavLink>
              </li>
              <li>
                <NavLink to="/launches">launches</NavLink>
              </li>
              <li>
                <NavLink to="/laika">laika</NavLink>
              </li>
              <li>
                <NavLink to="/moonwalk">moonwalk</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export { Header };
