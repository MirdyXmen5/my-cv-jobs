import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Всем привет! Я <span className="purple">Мирас</span>{" "}
            из <span className="purple">Шымкента, Казахстан</span>.
            <br />
            В настоящее время я работаю как{" "}
            <span className="purple">системный администратор и DevOps</span>.
            <br />
            Имею <span className="purple">три образования</span>.
            <br />
            <br />
            Помимо работы, я люблю заниматься вещами, которые меня вдохновляют:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Создание музыки 🎵
            </li>
            <li className="about-activity">
              <ImPointRight /> Просмотр фильмов 🎬
            </li>
            <li className="about-activity">
              <ImPointRight /> Путешествия 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Самый лучший способ предсказать будущее - это создать его."{" "}
          </p>
          <footer className="blockquote-footer">Питер Друкер</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
