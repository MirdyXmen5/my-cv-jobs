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
IT-инженер с опытом более 5 лет в бэкенд-разработке, DevOps и автоматизации бизнес-процессов. Специализируюсь на проектировании отказоустойчивой инфраструктуры, развертывании self-hosted решений (включая Coolify и Supabase) и интеграции корпоративных систем. Разрабатываю на Python (FastAPI, Django) и JavaScript (React, Tailwind), управляю базами данных PostgreSQL.
              <br />
              <br />
              Уверенно работаю с Linux, Windows Server, Docker, Proxmox и VMware, настраиваю сети, CI/CD и мониторинг (Prometheus, Grafana, Zabbix). Важная часть моего технического подхода — реверс-инжиниринг: я эффективно анализирую недокументированные API, чужой код и закрытые системы для создания надежных бесшовных интеграций.
              <br />
              <br />
              Реализую сложную логику автоматизации через n8n, Windmill и Power Automate, внедряю CRM/ERP (Bitrix24, Odoo) и интегрирую локальные ИИ-инструменты. Ориентирован на построение стабильных, масштабируемых ИТ-экосистем с полным контролем над данными и без избыточных расходов на облачные сервисы.
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
