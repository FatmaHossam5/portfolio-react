import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaMapPin, 
  FaPhone, 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaSpinner
} from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    message: '',
    type: ''
  })

  const [formErrors, setFormErrors] = useState({})

  const contactMethods = [
    {
      icon: FaMapPin,
      label: 'Location',
      value: 'Cairo, Egypt',
      isLink: false
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+20 106 191 8496',
      isLink: true,
      href: 'tel:+201061918496'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'eng.fatma.fateh@gmail.com',
      isLink: true,
      href: 'mailto:eng.fatma.fateh@gmail.com'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'FatmaHossam5',
      isLink: true,
      href: 'https://github.com/FatmaHossam5'
    }
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/FatmaHossam5',
      label: 'GitHub Profile'
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/fatma-hossam',
      label: 'LinkedIn Profile'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:eng.fatma.fateh@gmail.com',
      label: 'Send Email'
    }
  ]

  const validateForm = () => {
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 5) {
      errors.subject = 'Subject must be at least 5 characters'
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const simulateFormSubmission = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate 90% success rate
        if (Math.random() > 0.1) {
          resolve()
        } else {
          reject(new Error('Simulation error'))
        }
      }, 2000)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        message: 'Please correct the errors above.',
        type: 'error'
      })
      return
    }

    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      message: '',
      type: ''
    })

    try {
      await simulateFormSubmission()
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        message: 'Thank you! Your message has been sent successfully.',
        type: 'success'
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
      setFormErrors({})
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        message: 'Sorry, there was an error sending your message. Please try again.',
        type: 'error'
      })
    }
  }

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
          {/* Section Header */}
          <motion.div 
            className="section-header"
            variants={itemVariants}
          >
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-description">
              Ready to collaborate? I'd love to hear about your next project.
            </p>
          </motion.div>

          <div className="contact-grid">
            {/* Contact Information */}
            <motion.div 
              className="contact-info-wrapper"
              variants={itemVariants}
            >
              <h3 className="contact-info-title">Get In Touch</h3>
              
              {/* Contact Methods */}
              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <motion.div 
                    key={index}
                    className="contact-method"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="contact-icon-wrapper">
                      <method.icon className="contact-icon" />
                    </div>
                    <div className="contact-details">
                      <h4 className="contact-label">{method.label}</h4>
                      {method.isLink ? (
                        <a 
                          href={method.href}
                          className="contact-value contact-link"
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="contact-value">{method.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="social-connect">
                <h4 className="social-title">Connect With Me</h4>
                <div className="social-links-professional">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      className="social-link-pro"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={link.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <link.icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="contact-form-wrapper"
              variants={itemVariants}
            >
              <h3 className="contact-form-title">Send a Message</h3>
              
              {/* Form Status Message */}
              {formStatus.message && (
                <motion.div 
                  className={`form-message ${formStatus.type === 'success' ? 'success' : 'error'}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {formStatus.type === 'success' ? <FaCheckCircle /> : <FaExclamationTriangle />}
                  {formStatus.message}
                </motion.div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${formErrors.name ? 'error' : ''}`}
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={formStatus.isSubmitting}
                  />
                  {formErrors.name && (
                    <span className="error-message">{formErrors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${formErrors.email ? 'error' : ''}`}
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={formStatus.isSubmitting}
                  />
                  {formErrors.email && (
                    <span className="error-message">{formErrors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    className={`form-control ${formErrors.subject ? 'error' : ''}`}
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={formStatus.isSubmitting}
                  />
                  {formErrors.subject && (
                    <span className="error-message">{formErrors.subject}</span>
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    className={`form-control contact-textarea ${formErrors.message ? 'error' : ''}`}
                    rows="5"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={formStatus.isSubmitting}
                  />
                  {formErrors.message && (
                    <span className="error-message">{formErrors.message}</span>
                  )}
                </div>

                <motion.button 
                  type="submit"
                  className="contact-submit-btn"
                  disabled={formStatus.isSubmitting}
                  whileHover={{ scale: formStatus.isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: formStatus.isSubmitting ? 1 : 0.98 }}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <FaSpinner className="btn-icon spinning" />
                      <span className="btn-text">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="btn-text">Send Message</span>
                      <FaPaperPlane className="btn-icon" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
