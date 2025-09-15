import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaReact, FaNodeJs, FaJs, FaDatabase, FaGitAlt, FaRocket, FaArrowRight } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [isAvailable, setIsAvailable] = useState(true)

  useEffect(() => {
    // Update availability status based on current time (Cairo timezone)
    const updateAvailability = () => {
      const now = new Date()
      const hour = now.getHours()
      setIsAvailable(hour >= 9 && hour < 18)
    }

    updateAvailability()
    const interval = setInterval(updateAvailability, 3600000) // Update every hour

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const techStack = [
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
    { icon: FaDatabase, name: 'MongoDB', color: '#47A248' },
    { icon: FaGitAlt, name: 'Git', color: '#F05032' }
  ]

  const stats = [
    { number: '7+', label: 'Projects' },
    { number: '1+', label: 'Year Pro' },
    { number: '100%', label: 'Dedication' }
  ]

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Background Elements */}
        <div className="hero-background">
          <div className="geometric-shapes">
            <motion.div 
              className="shape-circle shape-1"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div 
              className="shape-triangle shape-2"
              animate={{ 
                rotate: -360,
                y: [0, -20, 0]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div 
              className="shape-square shape-3"
              animate={{ 
                rotate: 360,
                x: [0, 15, 0]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                x: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div 
              className="shape-hexagon shape-4"
              animate={{ 
                rotate: -360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </div>
          <div className="gradient-overlay" />
        </div>

        {/* Main Hero Content */}
        <div className="hero-content-grid">
          <motion.div 
            className="hero-text-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div 
              className="hero-status-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className={`status-dot ${isAvailable ? 'available' : 'busy'}`} />
              <span>{isAvailable ? 'Available for Projects' : 'Currently Offline'}</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="hero-title-enhanced"
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: 0.4, 
                duration: 1,
                type: "spring",
                stiffness: 80,
                damping: 20
              }}
            >
              <span className="hero-greeting">Hello, I'm</span>
              <span className="hero-name-enhanced">FatmaAbuelfateh</span>
              <span className="hero-role-dynamic">
                <span className="role-prefix">I craft</span>
                <TypeAnimation
                  sequence={[
                    'exceptional web experiences',
                    2500,
                    'innovative digital solutions',
                    2500,
                    'responsive user interfaces',
                    2500,
                    'modern applications',
                    2500,
                    'scalable web platforms',
                    2500,
                    'user-centered designs',
                    2500,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="typed-text-enhanced"
                  repeat={Infinity}
                />
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p 
              className="hero-description-enhanced"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 0.6, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
            >
              Route Academy graduate with 1 year of professional <strong>React development</strong> experience. 
              I love building modern web apps with the <strong>MERN stack</strong> and turning ideas into reality. 
              Based in Kitchener, ON - let's create something amazing together!
            </motion.p>

            {/* Interactive Stats Grid */}
            <motion.div 
              className="hero-stats-enhanced"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.8,
                duration: 0.6,
                type: "spring",
                stiffness: 120
              }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card-enhanced"
                  initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    delay: 0.8 + index * 0.15,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    rotateY: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="stat-number-enhanced">{stat.number}</span>
                  <span className="stat-label-enhanced">{stat.label}</span>
                  <div className="stat-progress" />
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Tech Stack */}
            <motion.div 
              className="tech-stack-enhanced"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 1.0,
                duration: 0.7,
                type: "spring",
                stiffness: 100
              }}
            >
              <span className="tech-label-enhanced">Specializing in:</span>
              <div className="tech-icons-enhanced">
                {techStack.map((tech, index) => (
                  <motion.div 
                    key={index}
                    className="tech-item-enhanced"
                    initial={{ opacity: 0, y: 30, rotateX: -30 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      delay: 1.0 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 120
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -8,
                      rotateY: 10,
                      transition: { duration: 0.2 }
                    }}
                    title={tech.name}
                  >
                    <tech.icon style={{ color: tech.color }} />
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Call to Action */}
            <motion.div 
              className="hero-actions-enhanced"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.button 
                className="btn-primary-enhanced"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                <span className="btn-text">Start Your Project</span>
                <FaRocket className="btn-icon" />
                <div className="btn-shimmer" />
              </motion.button>
              <motion.button 
                className="btn-secondary-enhanced"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('works')}
              >
                <span className="btn-text">Explore Portfolio</span>
                <FaArrowRight className="btn-icon" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Code Visualization Section */}
          <motion.div 
            className="hero-visual-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="code-window">
              <div className="code-header">
                <div className="window-controls">
                  <span className="control close" />
                  <span className="control minimize" />
                  <span className="control maximize" />
                </div>
                <span className="file-name">developer.js</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <span className="code-text">
                    <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">2</span>
                  <span className="code-text">
                    {'  '}<span className="property">name</span>: <span className="string">'FatmaAbuelfateh'</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">3</span>
                  <span className="code-text">
                    {'  '}<span className="property">role</span>: <span className="string">'Full-Stack Developer'</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">4</span>
                  <span className="code-text">
                    {'  '}<span className="property">skills</span>: [<span className="string">'React'</span>, <span className="string">'Node.js'</span>],
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">5</span>
                  <span className="code-text">
                    {'  '}<span className="property">passion</span>: <span className="string">'Creating Amazing UX'</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">6</span>
                  <span className="code-text">
                    {'  '}<span className="property">location</span>: <span className="string">'Kitchener, ON'</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">7</span>
                  <span className="code-text">{'};'}</span>
                </div>
                <motion.div 
                  className="code-line typing-line"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  <span className="line-number">8</span>
                  <span className="code-text">
                    <span className="comment">// Let's build something amazing together!</span>
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Floating Achievement Badges */}
            <div className="achievement-badges">
              <motion.div 
                className="achievement-badge badge-1"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaRocket />
                <span>Route Graduate</span>
              </motion.div>
              <motion.div 
                className="achievement-badge badge-2"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <FaGitAlt />
                <span>7+ Projects</span>
              </motion.div>
              <motion.div 
                className="achievement-badge badge-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <FaReact />
                <span>React Pro</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="scroll-indicator-enhanced"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          onClick={() => scrollToSection('about')}
        >
          <div className="scroll-mouse">
            <motion.div 
              className="scroll-wheel"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="scroll-text-enhanced">Discover More</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaArrowRight className="scroll-arrow-enhanced" style={{ transform: 'rotate(90deg)' }} />
          </motion.div>
        </motion.div>
        </div>
       
    </section>
  )
}

export default Hero
