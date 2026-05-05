
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ExperienceCard = ({ project, index }) => {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <div
            ref={ref}
            className={`project-card scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
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

const Experience = () => {
    const projects = [
        {
            id: 1,
            name: 'mea Platform',
            desc: 'Senior UI Prototype Analyst | Lead design-to-prototyping for insurtech tools; helped secure $50M in funding.',
            year: '2023 - Present'
        },
        {
            id: 2,
            name: 'Carrier',
            desc: 'Project Engineer | Managed enterprise-level service projects and exceeded SLA targets.',
            year: '2022'
        },
        {
            id: 3,
            name: 'Simplilearn',
            desc: 'Product Designer | Focused on learner success and cross-functional operations for technical education.',
            year: '2021 - 2022'
        },
        {
            id: 4,
            name: 'Abstraction Labs',
            desc: 'SDE Intern | Developed community-focused Web3 initiatives and website growth strategies.',
            year: '2021 - 2022'
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
        <section id="experience" className="container section-padding">
            <div className="glass-card" style={{ padding: '48px', borderRadius: '32px' }}>
                <div
                    ref={headerRef}
                    style={headerStyles}
                    className={`scroll-hidden ${isHeaderVisible ? 'scroll-visible' : ''}`}
                >
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>Experience</h2>
                </div>

                <div className="work-grid">
                    {projects.map((project, index) => (
                        <ExperienceCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
