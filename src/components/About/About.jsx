import {AnimatedLetters} from '../'

const About = () => {
  return (
    <div className="container about-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters strArray={[..."About me"]} index={15}/>
            </h1>
        </div>
    </div>
  )
}

export default About

//50:12