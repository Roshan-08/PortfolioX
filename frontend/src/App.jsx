import { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  useEffect(() => {
  const elements = document.querySelectorAll(".reveal-on-scroll");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => {
      element.classList.add("is-visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);
return (
<> <Navbar />


  <main>
    <section className="hero-section" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">
          <span className="status-dot"></span>
          OPEN TO OPPORTUNITIES
        </p>

        <h1>
          Hi, I'm <span className="gradient-text">Roshan Kumar</span>
          <br />
          I build things with <span className="gradient-text">Python</span>
          .
        </h1>

        <p className="hero-description">
          Computer Science graduate passionate about Python development,
          Artificial Intelligence, and Machine Learning. I enjoy turning
          ideas into useful, reliable applications.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore My Work <span aria-hidden="true">↗</span>
          </a>

          <a className="button button-secondary" href="#contact">
            Contact Me
          </a>
              
          <a
            href="/resume.pdf"
            download="Roshan_Kumar_Mahto_Resume.pdf"
            className="resume-button"
          >
            <span>Download Resume</span>
          </a>
        </div>

        <div className="hero-tech">
          <span>TECH I WORK WITH</span>
          <div className="tech-tags">
            <span>Python</span>
            <span>FastAPI</span>
            <span>React</span>
            <span>SQL</span>
            <span>AI / ML</span>
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-label="Developer introduction">
        <div className="visual-orbit orbit-one"></div>
        <div className="visual-orbit orbit-two"></div>

        <div className="visual-core">
          <span className="core-symbol">&lt;/&gt;</span>
          <span className="core-label">BUILD · LEARN · CREATE</span>
        </div>

        <div className="floating-card card-python">
          <span className="card-icon">Py</span>
          <div>
            <strong>Python</strong>
            <small>Backend &amp; AI</small>
          </div>
        </div>

        <div className="floating-card card-ai">
          <span className="card-icon">✳</span>
          <div>
            <strong>AI / ML</strong>
            <small>Intelligent solutions</small>
          </div>
        </div>

        <div className="visual-caption">
          <span className="caption-line"></span>
          <span>CREATIVE MINDSET · ENGINEERING LOGIC</span>
        </div>
      </div>
    </section>


    <section className="about-section reveal-on-scroll" id="about">
      <p className="section-eyebrow">ABOUT ME</p>

      <h2>
        Building practical solutions with{" "}
        <span className="gradient-text">Python and AI.</span>
      </h2>

      <p className="about-description">
        I'm a Computer Science graduate interested in Python development,
        backend engineering, and Artificial Intelligence and Machine Learning.
        I enjoy turning ideas into useful applications through clean code,
        reliable APIs, and thoughtful problem-solving.
      </p>

      <p className="about-description">
        My current work includes an AI-powered text summarization application
        built with FastAPI and Google Gemini, with input validation, caching,
        rate limiting, and automated tests. I'm also developing my frontend
        skills with React to build complete, user-friendly applications.
      </p>

      <div className="about-highlights">
        <div className="about-highlight">
          <strong>Backend Development</strong>
          <span>Python, FastAPI, REST APIs</span>
        </div>

        <div className="about-highlight">
          <strong>AI Integration</strong>
          <span>LLM APIs and AI-powered applications</span>
        </div>

        <div className="about-highlight">
          <strong>Engineering Practices</strong>
          <span>Validation, testing, and maintainable code</span>
        </div>
      </div>
    </section>


    <section className="skills-section reveal-on-scroll" id="skills">
      <p className="section-eyebrow">TECHNICAL TOOLKIT</p>

      <h2>Skills I use to build and learn.</h2>

      <p className="skills-description">
        A growing toolkit across software development, backend engineering,
        and AI-powered applications.
      </p>

      <div className="skills-grid">
        <article className="skill-card">
          <span className="skill-number">01</span>
          <h3>Programming</h3>
          <div className="skill-tags">
            <span>Python</span>
            <span>JavaScript</span>
            <span>SQL</span>
            <span>Java</span>
          </div>
        </article>

        <article className="skill-card">
          <span className="skill-number">02</span>
          <h3>Backend Development</h3>
          <div className="skill-tags">
            <span>FastAPI</span>
            <span>REST APIs</span>
            <span>Pydantic</span>
            <span>Input Validation</span>
          </div>
        </article>

        <article className="skill-card">
          <span className="skill-number">03</span>
          <h3>AI and Data</h3>
          <div className="skill-tags">
            <span>Google Gemini API</span>
            <span>NumPy</span>
            <span>Pandas</span>
            <span>Scikit-learn</span>
          </div>
        </article>

        <article className="skill-card">
          <span className="skill-number">04</span>
          <h3>Frontend Development</h3>
          <div className="skill-tags">
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Responsive Design</span>
          </div>
        </article>

        <article className="skill-card">
          <span className="skill-number">05</span>
          <h3>Testing and Tools</h3>
          <div className="skill-tags">
            <span>pytest</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
          </div>
        </article>

        <article className="skill-card">
          <span className="skill-number">06</span>
          <h3>Databases and Workflow</h3>
          <div className="skill-tags">
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>Virtual Environments</span>
            <span>API Testing</span>
          </div>
        </article>
      </div>
    </section>


    <section className="coming-section projects-section reveal-on-scroll" id="projects">
      <p className="section-eyebrow">SELECTED WORK</p>
      <h2>Projects that turn ideas into applications.</h2>
      <p className="skills-description">
        A selection of my work in backend development, AI integration,
        and interactive web experiences.
      </p>

      <div className="project-preview reveal-on-scroll">
        <span className="project-number">01</span>
        <div>
          <h3>AI Text Summarizer</h3>
          <p>
            An AI-powered text summarization application using FastAPI
            and Google Gemini. The backend includes input validation,
            response caching, rate limiting, standardized API responses,
            and automated tests. Frontend and Docker integration are
            ongoing.
          </p>
          <span className="project-stack">
            Python / FastAPI / Gemini / pytest
          </span>
          <p className="project-status">
            Status: In development
          </p>
            <a
              className="button button-secondary project-link"
              href="https://github.com/Roshan-08/AI-Text-Summarizer"
              target="_blank"
              rel="noreferrer"
            >
              View Source Code <span aria-hidden="true">&#8599;</span>
            </a>
        </div>
        <span className="project-arrow" aria-hidden="true">↗</span>
      </div>


      <div className="project-preview reveal-on-scroll">
        <span className="project-number">02</span>
        <div>
          <h3>PortfolioX</h3>
          <p>
            An interactive personal portfolio built with React and
            JavaScript, featuring animated sections, responsive layouts,
            technical skills, project showcases, and professional contact links.
          </p>
          <span className="project-stack">React / JavaScript / CSS</span>
          <p className="project-status">
            Status: Active development
          </p>
            <a
              className="button button-secondary project-link"
              href="https://github.com/Roshan-08/PortfolioX"
              target="_blank"
              rel="noreferrer"
            >
              View Source Code <span aria-hidden="true">&#8599;</span>
            </a>
        </div>
        <span className="project-arrow" aria-hidden="true">↗</span>
      </div>
    </section>


    <section className="contact-section reveal-on-scroll" id="contact">
      <p className="section-eyebrow">LET'S CONNECT</p>
      <h2>Have an opportunity in mind?</h2>
      <p>
        I'm interested in Python development and AI/ML opportunities where
        I can learn, contribute, and build meaningful software.
      </p>
      <a
        className="button button-primary"
        href="https://github.com/Roshan-08"
        target="_blank"
        rel="noreferrer"
      >
        Visit My GitHub <span aria-hidden="true">↗</span>
      </a>
      <a
        className="button button-secondary"
        href="https://www.linkedin.com/in/roshan-kumar-8041bb257"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with Roshan Kumar on LinkedIn"
      >
        Connect on LinkedIn <span aria-hidden="true">↗</span>
      </a>

    </section>
  </main>

  <footer className="site-footer">
    <a className="brand" href="#home">
      Portfolio<span>X</span><span className="brand-dot">.</span>
    </a>
    <p>Designed &amp; built by Roshan Kumar.</p>
  </footer>
</>


);
}

export default App;
