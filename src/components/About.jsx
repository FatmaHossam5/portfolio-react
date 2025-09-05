import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaDownload, 
  FaCircle, 
  FaCode, 
  FaLaptopCode, 
  FaMobile, 
  FaServer,
  FaGraduationCap,
  FaCertificate,
  FaAward,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaRocket
} from 'react-icons/fa'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const personalInfo = [
    { 
      label: 'Location', 
      value: 'Kitchener, ON, Canada',
      icon: FaMapMarkerAlt
    },
    { 
      label: 'Experience', 
      value: '1+ Year Professional Experience',
      icon: FaCalendarAlt
    },
    { 
      label: 'Email', 
      value: 'eng.fatma.fateh@gmail.com',
      isLink: true,
      href: 'mailto:eng.fatma.fateh@gmail.com',
      icon: FaEnvelope
    },
    { 
      label: 'Phone', 
      value: '+1 (548) 255-1105',
      isLink: true,
      href: 'tel:+15482551105',
      icon: FaPhone
    }
  ]

  const expertise = [
    {
      icon: FaLaptopCode,
      title: 'Frontend Development',
      description: 'HTML5, CSS3, JavaScript ES6+, React.js, Bootstrap',
      level: 88
    },
    {
      icon: FaServer,
      title: 'Backend Development', 
      description: 'Node.js, Express.js, RESTful APIs, Server-side Logic',
      level: 75
    },
    {
      icon: FaCode,
      title: 'State Management',
      description: 'React Context API, Component State, Props Management',
      level: 82
    },
    {
      icon: FaMobile,
      title: 'Database & Tools',
      description: 'MongoDB, Git/GitHub, Modern Development Workflow',
      level: 78
    }
  ]

  const achievements = [
    {
      icon: FaGraduationCap,
      title: 'Route Academy Graduate',
      description: 'Full Stack Web Development Program - MERN Stack Specialization'
    },
    {
      icon: FaRocket,
      title: 'Professional Experience',
      description: '1+ Years React Developer with Modern Web Technologies'
    },
    {
      icon: FaAward,
      title: 'Continuous Learning',
      description: 'Ongoing Professional Development & Industry Best Practices'
    }
  ]

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}FatmaAbuelfateh_Resume.pdf`;
    link.download = 'Fatma_Abuelfateh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div 
            className="section-header-centered"
            variants={itemVariants}
          >
            <span className="section-tag">Get to know me</span>
            <h2 className="section-title">About Me</h2>
            <p className="section-description">
              Hi there! I'm a passionate full-stack developer who discovered my love for coding through an 
              incredible journey at Route Academy. What started as curiosity turned into a year of professional 
              React development, where I've had the joy of bringing ideas to life through the MERN stack. 
              I believe great code tells a story, and I love crafting digital experiences that make a difference.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="about-main-grid">
            
            {/* Personal Info & Contact */}
            <motion.div 
              className="about-info-section"
              variants={itemVariants}
            >
              <h3 className="subsection-title">
                <FaCircle className="title-icon" />
                Professional Details
              </h3>
              <div className="info-cards-grid">
                {personalInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="info-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="info-icon">
                      <info.icon />
                    </div>
                    <div className="info-content">
                      <span className="info-label">{info.label}</span>
                      <div className="info-value">
                        {info.isLink ? (
                          <a 
                            href={info.href} 
                            className="contact-link"
                            target={info.href.startsWith('mailto:') ? undefined : '_blank'}
                            rel={info.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                          >
                            {info.value}
                          </a>
                        ) : (
                          info.value
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Expertise Section */}
            <motion.div 
              className="about-expertise-section"
              variants={itemVariants}
            >
              <h3 className="subsection-title">
                <FaCode className="title-icon" />
                Core Expertise
              </h3>
              <div className="expertise-grid">
                {expertise.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="expertise-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -3 }}
                  >
                    <div className="expertise-header">
                      <div className="expertise-icon">
                        <skill.icon />
                      </div>
                      <div className="expertise-info">
                        <h4 className="expertise-title">{skill.title}</h4>
                        <p className="expertise-description">{skill.description}</p>
                      </div>
                    </div>
                    <div className="skill-level">
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                        />
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div 
              className="about-achievements-section"
              variants={itemVariants}
            >
              <h3 className="subsection-title">
                <FaAward className="title-icon" />
                Key Achievements
              </h3>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    className="achievement-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                  >
                    <div className="achievement-icon">
                      <achievement.icon />
                    </div>
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-description">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            className="about-actions-enhanced"
            variants={itemVariants}
          >
            <motion.button 
              className="btn-download-enhanced"
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="btn-icon" />
              <span className="btn-text">Download Resume</span>
              <div className="btn-shimmer" />
            </motion.button>
            
            <motion.div 
              className="availability-status"
              whileHover={{ scale: 1.02 }}
            >
              <div className="status-indicator">
                <FaCircle className="status-dot" />
                <span className="status-text">Available for freelance projects</span>
              </div>
              <p className="status-subtitle">Ready to bring your ideas to life</p>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default About
