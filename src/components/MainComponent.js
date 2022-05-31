import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function MainComponent() {
  return (
    <div className="main-component">
      <div className="name">Aachman Mittal</div>
      <div className="designation">Developer</div>
      <a href="https://aarkimos.github.io" className="web-link">
        aarkimos.github.io
      </a>

      <div className="button-bar">
        <button className="button-bar-button" id="email-button">
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </button>
        <button
          className="button-bar-button"
          id="github-button"
          onClick={() => {
            window.open("http://github.com/AarKiMos", "_blank");
          }}
        >
          <FontAwesomeIcon icon={faGithub} />
          GitHub
        </button>
      </div>

      <div className="text-section">
        <h4>About</h4>
        <p>
          I am a student and software developer from India. I love making web
          apps. I love ReactJS and Tailwind CSS. I like learning new
          technologies and try new advancements in tech.
        </p>
      </div>
      <div className="text-section">
        <h4>Interests</h4>
        <p>Aviation, Food, YouTube and Tech.</p>
      </div>
    </div>
  );
}
