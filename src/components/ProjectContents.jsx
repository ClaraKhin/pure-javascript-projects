import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import ProjectList from "./ProjectList";

const ProjectContents = () => {
  return (
    <div className="projects">
      <div className="container">
        <h1>Vanilla JavaScript Projects</h1>
        <div className="content">
          {ProjectList.map((value, index) => {
            return (
              <Row className="projects-row">
                <Col key={index}>
                  <Card style={{ width: "30rem" }} className="card">
                    <Card.Img
                      variant="top"
                      src={value.image}
                      className="projects-image"
                      alt={value.name}
                    />
                    <Card.Body>
                      <Card.Title className="project-title">
                        {value.name}
                      </Card.Title>
                      <Card.Text className="desc">
                        {value.description}
                      </Card.Text>
                      <Button className="link-btn">
                        <a href={value.link} target="_blank" rel="noreferrer">
                          Click Me!
                        </a>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectContents;
