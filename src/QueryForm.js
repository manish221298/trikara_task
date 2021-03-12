import React, { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

class QueryForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      nameErr: "",
      email: "",
      emailErr: "",
      phoneNumber: "",
      phoneNumberErr: "",
      select: ["select", "placement", "syllabus", "duration"],
      message: "",
      messageErr: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({
      nameErr: "",
      emailErr: "",
      phoneNumberErr: "",
      messageErr: "",
    });
  };

  validation = () => {
    let nameErr = "";
    let emailErr = "";
    let phoneNumberErr = "";
    let messageErr = "";

    if (!this.state.name) {
      nameErr = "Name should be required";
    }
    if (!this.state.email) {
      emailErr = "Email should be required";
    }
    if (!this.state.email.includes("@gmail.com")) {
      emailErr = "invalid email format ";
    }
    if (!this.state.phoneNumber) {
      phoneNumberErr = "Number shold be required";
    }
    if (!this.state.message) {
      messageErr = "Message should be required";
    }

    if (nameErr || emailErr || phoneNumberErr || messageErr) {
      this.setState({
        nameErr,
        emailErr,
        phoneNumberErr,
        messageErr,
      });
      return false;
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isData = this.validation();
    if (isData) {
      const formData = {
        name: this.state.name,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        message: this.state.message,
      };
      console.log("formdata", formData);
      this.setState({
        name: "",
        email: "",
        mobileNumber: "",
        message: "",
      });
    }
  };

  render() {
    let select = this.state.select;
    let selectList = select.map((ele, i) => {
      return <option key={i}>{ele}</option>;
    });

    return (
      <div>
        <div
          style={{ width: "100%", height: "600px", backgroundColor: "white" }}
          className="row text-center mb-5 pb-5"
        >
          <div class="col-sm-3"></div>
          <div class="col-sm-6 form " style={{ backgroundColor: "light-gray" }}>
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <Row className="mt-3">
                  <Col>
                    <h3 className="text-center mt-5">
                      <b>Any Query on Digital marketing</b>
                    </h3>
                  </Col>
                </Row>
                <Row className="text-left">
                  <Col md={6}>
                    <Form.Label htmlFor="name">Name:-</Form.Label>
                    <Form.Control
                      type="text"
                      id="name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                    <p style={{ color: "red" }}>{this.state.nameErr}</p>
                    <br />
                  </Col>
                  <Col md={6}>
                    <Form.Label htmlFor="email">Email:-</Form.Label>
                    <Form.Control
                      type="text"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <p style={{ color: "red" }}>{this.state.emailErr}</p>
                  </Col>
                </Row>

                <Row className="text-left">
                  <Col md={6}>
                    <Form.Label htmlFor="number">Phone Number:-</Form.Label>
                    <Form.Control
                      type="Number"
                      id="numbar"
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.handleChange}
                    />
                    <p style={{ color: "red" }}>{this.state.phoneNumberErr}</p>
                  </Col>
                  <Col md={6}>
                    <Form.Label htmlFor="select">
                      Select Enquery Type:-
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="option"
                      onChange={this.handleChange}
                    >
                      {selectList}
                    </Form.Control>
                  </Col>
                </Row>
                <Row className="text-left">
                  <Col md={12}>
                    <Form.Label htmlFor="enquery">Message:-</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                    <p style={{ color: "red" }}>{this.state.messageErr}</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}></Col>
                  <Col md={4}>
                    <Button size="sm" block className="mt-3 ">
                      <input type="submit" className="btn" value="SUBMIT" />
                    </Button>
                  </Col>
                  <col md={4}></col>
                </Row>
              </Form>
            </Container>
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
    );
  }
}

export default QueryForm;
