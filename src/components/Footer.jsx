import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaGlobe, 
  FaHeart,
  FaMapMarkerAlt
} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

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

  const navigationLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'works', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const serviceLinks = [
    'Web Development',
    'UI/UX Design',
    'Mobile Apps',
    'Consulting',
    'Code Review'
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/FatmaHossam5',
      label: 'GitHub',
      className: 'github'
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/fatma-hossam',
      label: 'LinkedIn',
      className: 'linkedin'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:eng.fatma.fateh@gmail.com',
      label: 'Email',
      className: 'email'
    },
    {
      icon: FaGlobe,
      href: '#',
      label: 'Portfolio',
      className: 'portfolio'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <footer className="professional-footer">
      <div className="footer-wave"></div>
      <div className="container">
        <motion.div 
          ref={ref}
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Main Footer Content */}
          <div className="footer-main">
            <div className="footer-grid">
              {/* Brand & Bio Column */}
              <motion.div 
                className="footer-section brand-section"
                variants={itemVariants}
              >
                <div className="footer-brand">
                  <h3 className="brand-name">FatmaAbuelfateh</h3>
                  <p className="brand-title">Software Engineer & Web Developer</p>
                  <p className="brand-description">
                    Passionate about creating innovative digital solutions and bringing ideas to life through clean, efficient code.
                  </p>
                  <div className="availability-status">
                    <span className="status-indicator available"></span>
                    <span>Available for new opportunities</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Quick Links Column */}
              <motion.div 
                className="footer-section"
                variants={itemVariants}
              >
                <h4 className="footer-heading">Navigation</h4>
                <ul className="footer-links">
                  {navigationLinks.map((link, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => scrollToSection(link.id)}
                        className="footer-link"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Services Column */}
              <motion.div 
                className="footer-section"
                variants={itemVariants}
              >
                <h4 className="footer-heading">Services</h4>
                <ul className="footer-links">
                  {serviceLinks.map((service, index) => (
                    <li key={index}>
                      <span className="footer-link service-link">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Contact & Social Column */}
              <motion.div 
                className="footer-section"
                variants={itemVariants}
              >
                <h4 className="footer-heading">Let's Connect</h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <FaEnvelope />
                    <a 
                      href="mailto:eng.fatma.fateh@gmail.com" 
                      className="contact-link"
                    >
                      eng.fatma.fateh@gmail.com
                    </a>
                  </div>
                  <div className="contact-item">
                    <FaMapMarkerAlt />
                    <span>Available Worldwide (Remote)</span>
                  </div>
                </div>
                
                {/* Enhanced Social Links */}
                <div className="social-links-enhanced">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`social-link ${link.className}`}
                      aria-label={link.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <link.icon />
                      <span className="social-tooltip">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <motion.div 
            className="footer-bottom"
            variants={itemVariants}
          >
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>&copy; 2024 FatmaAbuelfateh. All rights reserved.</p>
              </div>
              <div className="footer-meta">
                <span className="made-with">
                  Made with <FaHeart className="heart-icon" /> using modern web technologies
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
