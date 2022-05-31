import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faGithubSquare,
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/AarKiMos">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </a>
      <a href="https://github.com/AarKiMos">
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a href="https://facebook.com">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a href="https://instagram.com">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
}
