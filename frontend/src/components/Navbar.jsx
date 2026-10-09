function Navbar() {
return ( <header className="site-header"> <nav className="navbar" aria-label="Main navigation"> <a className="brand" href="#home">
Portfolio<span>X</span> <span className="brand-dot">.</span> </a>


    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
    </div>

    <a className="nav-contact" href="#contact">
      Let's Talk <span aria-hidden="true">↗</span>
    </a>
  </nav>
</header>


);
}

export default Navbar;

