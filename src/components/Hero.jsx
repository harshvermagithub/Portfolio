
import React from 'react';

const Hero = () => {
    const heroStyles = {
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '120px'
    };

    const titleStyles = {
        fontSize: 'clamp(40px, 8vw, 80px)',
        lineHeight: '1.2',
        letterSpacing: '-0.02em',
        maxWidth: '900px',
        fontWeight: 500, // Fraunces weight
    };

    const inlineImgStyles = {
        display: 'inline-block',
        width: 'clamp(40px, 8vw, 80px)',
        height: 'clamp(40px, 8vw, 80px)',
        borderRadius: '50%',
        objectFit: 'cover',
        verticalAlign: 'middle',
        margin: '0 12px',
        border: '4px solid var(--bg-primary)', // White border to pop against text if overlapping
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    };

    const subStyles = {
        marginTop: '32px',
        fontSize: 'clamp(18px, 2vw, 24px)',
        color: 'var(--text-secondary)',
        maxWidth: '600px',
        fontFamily: 'var(--font-sans)',
    };

    const trustedSectionStyles = {
        marginTop: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
    };

    const trustedLabelStyles = {
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: 'var(--text-secondary)',
        opacity: 0.7,
    };

    const logosContainerStyles = {
        display: 'flex',
        gap: '40px',
        opacity: 0.4,
        filter: 'grayscale(100%)',
        flexWrap: 'wrap',
        justifyContent: 'center',
    };

    return (
        <section style={heroStyles} className="container">
            <h1 style={titleStyles} className="fade-in">
                Hi, I'm
                <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                    alt="Portrait"
                    style={inlineImgStyles}
                />
                Harsh, a Prototype Analyst & Product Designer.
            </h1>

            <p style={subStyles} className="fade-in">
                Establishing vision and strategic direction for product-market fit. Specializing in Design Systems, AI-Enhanced Design, and complex operational dashboards.
            </p>

            <div style={trustedSectionStyles} className="fade-in">
                <span style={trustedLabelStyles}>Experience At</span>
                <div style={logosContainerStyles}>
                    <span style={{ fontWeight: 600 }}>MEA Platform</span>
                    <span style={{ fontWeight: 600 }}>AI Dev Foundation</span>
                    <span style={{ fontWeight: 600 }}>Simplilearn</span>
                    <span style={{ fontWeight: 600 }}>Ecoenergy</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
