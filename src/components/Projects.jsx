import React from "react";

function Projects() {

    const projectsContent = [
        {
            title: "Portfolio",
            description: "Portfolio de desarrollador web.",
            tags: ["React", "JavaScript", "CSS", "HTML"],
            github: "https://github.com/mateo-balciunas/my-portfolio.git",
        }
    ]
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectsContent.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;