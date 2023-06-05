import Loader from 'react-loaders'
import './Contact.scss'
import { AnimatedLetters } from '../'
import { useEffect, useState } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => setLetterClass('text-animate-hover'), 3000)
  }, [])

  return (
    <>
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters letterClass={letterClass} strArray={[...'Contact me']} index={15} />
            </h1>
          </div>
        </div>
        <Loader type='pacman'/>
    </>
  )
}

export default Contact