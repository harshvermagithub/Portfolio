import React from 'react';
import resumePdf from '../assets/Harsh-Resume.pdf';

const About = () => {
    const styles = {
        section: {
            padding: '120px 0',
            borderTop: '1px solid var(--border-soft)',
        },
        // Grid styles moved to index.css (.about-grid)
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
        },
        listItem: {
            padding: '16px 0',
            borderBottom: '1px solid var(--border-soft)',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '18px',
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
                <div>
                    <h2 style={styles.heading}>About Me</h2>
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                        alt="Portrait"
                        style={{ width: '100%', borderRadius: '4px', filter: 'grayscale(100%)' }}
                    />
                </div>

                <div style={{ paddingTop: '64px' }}>
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
                            <li key={index} style={styles.listItem}>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
