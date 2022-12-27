import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import LogoL from '../../assets/images/llogo.png'
import LogoSubtitle from '../../assets/images/Luis10.png'
import {
  faEnvelope,
  faFolder,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (

    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoL} alt='logo' />
        <img className="sub-logo" src={LogoSubtitle} alt='logo' />
      </Link>
      <nav>
        <NavLink exact="true" activeClassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeClassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeClassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeClassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/luis-rodrigues-da-silva/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/LuisRodrigues8019"
          >
            <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
          </a>
        </li>
      </ul>
    </div>

  )
export default Sidebar
