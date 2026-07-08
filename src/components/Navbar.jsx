import "../styles/navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <a href="#home" className="logo">
          <div className="logo-box">MM</div>

          <div className="logo-text">
            <h2>Maureen Muchoki</h2>
            <span>Data Analyst</span>
          </div>
        </a>

        {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Download CV */}
        <a href="#" className="btn btn-primary">
          Download CV
        </a>

      </div>
    </header>
  );
};

export default Navbar;