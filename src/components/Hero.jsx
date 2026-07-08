import "../styles/hero.css";
import profile from "../data/profile";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        {/* Left Side */}
        <div className="hero-content">

          <span className="hero-greeting">
            Hello, I'm 👋
          </span>

          <h1>{profile.name}</h1>

          <h2>{profile.title}</h2>

          <p>
            {profile.intro}
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href={profile.resume} className="btn btn-secondary">
              Download CV
            </a>

          </div>

          <div className="hero-social">

            <a href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href={`mailto:${profile.email}`}>
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="hero-image">

          {/* Replace this with your photo later */}

          <div className="photo-card">

            <div className="photo-placeholder">

              MM

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;