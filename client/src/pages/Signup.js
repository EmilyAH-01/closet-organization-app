import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./styling/signup.css";
//import { RegularBtn } from "../components/Button";
//import $ from "jquery";
import SignupDetail from "../components/sign-up";
//import LoginForm from "../components/login-form";


function collapseDiv() {
    let x = document.getElementById("login-div");
    let y = document.getElementById("signup-div");
    console.log("button clicked");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

function collapseSignIn() {
    let x = document.getElementById("login-div");
    let y = document.getElementById("signup-div");
    console.log("button clicked");
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
    } else {
        y.style.display = "none";
    }
}

// var loggedIn = true;
// if (loggedIn = false) {
//     $(function() {
//         document.getElementById("login-div").style.display = "none";
//         document.getElementById("signup-div").style.display = "none";
//     });
// }


function Signup({ children }) {

  return (
    <main className="mainContainer">
        <Row>
            <Col size="m12">
                <h1 className="center main-logo">armoire</h1>
                <h4 className="center">Organize your wardrobe and add to it responsibly</h4>
                <br />
                <br />
            </Col>
        </Row>
        <Row>
            <Col size="m3 offset-m3 right-align">
                <button className="btn orange lighten-3" onClick={collapseDiv}><span className="login-signup">Log In</span></button>
            </Col>
            <Col size="m3 left-align">
            <button className="btn orange lighten-3" onClick={collapseSignIn}><span className="login-signup">Sign Up</span></button>
            </Col>
        </Row>
        <Row>
            <Col size="s6 offset-s3">
                <br />
                <br />
                <div id="login-div" className="login-signup-div">
                    {/* <input placeholder="Username" id="username" type="text" onChange={e => setUsername(e.target.value)} />
                    <input placeholder="Password" id="password" type="text" onChange={e => setPassword(e.target.value)} />
                    <button className="btn orange lighten-3 btn-submit" type="submit">Log In</button> */}
                    {children}
                </div>
                <div id="signup-div" className="login-signup-div">
                    {/* <input placeholder="First Name" id="name" type="text" onChange={e => setName(e.target.value)} />
                    <input placeholder="Username" id="username" type="text" onChange={e => setUsername(e.target.value)} />
                    <input placeholder="Password" id="password" type="text" onChange={e => setPassword(e.target.value)} />
                    <button className="btn orange lighten-3 btn-submit" type="submit">Sign Up</button> */}
                    <SignupDetail />
                </div>
                <div className="empty-space"></div>
            </Col>
        </Row>
    </main>
  );
};

export default Signup;

