import React from "react";
import { useTranslation } from "react-i18next";

function Projects() {
    const { t } = useTranslation();

    const projectsContent = [
        {
            key: "portfolio",
            title: t("projects.portfolio.title"),
            description: t("projects.portfolio.description"),
            tags: ["React", "JavaScript", "CSS", "HTML"],
            github: "https://github.com/mateo-balciunas/my-portfolio.git",
        }
    ]
    return (
        <section id="projects" className="projects">
            <h2>{t("projects.title")}</h2>
            <div className="projects-grid">
                {projectsContent.map((project) => (
                    <div key={project.key} className="project-card">
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