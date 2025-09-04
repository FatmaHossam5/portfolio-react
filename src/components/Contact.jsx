import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaGithub, 
  FaLinkedinIn,
  FaFileDownload,
  FaArrowRight,
  FaGlobe
} from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const contactInfo = {
    location: 'Kitchener, ON, Canada',
    email: 'eng.fatma.fateh@gmail.com',
    phone: '(548) 255-1105',
    availability: 'Available for new opportunities',
    timezone: 'EST'
  }

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/FatmaHossam5',
      label: 'GitHub',
      color: '#333'
    },
    {
      icon: FaLinkedinIn,
      href: 'https://www.linkedin.com/in/fatmaabuelfateh',
      label: 'LinkedIn',
      color: '#0077B5'
    },
    {
      icon: FaFileDownload,
      href: '#resume',
      label: 'Resume',
      color: '#FF6B6B'
    }
  ]



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          ref={ref}
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="contact-header" variants={itemVariants}>
            <h2 className="contact-title">Let's Work Together</h2>
            <p className="contact-subtitle">
              Ready to bring your next project to life? Let's connect and discuss how I can contribute to your team.
            </p>
          </motion.div>

          {/* Main Contact Card */}
          <motion.div className="contact-main-card" variants={itemVariants}>
            <div className="contact-card-content">
              {/* Left Side - Contact Info */}
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">{contactInfo.location}</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <a 
                      href={`mailto:${contactInfo.email}?subject=Job%20Opportunity%20Inquiry`}
                      className="contact-value contact-link"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Phone</span>
                    <a 
                      href={`tel:+15482551105`}
                      className="contact-value contact-link"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="availability-badge">
                  <div className="availability-dot"></div>
                  <span>{contactInfo.availability}</span>
                </div>
              </div>

              {/* Right Side - CTA */}
              <div className="contact-cta">
                <h3>Ready to start a conversation?</h3>
                <p>I'm always excited to discuss new opportunities and innovative projects.</p>
                
                <motion.a
                  href="https://www.linkedin.com/in/fatmaabuelfateh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-cta-button"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get In Touch</span>
                  <FaArrowRight className="cta-icon" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div className="social-section" variants={itemVariants}>
            <h3 className="social-title">Find me on</h3>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="social-link"
                  style={{ '--link-color': link.color }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="social-icon" />
                  <span className="social-label">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
