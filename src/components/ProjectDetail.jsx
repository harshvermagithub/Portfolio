import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ProjectDetail = () => {
    const { id } = useParams();
    const [ref1, isVisible1] = useScrollAnimation(0.1);
    const [ref2, isVisible2] = useScrollAnimation(0.1);
    const [ref3, isVisible3] = useScrollAnimation(0.1);

    // Dynamic data based on ID
    const projectData = {
        'kim-jong-moon': {
            title: 'Kim Jong Moon',
            subtitle: 'Web3 UI & NFT Ecosystem (2021)',
            overview: 'Kim Jong Moon was a major satirical Web3 memecoin project. As the Design Lead, I spearheaded the V2 redesign of the Web3 ecosystem. The project reached massive scale, and my role involved everything from UI design to the creation of the "KimJongMoon Club," a collection of 10,000 unique NFTs.',
            sections: [
                {
                    title: 'The NFT Club',
                    content: 'The KimJongMoon Club features programmatically generated art from over 250 possible traits, including unique expressions, headwear, and clothing. These NFTs act as membership cards, granting access to private Discord channels and the NFT Launchpad.'
                },
                {
                    title: 'NFT Launchpad & Benefits',
                    content: 'Following the success of major NFT launches, we created the first meme coin NFT launchpad. Benefits for holders included whitelisting for future projects, 2-5% profit sharing from the launchpad, and free airdrops in the secondary market.'
                },
                {
                    title: 'Unique V2 Contract Features',
                    content: 'The V2 contract introduced innovative DeFi features: 7% redistribution in BNB to all holders (auto-paid every 60 minutes), and a 5% buyback/marketing mechanism to correct market volatility.'
                },
                {
                    title: 'Tokenomics',
                    content: 'Total Supply: 100,000,000,000. Tax: 15% on all transactions (7% BNB Reflections, 5% Buyback + Marketing, 3% LP).'
                }
            ],
            role: 'Design Lead',
            timeline: '2021',
            tools: ['Figma', 'Illustrator', 'Web3 Architecture'],
            images: [
                { src: '/src/import/Kimjongmoon/2026-05-03 19.49.54.jpg', caption: 'V2 Web3 Dashboard Design' },
                { src: '/src/import/Kimjongmoon/2026-05-03 19.50.05.jpg', caption: 'NFT Minting Interface' },
                { src: '/src/import/Kimjongmoon/2026-05-03 19.50.14.jpg', caption: 'Custom Generative Traits' },
                { src: '/src/import/Kimjongmoon/Screenshot 2026-05-03 at 00.03.38.png', caption: 'Platform Ecosystem Overview' }
            ],
            videos: [
                { src: '/src/import/Kimjongmoon/Screen Recording 2026-05-03 at 00.01.25.mov', caption: 'Dashboard Navigation Flow' }
            ],
            pdf: '/src/import/Kimjongmoon/KimJongMoon-V2-Whitepaper.pdf'
        },
        'kim-jong-moon-stickers': {
            title: 'KJM Sticker Pack',
            subtitle: 'Satirical Brand Identity Assets (2021)',
            overview: 'To drive community viral growth, I designed a comprehensive suite of 36 high-fidelity satirical stickers for Telegram and Discord. These assets became the visual heartbeat of the KJM community, establishing a unique brand voice that differentiated the project in a crowded market.',
            role: 'Lead Illustrator',
            timeline: '2021',
            tools: ['Adobe Illustrator', 'Procreate'],
            images: [
                { src: '/src/import/KimJongMoon Stickers/jpg/file_159789379.jpg', caption: 'Character Expression Set' },
                { src: '/src/import/KimJongMoon Stickers/jpg/file_159789380.jpg', caption: 'Viral Asset Design' },
                { src: '/src/import/KimJongMoon Stickers/jpg/file_159789381.jpg', caption: 'Brand Personality Extension' },
                { src: '/src/import/KimJongMoon Stickers/jpg/file_159789382.jpg', caption: 'Community Favorite Asset' },
                { src: '/src/import/KimJongMoon Stickers/jpg/file_159789383.jpg', caption: 'Expressive Detail' },
                { src: '/src/import/KimJongMoon Stickers/jpg/file_159789384.jpg', caption: 'High-Fidelity Illustration' },
                { src: '/src/import/KimJongMoon Stickers/jpg/file_159789385.jpg', caption: 'Satirical Expression' },
                { src: '/src/import/KimJongMoon Stickers/jpg/file_159789386.jpg', caption: 'Community Engagement Pack' }
            ],
            videos: [
                { src: '/src/import/Screen Recording 2026-05-03 at 00.02.32.mov', caption: 'Community Sticker Usage' }
            ]
        },
        'dogeverse': {
            title: 'Dogeverse Web3',
            subtitle: 'NFT Metaverse UI/UX Prototyping (2021)',
            overview: 'Working with Abstraction Labs, I designed the "Season One" landing page and ecosystem for Dogeverse, a story-driven NFT metaverse. The project centered on the "Great Doge War" narrative.',
            sections: [
                {
                    title: 'Narrative-Driven Design',
                    content: 'The goal was to hook users into the story while explaining the seasonal roadmap. I used a high-contrast dark theme and cinematic typography to create a gamified, entertainment-first atmosphere.'
                },
                {
                    title: 'Conversion Focus',
                    content: 'The layout was designed to be clean and centralized, driving all focus to the primary "Enter Now" call-to-action to maximize user onboarding into the metaverse.'
                }
            ],
            role: 'UI Designer (Contract)',
            timeline: '2021',
            tools: ['Figma', 'Prototyping', 'Storytelling'],
            images: [
                { src: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800', caption: 'Cinematic Landing Page Concept' },
                { src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800', caption: 'Interactive Roadmap UI' }
            ]
        }
    };

    const project = projectData[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="container" style={{ paddingTop: '160px', textAlign: 'center', minHeight: '100vh' }}>
                <h2>Project not found</h2>
                <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>Return to home</Link>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--bg-primary)' }}>
            <div className="container">
                <Link to="/" style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    color: 'var(--text-secondary)', 
                    textDecoration: 'none',
                    marginBottom: '40px',
                    fontWeight: '500'
                }}>
                    <ArrowLeft size={20} /> Back to Portfolio
                </Link>

                <div className="glass-card" style={{ padding: '64px', borderRadius: '32px' }}>
                    {/* Header Section */}
                    <div ref={ref1} className={`scroll-hidden ${isVisible1 ? 'scroll-visible' : ''}`} style={{ marginBottom: '64px' }}>
                        <h1 style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginBottom: '16px', letterSpacing: '-0.02em' }}>{project.title}</h1>
                        <p style={{ fontSize: '24px', color: 'var(--text-secondary)', marginBottom: '40px' }}>{project.subtitle}</p>
                        
                        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', borderTop: '1px solid var(--border-soft)', borderBottom: '1px solid var(--border-soft)', padding: '24px 0' }}>
                            <div>
                                <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Role</h4>
                                <p style={{ fontWeight: '500' }}>{project.role}</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Timeline</h4>
                                <p style={{ fontWeight: '500' }}>{project.timeline}</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Tools</h4>
                                <p style={{ fontWeight: '500' }}>{project.tools.join(', ')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Overview Section */}
                    <div ref={ref2} className={`scroll-hidden ${isVisible2 ? 'scroll-visible' : ''}`} style={{ marginBottom: '64px', maxWidth: '100%' }}>
                        <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Project Overview</h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '40px' }}>
                            {project.overview}
                        </p>

                        {project.sections && project.sections.map((section, idx) => (
                            <div key={idx} style={{ marginBottom: '40px' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text-primary)' }}>{section.title}</h3>
                                <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>{section.content}</p>
                            </div>
                        ))}

                        {project.pdf && (
                            <a href={project.pdf} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '24px', padding: '12px 24px', background: 'var(--text-primary)', color: 'var(--bg-primary)', borderRadius: '12px', textDecoration: 'none', fontWeight: '500' }}>
                                View Whitepaper PDF
                            </a>
                        )}
                    </div>

                    {/* Media Gallery Section */}
                    <div ref={ref3} className={`scroll-hidden ${isVisible3 ? 'scroll-visible' : ''}`}>
                        <h2 style={{ fontSize: '32px', marginBottom: '32px' }}>Gallery</h2>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
                            {project.videos && project.videos.map((vid, idx) => (
                                <div key={idx} style={{ width: '100%' }}>
                                    <video 
                                        src={vid.src} 
                                        controls 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline 
                                        style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid var(--border-soft)' }} 
                                    />
                                    <p style={{ textAlign: 'center', marginTop: '16px', color: 'var(--text-secondary)', fontSize: '14px' }}>{vid.caption}</p>
                                </div>
                            ))}

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                                {project.images && project.images.map((img, idx) => (
                                    <div key={idx}>
                                        <img 
                                            src={img.src} 
                                            alt={img.caption} 
                                            style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--border-soft)' }} 
                                        />
                                        <p style={{ textAlign: 'center', marginTop: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>{img.caption}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
