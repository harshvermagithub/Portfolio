import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { certificationsData } from '../data/certifications';

const CertificationCard = ({ cert, index }) => {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <Link
            to={`/certification/${cert.id}`}
            ref={ref}
            className={`glass-card certification-card scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
            style={{
                transitionDelay: `${index * 0.1}s`,
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderRadius: '24px',
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    padding: '8px'
                }}>
                    <img src={cert.logo} alt={cert.issuer} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <span style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    opacity: 0.6,
                    border: '1px solid currentColor',
                    padding: '4px 8px',
                    borderRadius: '12px'
                }}>
                    {cert.year}
                </span>
            </div>

            <div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'var(--font-serif)', marginBottom: '4px' }}>
                    {cert.name}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    {cert.issuer}
                </p>
                <p style={{ fontSize: '15px', lineHeight: '1.5', color: 'var(--text-primary)' }}>
                    {cert.desc}
                </p>
            </div>

            <div style={{ marginTop: 'auto', fontSize: '14px', fontWeight: 500, color: '#2563EB', display: 'flex', alignItems: 'center', gap: '4px' }}>
                View Details <span>→</span>
            </div>
        </Link>
    );
};

const Certifications = () => {
    const [headerRef, isHeaderVisible] = useScrollAnimation(0.1);

    const styles = {
        section: {
            padding: '120px 0',
            borderTop: '1px solid var(--border-soft)',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '32px',
            marginTop: '64px'
        }
    };

    return (
        <section id="certifications" className="container" style={styles.section}>
            <div ref={headerRef} className={`scroll-hidden ${isHeaderVisible ? 'scroll-visible' : ''}`}>
                <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px' }}>Certifications</h2>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                    Continuous learning is the engine of my growth. Here are a few milestones from my journey.
                </p>
            </div>

            <div style={styles.grid}>
                {certificationsData.map((cert, index) => (
                    <CertificationCard key={cert.id} cert={cert} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Certifications;
