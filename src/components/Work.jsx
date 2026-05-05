import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ProjectCard = ({ project, index }) => {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <Link
            to={`/work/${project.slug}`}
            ref={ref}
            className={`project-card scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
            style={{ 
                transitionDelay: `${index * 0.1}s`,
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '24px', fontWeight: 600, fontFamily: 'var(--font-serif)', margin: 0 }}>
                        {project.title}
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
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', margin: '0 0 24px 0', lineHeight: '1.6' }}>
                    {project.desc}
                </p>
                <div style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '14px', color: '#2563EB' }}>
                    View Project <span style={{ transition: 'transform 0.2s ease' }} className="arrow">→</span>
                </div>
            </div>
        </Link>
    );
};

const Work = () => {
    const projects = [
        {
            id: 1,
            slug: 'kim-jong-moon',
            title: 'Kim Jong Moon',
            desc: 'Design Lead for a viral Web3 ecosystem. Delivered a high-conversion V2 dashboard, 250+ generative NFT traits, and community branding assets.',
            year: '2021'
        },
        {
            id: 2,
            slug: 'kim-jong-moon-stickers',
            title: 'KJM Sticker Pack',
            desc: 'High-fidelity community assets for Telegram/Discord. Designed 36+ satirical stickers that established a unique visual language for KJM.',
            year: '2021'
        },
        {
            id: 3,
            slug: 'dogeverse',
            title: 'Dogeverse Web3',
            desc: 'Cinematic UI/UX for a story-driven NFT metaverse. Focused on high-contrast visuals and narrative-led conversion flows.',
            year: '2021'
        },
        {
            id: 4,
            slug: 'insurance-workflows',
            title: 'mea Insurance',
            desc: 'End-to-end UX architecture for complex insurtech platforms. Streamlining operational data flows and AI-driven automation. (Password Protected)',
            year: '2023'
        },
        {
            id: 5,
            slug: 'carrier-global',
            title: 'Carrier Global',
            desc: 'Industrial UI & Workflow Optimization. Bridging mechanical engineering and digital interface design for HVAC systems.',
            year: '2020'
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
            <div className="glass-card" style={{ padding: '48px', borderRadius: '32px' }}>
                <div
                    ref={headerRef}
                    style={headerStyles}
                    className={`scroll-hidden ${isHeaderVisible ? 'scroll-visible' : ''}`}
                >
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>Work</h2>
                </div>

                <div className="work-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
