import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaBootstrap, 
  FaGitAlt 
} from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const skillsData = {
    frontend: [
      {
        name: 'HTML5',
        level: 88,
        experience: '3+ years',
        icon: FaHtml5,
        color: '#E34F26'
      },
      {
        name: 'CSS3 & Sass',
        level: 85,
        experience: '3+ years',
        icon: FaCss3Alt,
        color: '#1572B6'
      },
      {
        name: 'JavaScript (ES6+)',
        level: 82,
        experience: '2+ years',
        icon: FaJs,
        color: '#F7DF1E'
      },
      {
        name: 'React.js',
        level: 78,
        experience: '2+ years',
        icon: FaReact,
        color: '#61DAFB'
      }
    ],
    backend: [
      {
        name: 'Node.js',
        level: 72,
        experience: '1.5+ years',
        icon: FaNodeJs,
        color: '#339933'
      },
      {
        name: 'MongoDB',
        level: 68,
        experience: '1+ years',
        icon: FaDatabase,
        color: '#47A248'
      },
      {
        name: 'Bootstrap',
        level: 80,
        experience: '2+ years',
        icon: FaBootstrap,
        color: '#7952B3'
      },
      {
        name: 'Git & GitHub',
        level: 75,
        experience: '2+ years',
        icon: FaGitAlt,
        color: '#F05032'
      }
    ]
  }


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

  const SkillItem = ({ skill, index }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0)

    useEffect(() => {
      if (inView) {
        const timer = setTimeout(() => {
          setAnimatedLevel(skill.level)
        }, index * 100)

        return () => clearTimeout(timer)
      }
    }, [inView, skill.level, index])

    return (
      <motion.div 
        className="skill-item"
        variants={itemVariants}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <div className="skill-header">
          <div className="skill-info">
            <skill.icon 
              className="skill-icon" 
              style={{ color: skill.color }}
            />
            <div className="skill-details">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-experience">{skill.experience}</span>
            </div>
          </div>
        </div>
        <div className="skills-progress">
          <div className="skills-progress-track">
            <motion.div 
              className="skills-progress-fill"
              initial={{ width: 0 }}
              animate={{ width: inView ? `${animatedLevel}%` : 0 }}
              transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
              style={{ 
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`
              }}
            />
          </div>
          <span className="skills-progress-percentage">{animatedLevel}%</span>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          ref={ref}
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div 
            className="section-header"
            variants={itemVariants}
          >
            <span className="section-tag">Expertise</span>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-description">
              Professional experience and continuous learning across modern web technologies
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="skills-container">
            {/* Frontend Skills */}
            <motion.div 
              className="skills-category"
              variants={itemVariants}
            >
              <div className="category-header">
                <h3 className="category-title">Frontend Development</h3>
                <p className="category-description">Building responsive and interactive user interfaces</p>
              </div>
              <div className="skills-grid">
                {skillsData.frontend.map((skill, index) => (
                  <SkillItem key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Backend & Tools */}
            <motion.div 
              className="skills-category"
              variants={itemVariants}
            >
              <div className="category-header">
                <h3 className="category-title">Backend & Tools</h3>
                <p className="category-description">Server-side development and development tools</p>
              </div>
              <div className="skills-grid">
                {skillsData.backend.map((skill, index) => (
                  <SkillItem key={skill.name} skill={skill} index={index + skillsData.frontend.length} />
                ))}
              </div>
            </motion.div>

            {/* Skill Legend */}
            <motion.div 
              className="skills-legend"
              variants={itemVariants}
            >
              <div className="legend-items">
                <div className="legend-item">
                  <span className="legend-dot expert"></span>
                  <span className="legend-text">Expert (90%+)</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot professional"></span>
                  <span className="legend-text">Professional (80-89%)</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot proficient"></span>
                  <span className="legend-text">Proficient (70-79%)</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot intermediate"></span>
                  <span className="legend-text">Intermediate (60-69%)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
