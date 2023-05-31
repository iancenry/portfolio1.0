 import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './Home.scss'
import { useState } from 'react'
import {AnimatedLetters} from '../'

 const Home = () => {
  //default animation name = text-animate
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p','e', 'r']

  return (
    <div className="container home-page">
        <div className="animated-text-zone">
            <h1>
              <span className={letterClass}>H</span>              
              <span className={`${letterClass} _12`}>i,</span>              
              <br /> 
              <span className={`${letterClass} _13`}>I</span>              
              <span className={`${letterClass} _14`}>am</span>                
              <img src={LogoTitle} alt="developer" />
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
              <br />
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={22} />
            </h1>

            <h2>React Developer / JavaScript Expert</h2>
            <Link to ='contact' className='flat-btn'>CONTACT ME</Link>

        </div>
    </div>
  )
}

export default Home