import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { certificationsData } from '../data/certifications';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const CertificationDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const cert = certificationsData.find(c => c.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!cert) {
        return (
            <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
                <h2>Certification not found</h2>
                <Link to="/" style={{ color: '#2563EB', marginTop: '16px', display: 'inline-block' }}>Back to Home</Link>
            </div>
        );
    }

    const styles = {
        page: {
            paddingTop: '120px',
            paddingBottom: '80px',
            minHeight: '100vh',
        },
        backButton: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            fontSize: '14px',
            cursor: 'pointer',
            border: 'none',
            background: 'none',
            padding: 0,
        },
        header: {
            marginBottom: '48px',
        },
        icon: {
            width: '80px',
            height: '80px',
            marginBottom: '24px',
            display: 'inline-block',
            padding: '16px',
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.05)'
        },
        title: {
            fontSize: 'clamp(32px, 5vw, 48px)',
            marginBottom: '16px',
            lineHeight: 1.1,
        },
        meta: {
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            fontSize: '16px',
            color: 'var(--text-secondary)',
            marginBottom: '32px',
        },
        badge: {
            padding: '4px 12px',
            borderRadius: '20px',
            border: '1px solid var(--border-soft)',
            fontWeight: 500,
            fontSize: '14px',
        },
        sectionTitle: {
            fontSize: '24px',
            marginBottom: '24px',
            fontFamily: 'var(--font-serif)',
        },
        learningList: {
            listStyle: 'none',
            padding: 0,
            display: 'grid',
            gap: '16px',
        },
        learningItem: {
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.5)',
            borderRadius: '16px',
            border: '1px solid var(--border-soft)',
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start',
        },
        check: {
            color: '#2563EB',
            marginTop: '4px',
        },
        cta: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#2563EB',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '50px',
            fontWeight: 500,
            marginTop: '48px',
            transition: 'transform 0.2s',
        }
    };

    return (
        <div className="container" style={styles.page}>
            <button onClick={() => navigate(-1)} style={styles.backButton}>
                <ArrowLeft size={20} />
                Back to Certifications
            </button>

            <div className="glass-card" style={{ padding: '48px', borderRadius: '40px', position: 'relative', overflow: 'hidden' }}>
                {/* Decorative background blur */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }} />

                <div className="fade-in" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={styles.icon}>
                        <img src={cert.logo} alt={cert.issuer} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>

                    <h1 style={styles.title}>{cert.name}</h1>

                    <div style={styles.meta}>
                        <span style={styles.badge}>{cert.issuer}</span>
                        <span style={styles.badge}>{cert.year}</span>
                    </div>

                    <p style={{ fontSize: '20px', lineHeight: 1.6, maxWidth: '800px', marginBottom: '32px' }}>
                        {cert.desc}
                    </p>

                    {/* Skills Tags */}
                    {cert.skills && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '64px' }}>
                            {cert.skills.map((skill, i) => (
                                <span key={i} style={{
                                    fontSize: '14px',
                                    padding: '6px 14px',
                                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                                    color: '#2563EB',
                                    borderRadius: '50px',
                                    fontWeight: 500
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}

                    <h2 style={styles.sectionTitle}>What I Learned</h2>
                    <ul style={styles.learningList}>
                        {cert.learnings && cert.learnings.map((learning, index) => (
                            <li key={index} style={{ ...styles.learningItem, animationDelay: `${index * 0.1}s` }} className="slide-up">
                                <span style={styles.check}>✓</span>
                                <span style={{ fontSize: '16px', lineHeight: 1.5 }}>{learning}</span>
                            </li>
                        ))}
                    </ul>

                    <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.cta}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        View Verified Certificate <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CertificationDetail;
