import React from "react";
import manish from "./manish.jpg";
import { Container, Card, CardDeck, Image } from "react-bootstrap";

const Discussion = () => {
  return (
    <div>
      <Container>
        <div>
          <Container>
            <h3>
              <b className="text-center">Courses Recommended</b>
            </h3>
            <CardDeck>
              <Card className="card">
                <Image className=" " src={manish} width="100%" height="105" />
                <Card.Body>
                  <Card.Title>JavaScript</Card.Title>
                  <p>By Instructor Name </p>
                </Card.Body>
              </Card>
              <Card>
                <Image className=" " src={manish} width="100%" height="105" />
                <Card.Body>
                  <Card.Title>Python</Card.Title>
                  <p>Intern, E-cell ACET Amritsar </p>
                  <Card.Text>My 1st internship experience</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Image className=" " src={manish} width="100%" height="105" />
                <Card.Body>
                  <Card.Title>PHP</Card.Title>
                  <p>Intern, E-cell ACET Amritsar </p>
                  <Card.Text>My 1st internship experience</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Image className=" " src={manish} width="100%" height="105" />
                <Card.Body>
                  <Card.Title>JAVA</Card.Title>
                  <p>Intern, E-cell ACET Amritsar </p>
                  <Card.Text>My 1st internship experience</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Image className=" " src={manish} width="100%" height="105" />
                <Card.Body>
                  <Card.Title>NodeJs</Card.Title>
                  <p>Intern, E-cell ACET Amritsar </p>
                  <Card.Text>My 1st internship experience</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Image className=" " src={manish} width="100%" height="105" />
                <Card.Body>
                  <Card.Title>ReactJs</Card.Title>
                  <p>Intern, E-cell ACET Amritsar </p>
                  <Card.Text>My 1st internship experience</Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Discussion;
