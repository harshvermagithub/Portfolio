
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ProjectCard = ({ project, index }) => {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <div
            ref={ref}
            className={`glass-card project-card scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <div className="project-icon" style={{ backgroundColor: project.bgColor }}>
                {project.iconEmoji}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'var(--font-serif)', margin: 0 }}>
                        {project.name}
                    </h3>
                    <span style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        opacity: 0.6,
                        border: '1px solid currentColor',
                        padding: '4px 8px',
                        borderRadius: '12px'
                    }}>
                        {project.year}
                    </span>
                </div>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', margin: 0 }}>
                    {project.desc}
                </p>
            </div>
        </div>
    );
};

const Work = () => {
    const projects = [
        {
            id: 1,
            name: 'MEA Platform',
            desc: 'Prototype Analyst',
            iconEmoji: '🚀',
            bgColor: 'rgba(224, 247, 250, 0.5)',
            year: 'Present'
        },
        {
            id: 2,
            name: 'AI Foundation',
            desc: 'AI Dev Analyst',
            iconEmoji: '🤖',
            bgColor: 'rgba(243, 229, 245, 0.5)',
            year: '2023'
        },
        {
            id: 3,
            name: 'Simplilearn',
            desc: 'Success Manager',
            iconEmoji: '🎓',
            bgColor: 'rgba(232, 245, 233, 0.5)',
            year: '2023'
        },
        {
            id: 4,
            name: 'Ecoenergy',
            desc: 'Project Engineer',
            iconEmoji: '⚡',
            bgColor: 'rgba(255, 243, 224, 0.5)',
            year: '2022'
        },
        {
            id: 5,
            name: 'Abstraction',
            desc: 'SDE Intern',
            iconEmoji: '💻',
            bgColor: 'rgba(227, 242, 253, 0.5)',
            year: '2022'
        }
    ];

    const [headerRef, isHeaderVisible] = useScrollAnimation(0.1);

    const headerStyles = {
        marginBottom: '64px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    };

    return (
        <section id="work" className="container section-padding">
            <div
                ref={headerRef}
                style={headerStyles}
                className={`scroll-hidden ${isHeaderVisible ? 'scroll-visible' : ''}`}
            >
                <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>Selected Work</h2>
            </div>

            <div className="work-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Work;
