import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import resumePdf from '../assets/Harsh-Resume.pdf';

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const [activeSection, setActiveSection] = useState('home');
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

    // Refs for measuring positions
    const navRef = React.useRef(null);
    const itemRefs = React.useRef({});

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'work', 'about', 'contact'];
            // Dynamic offset based on screen height
            // If near bottom of page, force 'contact'
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                setActiveSection('contact');
                return;
            }

            const scrollAlign = window.scrollY + (window.innerHeight * 0.4); // 40% down screen

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollAlign >= offsetTop && scrollAlign < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount to set initial active state
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Update Indicator Position
    useEffect(() => {
        const activeItem = itemRefs.current[activeSection];
        if (activeItem) {
            setIndicatorStyle({
                left: activeItem.offsetLeft,
                width: activeItem.offsetWidth,
                opacity: 1
            });
        }
    }, [activeSection]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const navContainerStyles = {
        position: 'fixed',
        top: '32px',
        left: 0,
        width: '100%',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
    };

    const pillStyles = {
        position: 'absolute',
        height: 'calc(100% - 16px)', // Padding top/bottom is 8px, so minus 16px total
        top: '8px',
        backgroundColor: 'var(--text-primary)',
        opacity: 1, // Solid for high contrast
        borderRadius: '20px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: 'none',
        zIndex: 0,
        ...indicatorStyle
    };

    const navItems = [
        { id: 'home', label: 'Home', href: '#' },
        { id: 'work', label: 'Work', href: '#work' },
        { id: 'about', label: 'About', href: '#about' },
        { id: 'contact', label: 'Contact', href: '#contact' },
    ];

    return (
        <div style={navContainerStyles} className="fade-in">
            <nav
                className="nav-dock"
                ref={navRef}
                style={{ pointerEvents: 'auto', position: 'relative' }}
            >
                <div style={pillStyles} className="nav-pill" />

                <a href="#" className="nav-logo" style={{ zIndex: 1 }}>
                    harsh.
                </a>

                {navItems.map((item) => (
                    <a
                        key={item.id}
                        ref={(el) => (itemRefs.current[item.id] = el)}
                        href={item.href}
                        className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                        onClick={(e) => {
                            // Smooth scroll manually if needed, or let default anchor handle it
                            setActiveSection(item.id);
                        }}
                        style={{
                            position: 'relative',
                            zIndex: 1,
                            backgroundColor: 'transparent', // Override index.css active bg
                            color: activeSection === item.id ? 'var(--bg-primary)' : undefined,
                            transition: 'color 0.2s ease',
                        }}
                    >
                        {item.label}
                    </a>
                ))}

                <a
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                    style={{ color: 'var(--text-primary)', zIndex: 1, position: 'relative' }}
                >
                    Resume
                </a>

                <div
                    onClick={toggleTheme}
                    style={{
                        marginLeft: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px',
                        color: 'var(--text-secondary)',
                        zIndex: 1,
                        position: 'relative'
                    }}
                >
                    {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
