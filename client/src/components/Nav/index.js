import React, { Component } from "react";
import "./style.css";

import { Redirect } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class Nav extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);
    
    return (
      <nav className="nav-extended blue lighten-5">
        {loggedIn ? (
          <section>
            <div className="nav-wrapper">
              {/* <a href="nav-mobile" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
              {/* <ul id="nav-mobile" className="right hide-on-med-and-down"></ul> */}
              <Link to="/"><span className="brand-logo center">armoire</span></Link>
              <ul id="nav-mobile" className="right">
                <li>
                  <Link to="/signup" className="menu-text" onClick={this.logout}>
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-content">
              <ul className="tabs tabs-transparent">
                <li className="tab"><Link className="menu-text" to="/closet">My Closet</Link></li>
                <li className="tab"><Link className="menu-text" to="/additem">Add Item</Link></li>
                {/* <li className="tab"><Link className="menu-text" to="/myoutfits">My Outfits</Link></li> */}
                <li className="tab"><Link className="menu-text" to="/about">Shop Responsibly</Link></li>
              </ul>
            </div>
          </section>
        ) : (
          <section>
            <div className="nav-wrapper">
              {/* <a href="nav-mobile" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
              {/* <ul id="nav-mobile" className="right hide-on-med-and-down"></ul> */}
              <Link to="/"><span className="brand-logo center">armoire</span></Link>
              <ul id="nav-mobile" className="right">
                <li>
                  <Link to="/signup" className="menu-text" onClick={this.logout}>
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-content">
              <ul className="tabs tabs-transparent">
                <li className="tab"><Link className="menu-text" to="/closet">My Closet</Link></li>
                <li className="tab"><Link className="menu-text" to="/additem">Add Item</Link></li>
                <li className="tab"><Link className="menu-text" to="/myoutfits">My Outfits</Link></li>
                <li className="tab"><Link className="menu-text" to="/about">Shop Responsibly</Link></li>
              </ul>
            </div>
          </section>
        )}
      </nav>
    );
  }
}

export default Nav;


