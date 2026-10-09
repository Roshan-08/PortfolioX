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

    
    <section className="intro-strip reveal-on-scroll" id="about">
      <p>
        BUILDING MY SKILLS THROUGH <strong>REAL-WORLD PROJECTS</strong>
      </p>
      <span>Curiosity drives the code.</span>
    </section>

    
    <section className="coming-section reveal-on-scroll" id="skills">
  
      <p className="section-eyebrow">MY TOOLKIT</p>
      <h2>Technologies I'm working with</h2>
      <p>
        Python · FastAPI · React · JavaScript · SQL · Git · Machine Learning
      </p>
    </section>

    
    <section className="coming-section projects-section reveal-on-scroll" id="projects">
      <p className="section-eyebrow">SELECTED WORK</p>
      <h2>Projects built to solve problems.</h2>

      
      <div className="project-preview reveal-on-scroll">
        <span className="project-number">01</span>
        <div>
          <h3>AI Text Summarizer</h3>
          <p>
            An AI-powered application built with FastAPI and Google Gemini,
            with backend validation, caching, rate limiting, and automated
            tests.
          </p>
          <span className="project-stack">
            Python / FastAPI / Gemini / pytest
          </span>
        </div>
        <span className="project-arrow" aria-hidden="true">↗</span>
      </div>

      
      <div className="project-preview reveal-on-scroll">
        <span className="project-number">02</span>
        <div>
          <h3>PortfolioX</h3>
          <p>
            My interactive developer portfolio, built with React and
            designed to grow alongside my technical skills.
          </p>
          <span className="project-stack">React / JavaScript / CSS</span>
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
