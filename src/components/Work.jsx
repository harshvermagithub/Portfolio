
import React from 'react';

const Work = () => {
    const projects = [
        {
            id: 1,
            name: 'MEA Platform',
            desc: 'Prototype Analyst',
            iconEmoji: '🚀',
            bgColor: '#e0f7fa',
            year: 'Present'
        },
        {
            id: 2,
            name: 'AI Foundation',
            desc: 'AI Dev Analyst',
            iconEmoji: '🤖',
            bgColor: '#f3e5f5',
            year: '2023'
        },
        {
            id: 3,
            name: 'Simplilearn',
            desc: 'Success Manager',
            iconEmoji: '🎓',
            bgColor: '#e8f5e9',
            year: '2023'
        },
        {
            id: 4,
            name: 'Ecoenergy',
            desc: 'Project Engineer',
            iconEmoji: '⚡',
            bgColor: '#fff3e0',
            year: '2022'
        },
        {
            id: 5,
            name: 'Abstraction',
            desc: 'SDE Intern',
            iconEmoji: '💻',
            bgColor: '#e3f2fd',
            year: '2022'
        }
    ];

    const headerStyles = {
        marginBottom: '48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    };

    const cardContainerStyles = {
        position: 'relative',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
    };

    const iconStyles = {
        width: '100%',
        aspectRatio: '1/1',
        borderRadius: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '64px',
        marginBottom: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        border: '1px solid var(--border-soft)',
    };

    const infoStyles = {
        display: 'flex',
        flexDirection: 'column',
    };

    const titleStyles = {
        fontSize: '18px',
        fontWeight: 600,
        fontFamily: 'var(--font-serif)',
        marginBottom: '4px',
    };

    const metaStyles = {
        fontSize: '14px',
        color: 'var(--text-secondary)',
    };

    return (
        <section id="work" className="container section-padding">
            <div style={headerStyles}>
                <h2 style={{ fontSize: '32px' }}>Selected Work</h2>
                {/* <a href="#" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>View All</a> */}
            </div>

            <div className="work-grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        style={cardContainerStyles}
                        className="project-card"
                    >
                        <div style={{ ...iconStyles, backgroundColor: project.bgColor }}>
                            {project.iconEmoji}
                        </div>

                        <div style={infoStyles}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h3 style={titleStyles}>{project.name}</h3>
                                <span style={{ fontSize: '12px', fontWeight: 600, opacity: 0.5, border: '1px solid currentColor', padding: '2px 6px', borderRadius: '12px' }}>
                                    {project.year}
                                </span>
                            </div>
                            <p style={metaStyles}>{project.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        .project-card:hover {
          transform: translateY(-8px);
        }
      `}</style>
        </section>
    );
};

export default Work;
