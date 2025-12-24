
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
    const [headerRef, isHeaderVisible] = useScrollAnimation(0.1);
    const [ctaRef, isCtaVisible] = useScrollAnimation(0.1);
    const [footerRef, isFooterVisible] = useScrollAnimation(0.1);

    const styles = {
        section: {
            padding: '160px 0 80px',
            borderTop: '1px solid var(--border-soft)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },
        heading: {
            fontSize: 'clamp(40px, 8vw, 80px)',
            marginBottom: '32px',
            maxWidth: '900px',
        },
        cta: {
            fontSize: '24px',
            padding: '24px 48px',
            backgroundColor: 'var(--bg-inverse)',
            color: 'var(--text-inverse)',
            borderRadius: '100px',
            display: 'inline-block',
            marginTop: '32px',
            marginBottom: '120px',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        },
        footerData: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            fontSize: '14px',
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        }
    };

    return (
        <section id="contact" className="container section-padding">
            <div ref={headerRef} className={`scroll-hidden ${isHeaderVisible ? 'scroll-visible' : ''}`}>
                <h2 style={styles.heading}>Interested in collaborating?</h2>
            </div>

            <div ref={ctaRef} className={`scroll-hidden ${isCtaVisible ? 'scroll-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                <a
                    href="mailto:harshvermaintech@gmail.com"
                    style={styles.cta}
                    className="contact-cta"
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    Get in touch
                </a>
            </div>

            <div ref={footerRef} className={`scroll-hidden ${isFooterVisible ? 'scroll-visible' : ''}`} style={{ ...styles.footerData, transitionDelay: '0.4s' }}>
                <div>
                    © 2025 Harsh Verma
                </div>
                <div style={{ display: 'flex', gap: '32px' }}>
                    <a href="https://www.linkedin.com/in/harshvermaintech" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/harshvermagithub" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://linktr.ee/harshvermaintech" target="_blank" rel="noopener noreferrer">Linktree</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
