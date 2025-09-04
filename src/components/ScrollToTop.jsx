import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronUp } from 'react-icons/fa'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    const startPosition = window.pageYOffset
    const startTime = performance.now()
    const duration = 800

    const easeOutCubic = (t) => {
      return 1 - Math.pow(1 - t, 3)
    }

    const scrollAnimation = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = easeOutCubic(progress)

      window.scrollTo(0, startPosition * (1 - easeProgress))

      if (progress < 1) {
        requestAnimationFrame(scrollAnimation)
      }
    }

    requestAnimationFrame(scrollAnimation)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          aria-label="Scroll to top"
        >
          <FaChevronUp />
          <div className="scroll-ripple"></div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
