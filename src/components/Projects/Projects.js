import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import promoCake from "../../Assets/Projects/vk-qr.png";
import vkorzinkaLearn from "../../Assets/Projects/vk-learn.png";
import danialDamu from "../../Assets/Projects/daniyal-damu.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Мои последние <strong className="purple">проекты </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={promoCake}
              isBlog={false}
              title="Promo Cake"
              description="Промо-проект для кондитерского сервиса с удобной презентацией продукции, визуальными карточками и быстрым переходом к ключевой информации для клиента."
              ghLink="https://github.com/MirdyXmen5/promo-cake"
              demoLink="https://docs.google.com/document/d/1514Fnr7TZYISMEnod5z-tapxfnz_EsnJzADQGRwtJHM/edit?usp=sharing"
              demoLabel="Docs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vkorzinkaLearn}
              isBlog={false}
              title="VKorzinka Learn"
              description="Учебный проект VKorzinka с интерфейсом для изучения и отработки пользовательских сценариев, связанных с корзиной, товарами и клиентским опытом."
              ghLink="https://github.com/MirdyXmen5/vkorzinka-learn"
              demoLink="https://docs.google.com/document/d/1CHyqg4j12dPbd4ORuNKK7uJicPMyLIox5VxUpDfjFZc/edit?usp=sharing"
              demoLabel="Docs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={danialDamu}
              isBlog={false}
              title="Danial Damu"
              description="Frontend-часть проекта Danial Damu: адаптивный пользовательский интерфейс для представления сервиса и работы с основными экранами приложения."
              ghLink="https://github.com/MirdyXmen5/danial-damu-frontend"
              demoLink="https://docs.google.com/document/d/1esdrJU7kC5eqdXF2qqxcu83Wlo4saDYoCvOwHnNNxto/edit?usp=sharing"
              demoLabel="Docs"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
