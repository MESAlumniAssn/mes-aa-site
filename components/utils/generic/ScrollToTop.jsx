import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'

const variants = {
  tap: {
    y: '2px',
  },
}

const ScrollToTop = () => {
  const [scrollToTop, setScrollToTop] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const scrollOn = window.scrollY > 200

    if (scrollOn) {
      setScrollToTop(true)
    } else {
      setScrollToTop(false)
    }
  }

  if (scrollToTop)
    return (
      <motion.div
        variants={variants}
        whileTap="tap"
        className="scrollToTopContainer"
        onClick={() => {
          window.scroll({ top: 0, left: 0, behavior: 'smooth' })
        }}
      >
        <FontAwesomeIcon icon={faHandPointUp} className="scrollToTop" />
      </motion.div>
    )
  else {
    return null
  }
}

export default ScrollToTop
