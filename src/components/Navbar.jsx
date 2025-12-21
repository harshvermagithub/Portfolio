import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import resumePdf from '../assets/Harsh-Resume.pdf';

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'work', 'about', 'contact'];
            const scrollPosition = window.scrollY + 200; // Offset for better detection

            for (const section of sections) {
                const element = document.getElementById(section === 'home' ? 'root' : section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    const navItems = [
        { id: 'home', label: 'Home', href: '#' },
        { id: 'work', label: 'Work', href: '#work' },
        { id: 'about', label: 'About', href: '#about' },
        { id: 'contact', label: 'Contact', href: '#contact' },
    ];

    return (
        <div style={navContainerStyles} className="fade-in">
            <nav className="nav-dock" style={{ pointerEvents: 'auto' }}>
                <a href="#" className="nav-logo">
                    harsh.
                </a>

                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => setActiveSection(item.id)}
                    >
                        {item.label}
                    </a>
                ))}

                <a
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                    style={{ color: 'var(--text-primary)' }}
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
                        color: 'var(--text-secondary)'
                    }}
                >
                    {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
