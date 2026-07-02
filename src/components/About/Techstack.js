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
import bitrix24 from "../../Assets/TechIcons/Bitrix24-logo-ru.svg";
import paas from "../../Assets/TechIcons/PaaS-logo.png";
import n8n from "../../Assets/TechIcons/n8n-color.svg";
import Coolify from "../../Assets/TechIcons/coolify.svg";
import Windmill from "../../Assets/TechIcons/windmill-logo-primary.svg";
import VMware from "../../Assets/TechIcons/VMware_logo.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={bitrix24} alt="bitrix24" />
        <div className="tech-icons-text">Bitrix24</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={paas} alt="PaaS" />
        <div className="tech-icons-text">PaaS</div>
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
        <img src={n8n} alt="n8n" />
        <div className="tech-icons-text">n8n</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Coolify} alt="Coolify" />
        <div className="tech-icons-text">Coolify</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Windmill} alt="Windmill" />
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
        <img src={VMware} alt="VMware" />
        <div className="tech-icons-text">VMware</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress size={60} />
        <div className="tech-icons-text">WordPress CMS</div>
      </Col>
    </Row>
  );
}

export default Techstack;
