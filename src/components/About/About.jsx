import { useEffect, useState } from 'react'
import {AnimatedLetters} from '../'
import './About.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => setLetterClass('text-animate-hover'), 3000)
  }, [])

  return (
    <div className="container about-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={[..."About me"]} index={15}/>
            </h1>
            <p> {"I'm"}  a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.</p>
            <p> I am quiet confident, naturally curious, and perpetually working on improving my chops one design problem at a time. </p>
            <p> If I need to define myself in one sentence that would be a family person, father of a beautiful daughter, a sports fanatic, photography enthusiast, and tech-obsessed!!! </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default About

//50:12