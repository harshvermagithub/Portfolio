
import React from 'react';

const Contact = () => {
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
            padding: '16px 32px',
            backgroundColor: 'var(--bg-inverse)',
            color: 'var(--text-inverse)',
            borderRadius: '50px',
            display: 'inline-block',
            marginTop: '32px',
            marginBottom: '120px',
            fontWeight: 500,
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
            <h2 style={styles.heading}>Interested in collaborating?</h2>
            <a href="mailto:harshvermaintech@gmail.com" style={styles.cta}>
                Get in touch
            </a>

            <div style={styles.footerData}>
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
