import React, { Component } from "react";
import logo from "../../commonResource/images/icons/logo-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import HeaderLinks from "./HeaderLinks";
class Header extends Component {
  render() {
    return (
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="/">
              <img src={logo} />
            </a>
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <HeaderLinks LName="Mac" Url="/mac" />
                <HeaderLinks LName="iphone" Url="/iphone" />
                <HeaderLinks LName="ipad" Url="/ipad" />
                <HeaderLinks LName="watch" Url="/watch" />
                <HeaderLinks LName="tv" Url="/tv" />
                <HeaderLinks LName="Music" Url="/Music" />
                <HeaderLinks LName="Support" Url="/Support" />

                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <img src={search} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <img src={cart} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
