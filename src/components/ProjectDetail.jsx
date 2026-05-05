import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ProjectDetail = () => {
    const { id } = useParams();
    const [password, setPassword] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState('');
    
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
                { src: '/src/import/Kimjongmoon/Screenshot 2026-05-04 at 16.43.43.png', caption: 'Landing Page Hero' },
                { src: '/src/import/Kimjongmoon/Screenshot 2026-05-04 at 16.44.37.png', caption: 'NFT Revolution Section' },
                { src: '/src/import/Kimjongmoon/Screenshot 2026-05-04 at 16.45.43.png', caption: 'NFT Launchpad Details' },
                { src: '/src/import/Kimjongmoon/Screenshot 2026-05-04 at 16.48.58.png', caption: 'Roadmap Visualization' },
                { src: '/src/import/Kimjongmoon/Screenshot 2026-05-04 at 16.49.56.png', caption: 'Contract Features' },
                { src: '/src/import/Kimjongmoon/Screenshot 2026-05-04 at 16.50.42.png', caption: 'Army Rewards & Antibot' },
                { src: '/src/import/Kimjongmoon/Screenshot 2026-05-04 at 16.51.56.png', caption: 'Full Tokenomics Breakout' },
                { src: '/src/import/Kimjongmoon/Screenshot 2026-05-04 at 16.52.44.png', caption: 'Project Roadmap Q4-Q3' },
                { src: '/src/import/Kimjongmoon/2026-05-03 19.49.54.jpg', caption: 'UI Dashboard Concept' }
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
                { src: '/src/import/Kimjongmoon/Screenshot 2026-05-04 at 20.13.29.png', caption: 'Full 36-Sticker Pack Grid' },
                { src: '/src/import/KimJongMoon Stickers/jpg/file_159789379.jpg', caption: 'Character Detail' },
                { src: '/src/import/KimJongMoon Stickers/jpg/file_159789380.jpg', caption: 'Viral Asset' }
            ],
            videos: [
                { src: '/src/import/Screen Recording 2026-05-03 at 00.02.32.mov', caption: 'Community Sticker Usage' }
            ]
        },
        'dogeverse': {
            title: 'Dogeverse Web3',
            subtitle: 'NFT Metaverse UI/UX Prototyping (2021)',
            overview: 'Working with Abstraction Labs, I designed the "Season One" landing page and ecosystem for Dogeverse, a story-driven NFT metaverse centered on the "Great Doge War" narrative. The project required a gamified, cinematic atmosphere to successfully funnel users into the narrative roadmap.',
            sections: [
                {
                    title: 'Narrative-Driven Design',
                    content: 'The "Great Doge War" story served as the foundation. I used cinematic typography and high-contrast dark themes to create an immersive, entertainment-first experience.'
                },
                {
                    title: 'Cinematic UI Components',
                    content: 'Every element, from the interactive roadmap to the "Enter Now" CTA, was designed to emphasize the narrative scale of the project while maintaining functional DeFi patterns.'
                }
            ],
            role: 'UI Designer (Contract)',
            timeline: '2021',
            tools: ['Figma', 'Prototyping', 'Storytelling'],
            images: [
                { src: '/src/import/DogeVerse/DogeVerse Assets/2026-05-03 19.46.30.jpg', caption: 'Hero Landing Section' },
                { src: '/src/import/DogeVerse/DogeVerse Assets/2026-05-03 19.47.58.jpg', caption: 'Roadmap & Story' },
                { src: '/src/import/DogeVerse/comingsoon.png', caption: 'Project Teaser' },
                { src: '/src/import/DogeVerse/Lucifer Doge Avater.png', caption: 'Main Character Avatar' }
            ],
            videos: [
                { src: '/src/import/DogeVerse/2021-09-13_14-07-17.mp4', caption: 'Cinematic UI Flow' },
                { src: '/src/import/DogeVerse/DemoDogeverse01-2021-09-20_18-26-34.mp4', caption: 'Prototype Interaction' }
            ],
            pdf: '/src/import/DogeVerse/Landing Page.pdf'
        },
        'insurance-workflows': {
            title: 'mea Insurance',
            subtitle: 'Insurtech UX Architecture (2023)',
            overview: 'Leading the UX architecture for mea Platform, I designed end-to-end workflows for complex insurance operations. This work directly supported the company’s expansion and helped secure $50M in funding by streamlining manual data extraction and policy management processes.',
            sections: [
                {
                    title: 'The Operational Ecosystem',
                    content: 'The mea platform is a modular ecosystem designed to handle the entire commercial insurance lifecycle. Each module below represents a specific operational challenge solved through persona-driven design and AI integration.'
                }
            ],
            role: 'Senior UI Prototype Analyst',
            timeline: '2023 - Present',
            tools: ['Figma', 'Advanced Prototyping', 'Systems Thinking'],
            isLocked: true,
            password: 'mea-portfolio',
            subProjects: [
                {
                    id: 'bpo-dashboard',
                    title: 'BPO Dashboard',
                    description: 'Persona-based journey for Managers, Assistants, and Operators.',
                    content: {
                        overview: 'A centralized ecosystem for managing the commercial insurance lifecycle, utilizing "Ora AI" for assisted checks and automated processing.',
                        keyFindings: [
                            'Ora AI Integration for automated processing.',
                            'Action-Oriented Design surfacing urgent SLA breaches.',
                            'Real-time team performance transparency for Managers.',
                            'Persona-driven workflows for John Doe (Manager), Sarah Chen (Assistant), and Jenny Smith (Operator).'
                        ],
                        sections: [
                            {
                                title: 'Persona: John Doe (Manager)',
                                body: 'Focuses on the Executive Summary. Monitors team performance and reviews AI-generated automation impact to intervene in high-priority escalations.'
                            },
                            {
                                title: 'Persona: Sarah Chen (Underwriting Assistant)',
                                body: 'Focuses on Blocker Resolution. Reviews authority limit issues and prior claims discrepancies to refer items to senior staff.'
                            },
                            {
                                title: 'SLA Breaches Management',
                                body: 'A detailed workflow for handling time-sensitive interruptions, ensuring zero leakage in the submission pipeline.'
                            }
                        ]
                    }
                },
                {
                    id: 'claims-operations',
                    title: 'Claims Operations',
                    description: 'End-to-end claims lifecycle management and automation.',
                    content: { 
                        overview: 'A comprehensive module designed to automate the intake, validation, and settlement of commercial insurance claims.',
                        keyFindings: [
                            'Automated first notice of loss (FNOL) extraction.',
                            'Fraud detection integration using pattern matching.',
                            'Dynamic authority limit checks for instant approvals.',
                            'Integration with external loss adjustor APIs.'
                        ],
                        sections: [
                            {
                                title: 'Automated FNOL',
                                body: 'The system uses OCR and NLP to extract claim details from emails and scanned documents, populating the claims management system with 95% accuracy.'
                            },
                            {
                                title: 'Settlement Workflow',
                                body: 'Streamlined approval routes for payments, ensuring that claims within the operator\'s authority are settled in minutes rather than days.'
                            }
                        ]
                    }
                },
                {
                    id: 'triage',
                    title: 'Triage',
                    description: 'Intelligent submission sorting and prioritization.',
                    content: { 
                        overview: 'The Triage module acts as the "brain" of the submission pipeline, automatically categorizing and assigning incoming business.',
                        keyFindings: [
                            'Machine learning based risk categorization.',
                            'Automatic workload balancing across underwriting teams.',
                            'High-priority "Fast-Track" lane for low-complexity risks.',
                            'Real-time submission health monitoring.'
                        ],
                        sections: [
                            {
                                title: 'Submission Routing',
                                body: 'By analyzing historical data, the Triage module predicts the likelihood of conversion and routes submissions to the underwriter best suited for the risk profile.'
                            },
                            {
                                title: 'Risk Scoring',
                                body: 'An automated scoring engine that evaluates submissions against current risk appetite, flagging out-of-appetite items instantly.'
                            }
                        ]
                    }
                },
                {
                    id: 'classify-my-data',
                    title: 'Classify my data',
                    description: 'AI-driven document classification and sorting.',
                    content: {
                        overview: 'An intelligent gateway that automatically identifies and categorizes incoming insurance documents (Policies, Claims, SOVs) before routing them to the correct operational workflow.',
                        keyFindings: [
                            '98% accuracy in document type identification.',
                            'Automated multi-document splitting and merging.',
                            'NLP-driven intent recognition for email attachments.',
                            'Real-time feedback loop for model retraining.'
                        ],
                        sections: [
                            {
                                title: 'The Classification Engine',
                                body: 'Using a combination of visual layout analysis and text-based NLP, the module identifies exactly what a document is. A 50-page PDF can be split into individual policy sections and claims forms in seconds.'
                            }
                        ]
                    }
                },
                {
                    id: 'finance-operations',
                    title: 'Finance Operations',
                    description: 'Credit control and financial reporting workflows.',
                    content: {
                        overview: 'A specialized dashboard for insurance finance professionals to manage premiums, commissions, and credit control.',
                        keyFindings: [
                            'Automated premium reconciliation.',
                            'Commission tracking and leakage detection.',
                            'Real-time credit control status across the book.',
                            'Direct integration with core accounting systems.'
                        ],
                        sections: [
                            {
                                title: 'Persona: Credit Controller',
                                body: 'The interface surfaces overdue premiums and commission discrepancies, allowing controllers to manage exceptions without manual spreadsheet tracking.'
                            }
                        ]
                    }
                },
                {
                    id: 'new-business',
                    title: 'New Business Configuration',
                    description: 'Streamlining the intake of new insurance submissions.',
                    content: {
                        overview: 'A guided workflow for setting up and configuring new insurance business lines, focusing on speed-to-market and data quality.',
                        keyFindings: [
                            'Dynamic form builder for custom submission fields.',
                            'Rule-based validation for mandatory risk data.',
                            'Instant "Declination" routing for out-of-appetite risks.',
                            'Template-based setup for common lines of business.'
                        ],
                        sections: [
                            {
                                title: 'Submission Lifecycle',
                                body: 'From the moment an inquiry hits the system, the New Business module ensures all required data points are present, reducing back-and-forth between brokers and underwriters.'
                            }
                        ]
                    }
                },
                {
                    id: 'qa-tool',
                    title: 'QA Tool',
                    description: 'Automated quality assurance for insurance documentation.',
                    content: {
                        overview: 'A dual-pane workspace designed to resolve AI extraction conflicts and ensure 100% data integrity before final processing.',
                        keyFindings: [
                            'Side-by-side document and data comparison.',
                            'Contextual Anchoring: Click data to see source PDF location.',
                            'Discrepancy flagging for "Need Review" entities.',
                            'Audit trail for every data point change.'
                        ],
                        sections: [
                            {
                                title: 'Conflict Resolution',
                                body: 'The workspace allows analysts to compare extraction results against the SOP or alternative sources, selecting the most accurate data point with a single click.'
                            }
                        ]
                    }
                },
                {
                    id: 'sov-config',
                    title: 'SOV Configuration',
                    description: 'Statement of Values configuration and management.',
                    content: {
                        overview: 'An industrial-grade tool for extracting and mapping complex spreadsheet data from multi-location Schedules of Values (SOV).',
                        keyFindings: [
                            'Dynamic entity mapping for SOV columns.',
                            'Technical rule configuration (Data Types, Transformations).',
                            'High-fidelity preview matrix for data validation.',
                            'Batch processing for large location schedules.'
                        ],
                        sections: [
                            {
                                title: 'Configuration Workflow',
                                body: 'Underwriters use a 3-step wizard to build extraction templates: Entity Selection → Rule Configuration → Preview & Publish.'
                            }
                        ]
                    }
                },
                { 
                    id: 'summarize-data', 
                    title: 'Summarize my data', 
                    description: 'AI-powered summarization of complex policy documents.',
                    content: {
                        overview: 'A tool that distills hundreds of pages of insurance policy documents into a single, high-impact executive summary.',
                        keyFindings: [
                            'AI-driven entity extraction for policy limits and exclusions.',
                            'Automated risk appetite comparison.',
                            'Context-aware summaries for Brokers and Underwriters.',
                            'Instant translation for international placements.'
                        ],
                        sections: [
                            {
                                title: 'Document Distillation',
                                body: 'The AI analyzes complex legal and insurance jargon to surface the core terms of the policy, allowing professionals to review a document in 2 minutes that previously took 45.'
                            }
                        ]
                    }
                },
                { 
                    id: 'underwriting', 
                    title: 'Underwriting', 
                    description: 'Core underwriting workbench and decision support.',
                    content: {
                        overview: 'The primary workspace for commercial underwriters, integrating risk data, pricing engines, and document management.',
                        keyFindings: [
                            'Integrated pricing and rating engines.',
                            '360-degree view of the submission risk profile.',
                            'Automated referral workflows for over-limit risks.',
                            'Collaborative notes and decision history.'
                        ],
                        sections: [
                            {
                                title: 'The Underwriter Workbench',
                                body: 'A unified interface that eliminates the need to switch between multiple legacy systems. Everything from risk assessment to quote issuance happens in a single, high-fidelity view.'
                            }
                        ]
                    }
                },
                {
                    id: 'operations-dashboard',
                    title: 'Operations Dashboard',
                    description: 'High-level operational metrics and team management.',
                    content: {
                        overview: 'An executive-level command center providing real-time visibility into the entire submission and claims pipeline.',
                        keyFindings: [
                            'Real-time SLA monitoring and bottleneck detection.',
                            'Team capacity and workload visualization.',
                            'AI impact metrics (Extraction Accuracy vs. Manual Effort).',
                            'Drill-down capabilities from global view to specific policies.'
                        ],
                        sections: [
                            {
                                title: 'Executive Visibility',
                                body: 'The dashboard surfaces critical business health indicators, allowing operations leads to reallocate resources in real-time to meet peak demand or clear backlogs.'
                            }
                        ]
                    }
                },
                { 
                    id: 'underwriting-moonrock', 
                    title: 'Underwriting Moonrock', 
                    description: 'Specialized underwriting module for Moonrock partners.',
                    content: {
                        overview: 'A bespoke underwriting workbench developed specifically for Moonrock insurance partners, focusing on specialized risk profiles and proprietary rating logic.',
                        keyFindings: [
                            'Custom risk assessment algorithms.',
                            'Partner-specific white-labeling and branding.',
                            'Real-time pricing feedback for brokers.',
                            'Automated bordereau reporting.'
                        ],
                        sections: [
                            {
                                title: 'Specialized Risk Analysis',
                                body: 'The Moonrock module handles high-complexity risks that standard engines cannot, using advanced data models and human-in-the-loop validation.'
                            }
                        ]
                    }
                }
            ]
        },
        'carrier-global': {
            title: 'Carrier Global',
            subtitle: 'Industrial UI & Workflow Optimization (2020)',
            overview: 'As a Graduate Engineer Trainee at Carrier, I bridged the gap between mechanical engineering and digital interface design. I focused on optimizing internal technical workflows and designing intuitive interfaces for HVAC system configuration tools, ensuring that complex engineering data was accessible to non-technical stakeholders.',
            sections: [
                {
                    title: 'Digital Transformation',
                    content: 'Spearheaded the transition from legacy paper-based workflows to digital configuration tools, reducing engineering hand-off errors by 30%.'
                },
                {
                    title: 'Systems Thinking',
                    content: 'Applied engineering principles to UI design, creating a component library for technical diagrams and system schematics that standardized Carrier’s internal toolset.'
                }
            ],
            role: 'Graduate Engineer Trainee',
            timeline: '2020',
            tools: ['AutoCAD', 'Figma', 'System Architecture'],
            images: [
                { src: '/src/import/Carrier/Screenshot 2026-05-04 at 16.43.43.png', caption: 'Technical Workflow Optimization' }
            ]
        }
    };

    const project = projectData[id];
    const [selectedSubProject, setSelectedSubProject] = useState(null);

    useEffect(() => {
        if (selectedSubProject) {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [selectedSubProject]);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Reset lock state when changing projects
        setIsUnlocked(false);
        setPassword('');
        setError('');
        setSelectedSubProject(null);
    }, [id]);

    const handleUnlock = (e) => {
        e.preventDefault();
        if (password === project.password) {
            setIsUnlocked(true);
            setError('');
        } else {
            setError('Incorrect password. Please reach out to me for access.');
        }
    };

    if (!project) {
        return (
            <div className="container" style={{ paddingTop: '160px', textAlign: 'center', minHeight: '100vh' }}>
                <h2>Project not found</h2>
                <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>Return to home</Link>
            </div>
        );
    }

    if (project.isLocked && !isUnlocked) {
        return (
            <div style={{ minHeight: '100vh', paddingTop: '120px', backgroundColor: 'transparent' }}>
                <div className="container">
                    <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '40px' }}>
                        <ArrowLeft size={20} /> Back to Portfolio
                    </Link>
                    <div className="glass-card" style={{ padding: '80px 48px', borderRadius: '32px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ 
                            width: '64px', 
                            height: '64px', 
                            borderRadius: '100%', 
                            background: 'rgba(37, 99, 235, 0.1)', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            margin: '0 auto 24px' 
                        }}>
                            <Lock size={32} color="#2563EB" />
                        </div>
                        <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Protected Content</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
                            This project is under a Confidentiality Agreement. Please enter the password to view the case study.
                        </p>
                        <form onSubmit={handleUnlock} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                style={{
                                    padding: '16px 24px',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border-soft)',
                                    background: 'var(--bg-primary)',
                                    color: 'var(--text-primary)',
                                    fontSize: '16px',
                                    textAlign: 'center'
                                }}
                            />
                            {error && <p style={{ color: '#ef4444', fontSize: '14px' }}>{error}</p>}
                            <button 
                                type="submit"
                                style={{
                                    padding: '16px',
                                    borderRadius: '12px',
                                    background: '#2563EB',
                                    color: 'white',
                                    border: 'none',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'opacity 0.2s'
                                }}
                                onMouseOver={(e) => e.target.style.opacity = '0.9'}
                                onMouseOut={(e) => e.target.style.opacity = '1'}
                            >
                                Unlock Case Study
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'transparent' }}>
            <div className="container">
                <button 
                    onClick={() => selectedSubProject ? setSelectedSubProject(null) : null}
                    style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '8px', 
                        color: 'var(--text-secondary)', 
                        textDecoration: 'none',
                        marginBottom: '40px',
                        background: 'none',
                        border: 'none',
                        cursor: selectedSubProject ? 'pointer' : 'default',
                        padding: 0,
                        font: 'inherit'
                    }}
                >
                    {selectedSubProject ? (
                        <><ArrowLeft size={20} /> Back to Modules</>
                    ) : (
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit', textDecoration: 'none' }}>
                            <ArrowLeft size={20} /> Back to Portfolio
                        </Link>
                    )}
                </button>

                <div className="glass-card" style={{ padding: selectedSubProject ? '0' : '64px', borderRadius: '32px', overflow: 'hidden' }}>
                    {!selectedSubProject ? (
                        <>
                            {/* Main Project Header */}
                            <div style={{ marginBottom: '64px' }}>
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

                            {/* Main Project Overview */}
                            <div style={{ marginBottom: '64px', maxWidth: '100%' }}>
                                <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Overview</h2>
                                <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '40px' }}>
                                    {project.overview}
                                </p>

                                {project.sections && project.sections.map((section, idx) => (
                                    <div key={idx} style={{ marginBottom: '40px' }}>
                                        <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text-primary)' }}>{section.title}</h3>
                                        <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>{section.content}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Sub-Projects Bento Grid */}
                            {project.subProjects && (
                                <div>
                                    <h2 style={{ fontSize: '32px', marginBottom: '32px' }}>Operational Modules</h2>
                                    <div style={{ 
                                        display: 'grid', 
                                        gridTemplateColumns: 'repeat(3, 1fr)', 
                                        gap: '24px',
                                        gridAutoRows: 'minmax(180px, auto)'
                                    }}>
                                        {project.subProjects.map((sub, idx) => {
                                            // Bento Grid Logic: First item and specific others span 2 columns
                                            const isLarge = idx === 0 || idx === 7;
                                            return (
                                                <div 
                                                    key={idx} 
                                                    onClick={() => setSelectedSubProject(sub)}
                                                    style={{ 
                                                        padding: '32px', 
                                                        background: 'rgba(255, 255, 255, 0.5)', 
                                                        border: '1px solid var(--border-soft)',
                                                        borderRadius: '24px',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'space-between',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                                        gridColumn: isLarge ? 'span 2' : 'span 1'
                                                    }}
                                                    onMouseOver={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
                                                    }}
                                                    onMouseOut={(e) => {
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
                                                        e.currentTarget.style.boxShadow = 'none';
                                                    }}
                                                >
                                                    <div>
                                                        <div style={{ 
                                                            display: 'inline-block', 
                                                            padding: '6px 12px', 
                                                            background: 'rgba(37, 99, 235, 0.1)', 
                                                            color: '#2563EB', 
                                                            borderRadius: '8px', 
                                                            fontSize: '12px', 
                                                            fontWeight: 600, 
                                                            marginBottom: '16px' 
                                                        }}>
                                                            Module {idx + 1}
                                                        </div>
                                                        <h4 style={{ fontSize: '24px', marginBottom: '12px', fontWeight: 600 }}>{sub.title}</h4>
                                                        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{sub.description}</p>
                                                    </div>
                                                    <div style={{ marginTop: '24px', fontWeight: 600, color: '#2563EB', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                        Review Architecture →
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Standard Gallery for other projects */}
                            {(project.images || project.videos) && !project.subProjects && (
                                <div ref={ref3} className={`scroll-hidden ${isVisible3 ? 'scroll-visible' : ''}`}>
                                    <h2 style={{ fontSize: '32px', marginBottom: '32px' }}>Gallery</h2>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
                                        {project.videos && project.videos.map((vid, idx) => (
                                            <div key={idx} style={{ width: '100%' }}>
                                                <video src={vid.src} controls autoPlay loop muted playsInline style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid var(--border-soft)' }} />
                                                <p style={{ textAlign: 'center', marginTop: '16px', color: 'var(--text-secondary)', fontSize: '14px' }}>{vid.caption}</p>
                                            </div>
                                        ))}
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                                            {project.images && project.images.map((img, idx) => (
                                                <div key={idx}>
                                                    <img src={img.src} alt={img.caption} style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--border-soft)' }} />
                                                    <p style={{ textAlign: 'center', marginTop: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>{img.caption}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        /* Confluence-style Detail View */
                        <div style={{ display: 'flex', minHeight: '80vh', background: 'white' }}>
                            {/* Sidebar */}
                            <div style={{ width: '300px', borderRight: '1px solid var(--border-soft)', padding: '40px 24px', background: '#f9f9f9', overflowY: 'auto' }}>
                                <h5 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '24px', letterSpacing: '1px' }}>Modules</h5>
                                {project.subProjects.map((sub, idx) => (
                                    <div 
                                        key={idx}
                                        onClick={() => setSelectedSubProject(sub)}
                                        style={{ 
                                            padding: '12px 16px', 
                                            borderRadius: '8px', 
                                            fontSize: '14px', 
                                            marginBottom: '8px',
                                            cursor: 'pointer',
                                            background: selectedSubProject.id === sub.id ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
                                            color: selectedSubProject.id === sub.id ? '#2563EB' : 'var(--text-primary)',
                                            fontWeight: selectedSubProject.id === sub.id ? 600 : 400
                                        }}
                                    >
                                        {sub.title}
                                    </div>
                                ))}
                            </div>

                            {/* Content Area */}
                            <div style={{ flex: 1, padding: '60px 80px', overflowY: 'auto' }}>
                                <div style={{ marginBottom: '48px' }}>
                                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>MEA Insurance / Modules</span>
                                    <h1 style={{ fontSize: '48px', marginTop: '16px', marginBottom: '24px' }}>{selectedSubProject.title}</h1>
                                    <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{selectedSubProject.description}</p>
                                </div>

                                {selectedSubProject.content ? (
                                    <div className="confluence-content">
                                        <h2 style={{ fontSize: '28px', borderBottom: '2px solid #eee', paddingBottom: '12px', marginBottom: '24px' }}>Overview</h2>
                                        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>{selectedSubProject.content.overview}</p>

                                        {selectedSubProject.content.keyFindings && (
                                            <div style={{ background: '#f4f7ff', padding: '32px', borderRadius: '16px', marginBottom: '40px', borderLeft: '4px solid #2563EB' }}>
                                                <h3 style={{ fontSize: '20px', marginBottom: '16px', color: '#2563EB' }}>Key Product Insights</h3>
                                                <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
                                                    {selectedSubProject.content.keyFindings.map((f, i) => <li key={i}>{f}</li>)}
                                                </ul>
                                            </div>
                                        )}

                                        {selectedSubProject.content.sections && selectedSubProject.content.sections.map((sec, i) => (
                                            <div key={i} style={{ marginBottom: '48px' }}>
                                                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>{sec.title}</h3>
                                                <p style={{ fontSize: '16px', lineHeight: '1.8' }}>{sec.body}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-secondary)' }}>
                                        <p>Documentation for this module is being processed.</p>
                                        <p style={{ fontSize: '14px' }}>Contact me for the full PDF documentation.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
