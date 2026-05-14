import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Позвольте<span className="purple"> представиться </span>
            </h1>
            <p className="home-about-body">
Я Системный интегратор и DevOps-инженер с более чем 5-летним
опытом работы в IT. Я люблю превращать хаос бизнес-процессов в
надежные, масштабируемые и автоматизированные ИТ-экосистемы. 
Со временем я изучил множество технологий и нашел свою страсть 
в создании отказоустойчивой серверной инфраструктуры и бесшовной 
интеграции корпоративных сервисов.
              <br />
              <br />
              Я владею
              <i>
                <b className="purple">
                  {" "}
                  Linux, Docker, Python (FastAPI), PostgreSQL и n8n{" "}
                </b>
              </i>
              — и мне одинаково нравится работать как с глубоким backend-ом, так и с архитектурой баз данных.
              <br />
              <br />
              Мои ключевые интересы включают
              <i>
                <b className="purple">
                  {" "}
                  развертывание мощных Self-Hosted решений (PaaS, базы данных),{" "}
                </b>
              </i>
              внедрение ERP и CRM-систем (Odoo, Bitrix24), а также поиск новых способов внедрения локальных ИИ-интерфейсов (Open WebUI, Flowise) в повседневную работу бизнеса.
              <br />
              <br />
              При любой возможности я люблю собирать проекты, используя Coolify для чистого деплоя, выстраивать сложную логику через n8n (иногда windmill), а для создания веб-приложений применять современные инструменты вроде React.js, Tailwind и Django.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
