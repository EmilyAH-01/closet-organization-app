import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="nav-extended blue lighten-5">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo center">armoire</a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/login" className="menu-text">Log In</a></li>
          <li><a href="/signup" className="menu-text">Sign Up</a></li>
        </ul>
      </div>
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <li className="tab"><a className="active menu-text" href="/closet">My Closet</a></li>
          <li className="tab"><a className="menu-text" href="/additem">Add Item</a></li>
          <li className="tab"><a className="menu-text" href="/myoutfits">My Outfits</a></li>
          <li className="tab"><a className="menu-text" href="/about">Shop Responsibly</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;


