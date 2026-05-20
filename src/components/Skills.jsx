import React from "react";
import { useTranslation } from "react-i18next";

function Skills() {
    const { t } = useTranslation();

    const skillCategories = [
        {
            key: 'frontend',
            title: t('skills.frontend'),
            skills: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            key: 'backend',
            title: t('skills.backend'),
            skills: ["JavaScript", "Node", "Express"]
        },
        {
            key: 'tools_others',
            title: t('skills.tools_others'),
            skills: ["Git", "GitHub", "Docker"]
        }
    ];

    return (
        <section id="skills" className="skills">
            <h2>{t('skills.title')}</h2>
            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div key={category.key} className="skill-category">
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