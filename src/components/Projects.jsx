import "../styles/projects.css";

const projects = [
  {
    title: "Gym Business Performance Dashboard",
    tools: "Microsoft Excel",
    description:
      "An interactive dashboard for tracking revenue, memberships, branch performance, KPIs, and business growth.",
    github: "https://github.com/maureenmuchoki-hub",
    live: "#",
  },
  {
    title: "Financial Analysis Dashboard",
    tools: "Microsoft Excel • Financial Statements",
    description:
      "Financial analysis of companies including profitability, liquidity, solvency, trend analysis, and financial ratios.",
    github: "https://github.com/maureenmuchoki-hub",
    live: "#",
  },
  {
    title: "Inventory & Stock Dashboard",
    tools: "Microsoft Excel",
    description:
      "Dashboard for inventory monitoring, stock movement, restocking alerts, and monthly inventory reports.",
    github: "https://github.com/maureenmuchoki-hub",
    live: "#",
  },
  {
    title: "Community Hub Web Application",
    tools: "React • Node.js • Express • MongoDB",
    description:
      "A full-stack community support platform featuring authentication, CRUD operations, and a responsive design.",
    github: "https://github.com/maureenmuchoki-hub/CommunityHub",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    tools: "HTML • CSS • JavaScript • OpenWeather API",
    description:
      "A responsive weather application providing real-time weather information with location search.",
    github: "https://github.com/maureenmuchoki-hub/weather-dashboard",
    live: "https://maureenmuchoki-hub.github.io/Weather-Dashboard/",
  },
  {
    title: "My To-Do List",
    tools: "HTML • CSS • JavaScript",
    description:
      "A responsive task management application that allows users to add, edit, complete, and delete daily tasks through a clean and intuitive interface.",
    github: "https://github.com/maureenmuchoki-hub/my-to-do-list",
    live: "https://maureenmuchoki-hub.github.io/my-to-do-list/",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <div className="section-heading">
          <p className="section-subtitle">Portfolio</p>

          <h2>Featured Projects</h2>

          <p className="section-description">
            Here are some of the projects that demonstrate my skills in data
            analytics, business intelligence, and software development.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                Project Screenshot
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <span className="project-tools">
                  {project.tools}
                </span>

                <p>{project.description}</p>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;