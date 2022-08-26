import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import eMobile from "../../Assets/Projects/e-mobile.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Blog"
              description="A responsive blog site. It has multiple feature like filter, tag, comment etc."
              ghLink="https://github.com/anikronjon/"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Book Shop"
              description="A django project. Where user can search, filtering, checkout and payment. It is responsive for any device."
              ghLink="https://github.com/anikronjon/"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-commerce"
              description="A responsive ecommerce project that build with django. There have admin and user dashboard, payment system and lots of feature."
              ghLink="https://github.com/anikronjon/"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Country Visit"
              description="It is one of my big budget project. It's realy comes handy when you wanna visit a country. It will guide you to fiend hotel, restora, and interective places."
              ghLink="https://github.com/anikronjon/"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eMobile}
              isBlog={false}
              title="Ecommerce Mobile"
              description="Build with flutter. It is realy looks awesome and very interactive."
              ghLink="https://github.com/anikronjon/"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
