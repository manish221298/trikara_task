import React from "react";
import manish from "./manish.jpg";
import { Link } from "react-router-dom";
import { CardDeck, Card, Image, Row, Col } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import Discussion from "./Discussions";

const MainPage = () => {
  return (
    <div>
      <div className="div1">
        <CardDeck className="text-center">
          <Card className="card">
            <Image
              className="mt-4 image"
              src={manish}
              width="40%"
              height="105"
            />
            <Card.Body>
              <Card.Title>
                <p>
                  <b>Welcome Manish</b>
                </p>
              </Card.Title>
              <Row>
                <Col className="imgcol1">
                  <p>Course enrolled</p>
                </Col>
                <Col className="imgcol2">
                  <p>3</p>
                </Col>
              </Row>

              <Row>
                <Col className="imgcol1">
                  <p>Course Completed</p>
                </Col>
                <Col className="imgcol2">
                  <p>1</p>
                </Col>
              </Row>

              <Row>
                <Col className="imgcol1">
                  <p>Language</p>
                </Col>
                <Col className="imgcol2">
                  <p>English</p>
                </Col>
              </Row>

              <Row>
                <Col className="imgcol1">
                  <p>Start Date</p>
                </Col>
                <Col className="imgcol2">
                  <p>25/03/2021</p>
                </Col>
              </Row>

              <Row>
                <Col className="imgcol1">
                  <p>Course Language</p>
                </Col>
                <Col className="imgcol2">
                  <p>English</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>

      <div className="div2">
        <Row className="row">
          <Col>
            <Image
              style={{ height: "150px" }}
              className="mt-4"
              src={manish}
              width="100%"
              height="auto"
              display="block"
            />
          </Col>
          <Col style={{ columnSpan: "2" }}></Col>
          <Col></Col>
        </Row>
        <Row className="mt-4 row">
          <Col>
            <Image
              className="mt-4"
              src={manish}
              width="100%"
              height="auto"
              display="block"
            />
          </Col>
          <Col style={{ columnSpan: "2" }}></Col>
          <Col></Col>
        </Row>
        <Row className="mt-4 row">
          <Col>
            <Image className="mt-4" src={manish} width="100%" display="block" />
          </Col>
          <Col style={{ columnSpan: "2" }}></Col>
          <Col></Col>
        </Row>
        <Row className="mt-4 row">
          <Col>
            <Image
              className="mt-4"
              src={manish}
              width="100%"
              height="auto"
              display="block"
            />
          </Col>
          <Col style={{ columnSpan: "2" }}>kumar</Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
};

export default MainPage;
