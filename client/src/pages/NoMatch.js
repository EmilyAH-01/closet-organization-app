import React from "react";
import { Col, Row, Container } from "../components/Grid";

function NoMatch() {
  return (
    <Container>
      <Row>
        <Col size="m12">
          <h3>404 Page Not Found</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
