import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.text}</span>
      <span className="navigation-links-text1">{props.text1}</span>
      <span className="navigation-links-text2">{props.text12}</span>
      <span className="navigation-links-text3">{props.text11}</span>
      <span className="navigation-links-text4">{props.text111}</span>
      <span className="navigation-links-text5">{props.text1111}</span>
      <span className="navigation-links-text6">{props.text11111}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text4: 'Resource',
  text11111: 'Resource',
  text3: 'Library',
  text: 'Home',
  text1: 'Coaching',
  text2: 'Programs',
  text11: 'Coaching',
  text111: 'Library',
  text41: 'Event',
  text12: 'Programs',
  text1111: 'Event',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text4: PropTypes.string,
  text11111: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text11: PropTypes.string,
  text111: PropTypes.string,
  text41: PropTypes.string,
  text12: PropTypes.string,
  text1111: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
