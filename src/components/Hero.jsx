
import React from 'react';

const Hero = () => {
    // Images for the deck
    const deckImages = [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", // Abstract
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop", // Tech
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", // Portrait (Center)
        "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=400&auto=format&fit=crop", // Minimalist
        "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=400&auto=format&fit=crop"  // Gradient
    ];

    const styles = {
        section: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '160px', /* Increased top padding to clear Navbar */
            paddingBottom: '80px',
            overflow: 'visible' // Allow animation overflow
        },
        h1: {
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 400,
            marginBottom: '8px',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '-0.02em'
        },
        h2: {
            fontSize: 'clamp(24px, 4vw, 40px)',
            color: '#2563EB', /* Bright Blue from reference */
            fontWeight: 600,
            marginBottom: '40px',
            fontFamily: 'var(--font-sans)'
        },
        bio: {
            maxWidth: '800px',
            fontSize: 'clamp(16px, 2vw, 18px)',
            lineHeight: '1.8',
            color: 'var(--text-secondary)',
            margin: '0 auto',
            padding: '0 20px',
            fontFamily: 'var(--font-sans)',
            minHeight: '200px' // Prevent layout shift during typing
        },
        strong: {
            color: 'var(--text-primary)',
            fontWeight: 600
        },
        highlight: {
            fontStyle: 'italic',
            opacity: 0.8,
            fontSize: '0.9em',
            marginTop: '24px',
            display: 'block'
        },
        bioCard: {
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            borderRadius: '24px',
            padding: '40px',
            margin: '0 auto',
            maxWidth: '900px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
        }
    };

    // Typing Effect Logic
    const [displayedSegments, setDisplayedSegments] = React.useState([
        { text: "", type: "text" }
    ]);
    const [isTypingComplete, setIsTypingComplete] = React.useState(false);

    React.useEffect(() => {
        const bioContent = [
            { text: "I speak two languages: ", type: "text" },
            { text: "Logic and Empathy", type: "strong" },
            { text: ". Starting with a background in Information Technology gave me the structure; design gave me the soul. Over the last few years, I've evolved from a lone analyst to defining strategic vision and architecting ", type: "text" },
            { text: "AI ecosystems", type: "strong" },
            { text: " for complex operational dashboards.", type: "text" },
            { text: "\n\nMy philosophy? Design isn't just about pixels, it's about removing friction from business's crucial digital touchpoints.", type: "text" }
        ];

        let currentSegment = 0;
        let currentChar = 0;
        let timeoutId;

        // Initial delay before typing starts (after slide-up)
        const startTyping = () => {
            const typeNextChar = () => {
                if (currentSegment >= bioContent.length) {
                    setIsTypingComplete(true);
                    return;
                }

                const segment = bioContent[currentSegment];
                const fullText = segment.text;

                if (currentChar < fullText.length) {
                    setDisplayedSegments(prev => {
                        const newSegments = [...prev];
                        if (!newSegments[currentSegment]) {
                            newSegments[currentSegment] = { text: "", type: segment.type };
                        }
                        newSegments[currentSegment].text = fullText.slice(0, currentChar + 1);
                        return newSegments;
                    });
                    currentChar++;
                    // Speed variation for realism
                    const speed = Math.random() * 20 + 10;
                    timeoutId = setTimeout(typeNextChar, speed);
                } else {
                    currentSegment++;
                    currentChar = 0;
                    timeoutId = setTimeout(typeNextChar, 10);
                }
            };
            typeNextChar();
        };

        const initialDelay = setTimeout(startTyping, 800); // 0.8s delay matching CSS animation

        return () => {
            clearTimeout(initialDelay);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <section id="home" style={styles.section} className="container">
            <h1 style={styles.h1} className="slide-up">
                Hi, I'm <span style={{ fontWeight: 600 }}>Harsh Verma</span>
            </h1>
            <h2 className="slide-up" style={{ ...styles.h2, animationDelay: '0.1s' }}>
                Prototype Analyst
            </h2>

            {/* Fan Deck Animation */}
            <div className="hero-deck slide-up" style={{ animationDelay: '0.3s' }}>
                {deckImages.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Card ${index + 1}`}
                        className="hero-card"
                    />
                ))}

                {/* Floating Pills */}
                <div className="hero-pill blue">
                    @PrototypeAnalyst
                </div>
                <div className="hero-pill white">
                    @harshvermaig
                </div>
            </div>

            <div className="slide-up" style={{ animationDelay: '0.5s', ...styles.bioCard }}>
                <p style={styles.bio}>
                    {displayedSegments.map((segment, index) => {
                        if (segment.type === 'strong') {
                            return <span key={index} style={styles.strong}>{segment.text}</span>;
                        }
                        // Handle newlines explicitly
                        return segment.text.split('\n').map((line, i, arr) => (
                            <React.Fragment key={`${index}-${i}`}>
                                {line}
                                {i < arr.length - 1 && <br />}
                            </React.Fragment>
                        ));
                    })}

                    {/* Blinking Cursor */}
                    {!isTypingComplete && (
                        <span style={{ borderRight: '2px solid var(--text-primary)', marginLeft: '2px', animation: 'blink 1s infinite' }}></span>
                    )}

                    {/* Fun Fact - Fades in AFTER typing is done */}
                    <span style={{ ...styles.highlight, opacity: isTypingComplete ? 0.8 : 0, transition: 'opacity 1s ease' }}>
                        Fun fact: Every elegant solution here was fueled by curiosity and coffee.
                    </span>
                </p>
            </div>
        </section>
    );
};

export default Hero;
