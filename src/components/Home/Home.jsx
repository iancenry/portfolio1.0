 import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './Home.scss'

 const Home = () => {
  return (
    <div className="container home-page">
        <div className="animated-text-zone">
            <h1>Hi, <br /> I am <img src={LogoTitle} alt="developer" />lobodan <br /> Web Developer </h1>
            <h2>React Developer / JavaScript Expert</h2>
            <Link to ='contact' className='flat-btn'>CONTACT ME</Link>

        </div>
    </div>
  )
}

export default Home