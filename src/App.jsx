
import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <nav className="navbar">
        <h2 className="logo">DA<span>.</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HOME */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Dagmawit Anmut</span>
          </h1>

          <h2>Software Engineering Student</h2>

          <p>
            A fourth-year Software Engineering student at Bahir Dar
            University, passionate about web development and building
            useful technology solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Work
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <p className="section-label">GET TO KNOW ME</p>

        <h2>About Me</h2>

        <p>
          I am a fourth-year Software Engineering student at Bahir Dar
          University, Ethiopia, with a strong interest in web development
          and software engineering.
        </p>

        <p>
          I enjoy learning new technologies, solving real-world problems,
          and building practical applications. I am continuously improving
          my technical skills through personal projects and hands-on practice.
        </p>

        <p>
          My goal is to become a skilled software engineer and contribute
          to meaningful technology solutions.
        </p>
      </section>

     
{/* SKILLS */}
<section className="section" id="skills">
  <p className="section-label">WHAT I AM LEARNING</p>

  <h2>My Skills</h2>

  <div className="skills-grid">
    {[
      {
        name: 'HTML',
        icon: 'html5/html5-original.svg'
      },
      {
        name: 'CSS',
        icon: 'css3/css3-original.svg'
      },
      {
        name: 'JavaScript',
        icon: 'javascript/javascript-original.svg'
      },
      {
        name: 'React',
        icon: 'react/react-original.svg'
      },
      {
        name: 'Node.js',
        icon: 'nodejs/nodejs-original.svg'
      },
      {
        name: 'Express.js',
        icon: 'express/express-original.svg'
      },
      {
        name: 'SQLite',
        icon: 'sqlite/sqlite-original.svg'
      },
      {
        name: 'Git',
        icon: 'git/git-original.svg'
      }
    ].map((skill) => (
      <div className="skill-card" key={skill.name}>
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
          alt={`${skill.name} icon`}
        />
        <h3>{skill.name}</h3>
      </div>
    ))}
  </div>
</section>


      {/* PROJECTS */}
      <section className="section" id="projects">
        <p className="section-label">MY RECENT WORK</p>

        <h2>Featured Projects</h2>

        <div className="projects-grid">

          {/* PROJECT 1 */}
          <div className="project-card">
            <h3>Habesha Catering</h3>

            <p>
              A full-stack website showcasing Ethiopian traditional food.
            </p>

            <span>React · Node.js · SQLite</span>

            <a
              href="https://github.com/Habld/Habesha-Catering"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>

          {/* PROJECT 2 */}
          <div className="project-card">
            <h3>Calculator</h3>

            <p>
              A simple calculator application built with web technologies.
            </p>

            <span>HTML · CSS · JavaScript</span>

            <a
              href="https://github.com/Habld/CodeAlpha_Calculator"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>

          {/* PROJECT 3 */}
          <div className="project-card">
            <h3>Image Gallery</h3>

            <p>
              A web application for displaying and organizing images.
            </p>

            <span>HTML · CSS · JavaScript</span>

            <a
              href="https://github.com/Habld/CodeAlpha_ImageGallery"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>

          {/* PROJECT 4 */}
          <div className="project-card">
            <h3>Music Player</h3>

            <p>
              A web-based music player application.
            </p>

            <span>HTML · CSS · JavaScript</span>

            <a
              href="https://github.com/Habld/CodeAlpha_MusicPlayer"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact" id="contact">
        <p className="section-label">LET'S CONNECT</p>

        <h2>Contact Me</h2>

        <p>
          I'm interested in learning, collaborating, and building new projects.
        </p>

        <a
          href="https://github.com/Habld"
          target="_blank"
          rel="noreferrer"
        >
          Visit My GitHub
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Dagmawit Anmut. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App
