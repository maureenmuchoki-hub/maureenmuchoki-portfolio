import "../styles/skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">

        <div className="section-heading">
          <p className="section-subtitle">Technical Skills</p>
          <h2>Technologies & Expertise</h2>
          <p className="section-description">
            I combine analytical thinking with software development
            to build modern business solutions and data-driven applications.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>📊 Data Analytics</h3>

            <ul>
              <li>Microsoft Excel (Advanced)</li>
              <li>Power BI</li>
              <li>SQL</li>
              <li>Python</li>
              <li>Data Cleaning</li>
              <li>Dashboard Development</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>📈 Business Intelligence</h3>

            <ul>
              <li>Financial Analysis</li>
              <li>Business Reporting</li>
              <li>KPI Monitoring</li>
              <li>Data Visualization</li>
              <li>Trend Analysis</li>
              <li>Operational Analytics</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>💻 Software Development</h3>

            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>🛠 Tools & Platforms</h3>

            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Microsoft Office</li>
              <li>Microsoft Access</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;