import React from 'react';
import resumePdf from '../assets/Harsh-Resume.pdf';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ExpertiseItem = ({ text, index }) => {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <li
            ref={ref}
            style={{
                padding: '16px 0',
                borderBottom: '1px solid var(--border-soft)',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '18px',
                transitionDelay: `${index * 0.1}s`
            }}
            className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
            {text}
        </li>
    );
};

const About = () => {
    const [headerRef, isHeaderVisible] = useScrollAnimation(0.1);
    const [contentRef, isContentVisible] = useScrollAnimation(0.1);

    const styles = {
        section: {
            padding: '120px 0',
            borderTop: '1px solid var(--border-soft)',
        },
        heading: {
            fontSize: 'clamp(24px, 4vw, 32px)',
            marginBottom: '32px',
        },
        bio: {
            fontSize: 'clamp(18px, 2vw, 24px)',
            lineHeight: '1.5',
            marginBottom: '48px',
            color: 'var(--text-secondary)',
        },
        list: {
            listStyle: 'none',
            padding: 0,
        }
    };

    const services = [
        'UI/UX Design & Prototyping',
        'Design Systems (Figma)',
        'AI-Enhanced Design',
        'Product Strategy & Vision',
        'User Research & Flow Mapping'
    ];

    return (
        <section id="about" className="container section-padding">
            <div className="about-grid">
                <div ref={headerRef} className={`scroll-hidden ${isHeaderVisible ? 'scroll-visible' : ''}`}>
                    <h2 style={styles.heading}>About Me</h2>
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                        alt="Portrait"
                        style={{ width: '100%', borderRadius: '24px', filter: 'grayscale(100%)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    />
                </div>

                <div
                    ref={contentRef}
                    style={{ paddingTop: '64px' }}
                    className={`scroll-hidden ${isContentVisible ? 'scroll-visible' : ''}`}
                >
                    <p style={styles.bio}>
                        I am a Product Department Prototype Analyst with a background in Information Technology.
                        I transitioned to a founding member role, establishing vision and strategic direction for product-market fit.
                        I have driven 5x+ team growth and championed user-centric methodologies to transform organizational operations.
                    </p>

                    <a
                        href={resumePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            marginBottom: '48px',
                            fontSize: '16px',
                            textDecoration: 'underline',
                            textUnderlineOffset: '4px',
                            fontWeight: 500
                        }}
                    >
                        View Full Resume
                    </a>

                    <h3 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px', color: 'var(--text-secondary)' }}>
                        Core Expertise
                    </h3>
                    <ul style={styles.list}>
                        {services.map((service, index) => (
                            <ExpertiseItem key={index} text={service} index={index} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
