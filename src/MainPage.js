import React from "react";
import manish from "./manish.jpg";

import {
  CardDeck,
  Card,
  Image,
  Row,
  Col,
  Button,
  ProgressBar,
} from "react-bootstrap";
const MainPage = () => {
  return (
    <div className="main mt-5">
      <div className="div row">
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
            <Col md={4}>
              <Image
                style={{ height: "160px" }}
                className="0"
                src={manish}
                width="100%"
                height="auto"
                display="block"
              />
            </Col>
            <Col md={8} style={{ columnSpan: "2" }}>
              <b>Why Digital marketing</b>
              <p>Instructor Name:- Joseph Smith</p>
              <ProgressBar animated now={45} />
              <p>Chapter 2</p>
              <p>
                The crux of social media{" "}
                <Button className="float-right">Continue</Button>
              </p>
            </Col>
          </Row>
          <Row className="row mt-4">
            <Col md={4}>
              <Image
                style={{ height: "160px" }}
                className="0"
                src={manish}
                width="100%"
                height="auto"
                display="block"
              />
            </Col>
            <Col md={8} style={{ columnSpan: "2" }}>
              <b>IELTS</b>
              <p>Instructor Name:- Joseph Smith</p>
              <ProgressBar animated now={45} />
              <p>Chapter 2</p>
              <p>
                The crux of social media{" "}
                <Button className="float-right">Continue</Button>
              </p>
            </Col>
          </Row>
          <Row className="mt-4 row">
            <Col md={4}>
              <Image
                style={{ height: "160px" }}
                className="0"
                src={manish}
                width="100%"
                height="auto"
                display="block"
              />
            </Col>
            <Col md={8} style={{ columnSpan: "2" }}>
              <b>Why Digital marketing</b>
              <p>Instructor Name:- Joseph Smith</p>
              <ProgressBar animated now={45} />
              <p>Chapter 2</p>
              <p>
                The crux of social media{" "}
                <Button className="float-right">Continue</Button>
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
