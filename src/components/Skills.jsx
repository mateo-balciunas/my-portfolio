import React from "react";

function Skills() {

    const skillCategories = [
        {
            title: 'Frontend',
            skills: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            title: 'Backend',
            skills: ["JavaScript", "Node", "Express"]
        },
        {
            title: 'Tools & Others',
            skills: ["Git", "GitHub", "Docker"]
        }
    ];

    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h3>{category.title}</h3>
                        <div className="skill-list">
                            {category.skills.map((skill, i) => (
                                <span key={i} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;