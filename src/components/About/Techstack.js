import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiWordpress, SiStrapi } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { TbServerCog, TbServer, TbServerBolt, TbWebhook } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Django from "../../Assets/TechIcons/django-logo-negative.svg";
import Axios from "../../Assets/TechIcons/Azios.svg";
import i18next from "../../Assets/TechIcons/i18next-icon.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Django} alt="django" />
        <div className="tech-icons-text">Django</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Axios} alt="Axios" />
        <div className="tech-icons-text">Axios</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={i18next} alt="i18next" />
        <div className="tech-icons-text">i18next</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">Postgresql</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbWebhook size={60} />
        <div className="tech-icons-text">n8n</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbServerCog size={60} />
        <div className="tech-icons-text">Coolify</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiWindmill size={60} />
        <div className="tech-icons-text">Windmill</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase size={60} />
        <div className="tech-icons-text">Odoo</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbServer size={60} />
        <div className="tech-icons-text">PS.kz</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbServerBolt size={60} />
        <div className="tech-icons-text">Hoster.kz</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress size={60} />
        <div className="tech-icons-text">WordPress CMS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStrapi size={60} />
        <div className="tech-icons-text">Strapi</div>
      </Col>
    </Row>
  );
}

export default Techstack;
