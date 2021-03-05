import React from "react";
import { Col, Row, Container } from "../components/Grid";
import "./styling/about.css";

function About() {
    return (
        <div className="aboutSection">
            <Container>
                <Row>
                    <Col size="m12">
                        <div className="aboutDiv"> 
                            <h3>Shop Responsibly</h3>
                            <p>Have you ever thought about who makes your clothes, how much they're paid, and what happens to all those extra clothes that don't sell in stores? </p>
                            <br />
                            <p>Find out more:</p>
                            <p>https://fashionchecker.org/</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
