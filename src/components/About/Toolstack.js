import { Col, Row } from "react-bootstrap";
import Windows from "../../Assets/TechIcons/icons8-windows.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Ubunto from "../../Assets/TechIcons/Ubuntu.svg";
import Antigravity from "../../Assets/TechIcons/antigravity-color.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Ubunto} alt="ubuntu" className="tech-icon-images" />
        <div className="tech-icons-text">Ubuntu</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Windows} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Antigravity} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Antigravity</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
