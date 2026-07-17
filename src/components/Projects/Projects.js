import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import promoCake from "../../Assets/Projects/vk-qr.png";
import vkorzinkaLearn from "../../Assets/Projects/vk-learn.png";
import danialDamu from "../../Assets/Projects/daniyal-damu.png";
import bitrix24bp from "../../Assets/Projects/bp-bitrix.png";
import akt from "../../Assets/Projects/akt.jpg";
import ib from "../../Assets/Projects/ib-docs.jpg";
import tls from "../../Assets/Projects/tls.png";

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
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tls}
              isBlog={false}
              title="Тараз Лифт Сервис"
              description="Создал современный, быстрый и визуально впечатляющий веб-сайт, который повысит доверие к бренду «Taraz Lift Service»"
              ghLink="https://github.com/MirdyXmen5/taraz-lift-service"
              demoLink="https://docs.google.com/document/d/1uND9V_nK6GSkxH_oJwe_EJcD-V1JIOlqJIyVX7TD1-0/edit?usp=sharing"
              demoLabel="Docs"
            />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitrix24bp}
              isBlog={false}
              title="БП в Bitrix24"
              description="Разработать с нуля бизнес-процессы «Распродажа» и «Списание» в Bitrix24 для сети «Вкусная Корзинка». Цель — автоматизировать для директоров магазинов цепочку согласований по товарам с истекающим сроком годности."
              ghLink="https://docs.google.com/document/d/1RVKAQLrqmAx1ea-Bts3OLIql00gFYVskeseVHz_HPkA/edit?tab=t.0"
              demoLink="https://docs.google.com/document/d/1RVKAQLrqmAx1ea-Bts3OLIql00gFYVskeseVHz_HPkA/edit?tab=t.0"
              demoLabel="Docs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={akt}
              isBlog={false}
              title="Генератор актов"
              description="Создать внутренний веб-генератор актов перемещения основных средств для бухгалтерии Medservice Plus. Цель — автоматизировать ручной ввод данных из выгрузок SAP HANA с помощью ИИ-поиска и автозаполнения, сократив время подготовки документов с двух дней до 30 минут."
              ghLink="https://github.com/MirdyXmen5/msp-akt"
              demoLink="https://docs.google.com/document/d/19f438n8H0zLqqC_RT7m00AVOmI7qh9UL10TPocokU0I/edit?tab=t.0#heading=h.ypvqw6fzpob2"
              demoLabel="Docs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ib}
              isBlog={false}
              title="Информационная безопасность"
              description="Внедрил ИБ в ГКП «Жамбыл-Жылу» по стандартам ЕТ РК №832. Главная цель — разработать грамотную документацию, которая защитит инфраструктуру от киберугроз."
              ghLink="https://docs.google.com/document/d/1JzfK9WiqzO1OkIOi6jxQ1dgek55Z9sP_EqZCNxgSI2I/edit?usp=sharing"
              demoLink="https://docs.google.com/document/d/1JzfK9WiqzO1OkIOi6jxQ1dgek55Z9sP_EqZCNxgSI2I/edit?usp=sharing"
              demoLabel="Docs"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
