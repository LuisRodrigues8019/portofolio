import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import {
  faEnvelope,
  faFolder,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <h1 className="logo-link" alt="initials">
          {' '}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'L R'.split('')}
            idx={15}
          />
        </h1>
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
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon icon="fa-light fa-folder" />
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
}
export default Sidebar
