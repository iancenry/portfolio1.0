import './AnimatedLetters.scss'
import PropTypes from 'prop-types'

const AnimatedLetters = ({letterClass, strArray, index}) => {
  return (
    <span>
        {
            strArray.map((char, i) => (
              <span key={char + i} className={`${letterClass} _${i  + index}`}>{char}</span>
            ))
        }
    </span>
  )
}

AnimatedLetters.propTypes = {
  letterClass: PropTypes.string,
  strArray: PropTypes.array,
  index: PropTypes.number
  
}

export default AnimatedLetters