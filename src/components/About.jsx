import "../styles/about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="section-heading">
          <p className="section-subtitle">About Me</p>
          <h2>Get to Know Me</h2>
        </div>

        <div className="about-container">

          {/* LEFT COLUMN */}

          <div className="about-left">

            <h3>Who I Am</h3>

            <p>
              I am a passionate <strong>Data Analyst</strong> and
              <strong> Full-Stack Developer</strong> with a strong background
              in Mathematics and Computer Science. I enjoy transforming raw
              data into meaningful insights and developing technology solutions
              that solve real business problems.
            </p>

            <p>
              My experience spans data analytics, business intelligence,
              financial reporting, dashboard development, inventory management,
              and software development. I build dashboards, analyze business
              performance, and develop applications that improve
              decision-making.
            </p>

            <p>
              I am continuously learning Machine Learning, Cloud Computing,
              Advanced SQL, and TypeScript while expanding my knowledge in
              Business Intelligence and Software Engineering.
            </p>

          </div>

          {/* RIGHT COLUMN */}

          <div className="about-right">

            <div className="info-card">
              <div className="info-icon">🎓</div>

              <div>
                <h4>Education</h4>

                <p>
                  Bachelor of Science in Mathematics &
                  Computer Science
                  <br />
                  (Applied Mathematics)
                </p>
              </div>

            </div>

            <div className="info-card">

              <div className="info-icon">📍</div>

              <div>

                <h4>Location</h4>

                <p>Nairobi, Kenya</p>

              </div>

            </div>

            <div className="info-card">

              <div className="info-icon">💼</div>

              <div>

                <h4>Experience</h4>

                <p>
                  Freelance Data Analyst &
                  Full-Stack Developer
                  <br />
                  2022 – Present
                </p>

              </div>

            </div>

            <div className="info-card">

              <div className="info-icon">📊</div>

              <div>

                <h4>Specialization</h4>

                <p>
                  Data Analytics
                  <br />
                  Business Intelligence
                  <br />
                  Full-Stack Development
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;