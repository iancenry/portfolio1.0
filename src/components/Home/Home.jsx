import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './Home.scss'
import { useEffect, useState } from 'react'
import {AnimatedLetters, Logo} from '../'

 const Home = () => {
  //default animation name = text-animate
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = "lobodan".split("")
  const jobArray = [..."web developer"]
  //const jobArray = "web developer".split("")

  useEffect(() => {
    setTimeout(() => setLetterClass('text-animate-hover'), 4000)
  }, [])

  return (
    <div className="container home-page">
        <div className="animated-text-zone">
            <h1>
              <span className={letterClass}>H</span>              
              <span className={`${letterClass} _12`}>i,</span>              
              <br /> 
              <span className={`${letterClass} _13`}>I</span> <span className={`${letterClass} _14`}>am</span>
              <img src={LogoTitle} alt="developer" />
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
              <br />
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={22} />
            </h1>

            <h2>React Developer / JavaScript Expert</h2>
            <Link to ='contact' className='flat-btn'>CONTACT ME</Link>
        </div>
        <Logo />
    </div>
  )
}

export default Home