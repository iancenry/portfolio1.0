import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import {LogoS, LogoSubtitle} from '../../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img src={LogoSubtitle} alt="iancenry" className='sub-logo'/>
    </Link>
    <nav>
      <NavLink to='/' className={({isActive}) => isActive ? 'active' : ''}>
        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
      </NavLink>
      <NavLink to='about' className={({isActive}) => isActive ? 'active' : 'about-link'}>
        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
      </NavLink>
      <NavLink to='contact' className={({isActive}) => isActive ? 'active' : 'contact-link'}>
        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a href="" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' /></a>
      </li>
      <li>
        <a href="" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} color='#4d4d4e' /></a>
      </li>
    </ul>
  </div>
)

export default Sidebar
