import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaSearch, 
  FaReact, 
  FaJs,
  FaThLarge,
  FaNodeJs,
  FaServer
} from 'react-icons/fa'
import './Works.css'

const Works = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProjects, setFilteredProjects] = useState([])
  const [stats, setStats] = useState({
    projects: 0,
    categories: 0,
    responsive: 0
  })

  const projects = [
    {
      id: 1,
      title: 'StayCation Booking',
      description: 'Modern hotel booking application with React, TypeScript, and Material-UI featuring user authentication and admin dashboard',
      image: '/portfolio-react/images/staycation-thumbnail.svg',
      fallbackImage: '/portfolio-react/images/Screenshot 2023-05-21 140809.png',
      category: 'react',
      technologies: ['React.js', 'TypeScript', 'Material-UI', 'Context API', 'Authentication'],
      liveUrl: 'https://fatmahossam5.github.io/stayCation_Booking/',
      githubUrl: 'https://github.com/FatmaHossam5/stayCation_Booking'
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'Real-time weather information application with location detection and 5-day forecast',
      image: '/portfolio-react/images/Screenshot 2023-05-20 155510.png',
      category: 'javascript',
      technologies: ['JavaScript', 'Weather API', 'CSS3', 'Geolocation'],
      liveUrl: 'https://fatmahossam5.github.io/weather_app/',
      githubUrl: 'https://github.com/FatmaHossam5/weather_app'
    },
    {
      id: 3,
      title: 'MovieReact',
      description: 'Comprehensive movie discovery platform with advanced search, ratings, and watchlist functionality',
      image: '/portfolio-react/images/MovieReact.png',
      fallbackImage: '/portfolio-react/images/Screenshot 2023-05-21 140809.png',
      category: 'react',
      technologies: ['React.js', 'TMDb API', 'Bootstrap', 'Router'],
      liveUrl: 'https://fatmahossam5.github.io/moviesReact/',
      githubUrl: 'https://github.com/FatmaHossam5/moviesReact'
    },
    {
      id: 4,
      title: 'Angora E-commerce',
      description: 'Feature-rich e-commerce platform with shopping cart, product filtering, and responsive design',
      image: '/portfolio-react/images/Screenshot 2023-05-20 155710.png',
      category: 'fullstack',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage', 'E-commerce'],
      liveUrl: 'https://fatmahossam5.github.io/Angora/',
      githubUrl: 'https://github.com/FatmaHossam5/Angora'
    },
    {
      id: 5,
      title: 'Smart Login System',
      description: 'Secure authentication system with form validation, password strength checker, and session management',
      image: '/portfolio-react/images/smartlogin.png',
      category: 'javascript',
      technologies: ['JavaScript', 'Local Storage', 'Bootstrap', 'Validation'],
      liveUrl: 'https://fatmahossam5.github.io/smartLogin/',
      githubUrl: 'https://github.com/FatmaHossam5/smartLogin'
    },

    {
      id: 7,
      title: 'Party Event Planner',
      description: 'Interactive event planning application featuring smooth animations, countdown timer, and dynamic content',
      image: '/portfolio-react/images/party.png',
      category: 'javascript',
      technologies: ['jQuery', 'CSS3', 'Animations', 'Responsive'],
      liveUrl: 'https://fatmahossam5.github.io/party_jq/',
      githubUrl: 'https://github.com/FatmaHossam5/party_jq'
    },

   
    {
      id: 13,
      title: 'Portfolio React',
      description: 'Modern responsive portfolio website built with React, featuring animated components, project showcase, and contact form',
      image: '/portfolio-react/images/portfolio-react.png',
      fallbackImage: '/portfolio-react/images/staycation-thumbnail.svg',
      category: 'react',
      technologies: ['React.js', 'Framer Motion', 'CSS3', 'Responsive Design', 'Vite'],
      liveUrl: 'https://fatmahossam5.github.io/portfolio-react/',
      githubUrl: 'https://github.com/FatmaHossam5/portfolio-react'
    },
    {
      id: 14,
      title: 'User Portal',
      description: 'Interactive user portal application with food-related features, user management, and modern UI design',
      image: '/portfolio-react/images/UserportalFood.png',
      fallbackImage: '/portfolio-react/images/staycation-thumbnail.svg',
      category: 'react',
      technologies: ['React.js', 'JavaScript', 'CSS3', 'User Interface', 'Responsive Design'],
      liveUrl: 'https://fatmahossam5.github.io/user-Portal/',
      githubUrl: 'https://github.com/FatmaHossam5/user-Portal'
    },
    {
      id: 15,
      title: 'Quiz App',
      description: 'Interactive quiz application with multiple choice questions, scoring system, and engaging user experience',
      image: '/portfolio-react/images/Quiz.png',
      fallbackImage: '/portfolio-react/images/staycation-thumbnail.svg',
      category: 'react',
      technologies: ['React.js', 'JavaScript', 'CSS3', 'Quiz Logic', 'State Management'],
      liveUrl: 'https://fatmahossam5.github.io/quiz-app-github-pages/',
      githubUrl: 'https://github.com/FatmaHossam5/quiz-app-github-pages'
    },
    {
      id: 16,
      title: 'Food App',
      description: 'Comprehensive food application with admin panel, menu management, and user-friendly interface for food ordering',
      image: '/portfolio-react/images/AdminFood.png',
      fallbackImage: '/portfolio-react/images/staycation-thumbnail.svg',
      category: 'react',
      technologies: ['React.js', 'JavaScript', 'CSS3', 'Admin Panel', 'Food Management'],
      liveUrl: 'https://fatmahossam5.github.io/Food-App/',
      githubUrl: 'https://github.com/FatmaHossam5/Food-App'
    },
    {
      id: 17,
      title: 'Note App Node.js',
      description: 'Full-featured note-taking application with CRUD operations, user authentication, and real-time updates',
      image: '/portfolio-react/images/node.png',
      fallbackImage: '/portfolio-react/images/staycation-thumbnail.svg',
      category: 'nodejs',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
      liveUrl: 'https://note-app-node-js-9er0-git-main-fatmahossam5s-projects.vercel.app?_vercel_share=kQSS05cKCUtNago1R7cbbkckuHZomcae',
      githubUrl: 'https://github.com/FatmaHossam5/NoteApp_NodeJs'
    },
    {
      id: 18,
      title: 'E-commerce',
      description: 'Full-stack e-commerce application with product management, shopping cart, payment integration, and admin dashboard',
      image: '/portfolio-react/images/node.png',
      fallbackImage: '/portfolio-react/images/staycation-thumbnail.svg',
      category: 'nodejs',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Payment API', 'Admin Panel'],
      liveUrl: 'https://e-commerce-git-main-fatmahossam5s-projects.vercel.app?_vercel_share=xMSEwyP8LH6xYox1EAlyUKH96DIAvLhQ',
      githubUrl: 'https://github.com/FatmaHossam5/e-commerce'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', icon: FaThLarge },
    { id: 'react', label: 'React', icon: FaReact },
    { id: 'javascript', label: 'JavaScript', icon: FaJs },
    { id: 'nodejs', label: 'Node.js', icon: FaNodeJs },
    { id: 'fullstack', label: 'FullStack', icon: FaServer }
  ]

  // Animate stats when component comes into view
  useEffect(() => {
    if (inView) {
      const animateStats = () => {
        const targetStats = {
          projects: projects.length,
          categories: filters.length - 1,
          responsive: 100
        }

        Object.keys(targetStats).forEach(key => {
          let current = 0
          const target = targetStats[key]
          const increment = target / 50
          
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              current = target
              clearInterval(timer)
            }
            setStats(prev => ({ ...prev, [key]: Math.floor(current) }))
          }, 40)
        })
      }

      setTimeout(animateStats, 500)
    }
  }, [inView])

  // Filter projects based on active filter and search term
  useEffect(() => {
    let filtered = projects

    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => project.category === activeFilter)
    }

    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }

    setFilteredProjects(filtered)
  }, [activeFilter, searchTerm])

  const handleImageError = (e, fallbackImage) => {
    if (fallbackImage) {
      e.target.src = fallbackImage
    }
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

  const ProjectCard = ({ project, index }) => (
    <motion.div
      className="project-item"
      variants={itemVariants}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="project-card">
        <div className="project-image">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            onError={(e) => handleImageError(e, project.fallbackImage)}
          />
          <div className="project-overlay">
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaExternalLinkAlt />
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="works" className="works-section">
      <div className="container">
        <motion.div 
          ref={ref}
          className="works-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div 
            className="section-header"
            variants={itemVariants}
          >
            <h2 className="section-title">Works</h2>
            <p className="section-description">
              Explore my portfolio of innovative web applications and development projects
            </p>
            
            {/* Stats */}
            <div className="works-stats">
              <div className="stat-item">
                <h3 className="stat-number">{stats.projects}</h3>
                <p className="stat-label">Projects</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">{stats.categories}</h3>
                <p className="stat-label">Categories</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">{stats.responsive}%</h3>
                <p className="stat-label">Responsive</p>
              </div>
            </div>
          </motion.div>

          {/* Search */}
          <motion.div 
            className="project-search-container"
            variants={itemVariants}
          >
            <div className="search-wrapper">
              <input
                type="text"
                className="project-search"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="search-icon" />
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="filter-buttons"
            variants={itemVariants}
          >
            {filters.map(filter => (
              <motion.button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <filter.icon />
                <span>{filter.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Count */}
          <motion.div 
            className="projects-count"
            variants={itemVariants}
          >
            <p>
              Showing <span className="count-number">{filteredProjects.length}</span>{' '}
              <span className="category-name">
                {searchTerm ? `results for "${searchTerm}"` : 
                 activeFilter === 'all' ? 'projects' : `${activeFilter} projects`}
              </span>
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div 
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p>No projects found matching your criteria.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Works
