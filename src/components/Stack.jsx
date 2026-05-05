import React from 'react';
import { stackData } from '../data/stack';

const Stack = () => {
    return (
        <section id="stack" className="section-padding">
            <div className="container">
                <div className="section-header slide-up">
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px' }}>Stack</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '64px' }}>
                        A list of tools, software, and hardware I use daily to build, design, and prototype.
                    </p>
                </div>

                <div className="stack-categories">
                    {stackData.map((category, idx) => (
                        <div key={idx} className="category-group slide-up glass-card" style={{ 
                            animationDelay: `${idx * 0.1}s`, 
                            marginBottom: '48px',
                            padding: '32px',
                            borderRadius: '24px'
                        }}>
                            <h3 style={{ 
                                fontSize: '13px', 
                                fontWeight: '600',
                                textTransform: 'uppercase', 
                                letterSpacing: '0.15em', 
                                color: 'var(--text-secondary)', 
                                marginBottom: '32px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px'
                            }}>
                                {category.category}
                                <span style={{ flex: 1, height: '1px', background: 'var(--border-soft)' }}></span>
                            </h3>
                            <div className="stack-grid" style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                                gap: '24px' 
                            }}>
                                {category.tools.map((tool, tIdx) => (
                                    <a 
                                        key={tIdx} 
                                        href={tool.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="stack-card-v2"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '20px',
                                            textDecoration: 'none',
                                            padding: '8px 0',
                                            transition: 'transform 0.2s ease, opacity 0.2s ease'
                                        }}
                                    >
                                        <div className="tool-icon-v2" style={{
                                            width: '48px',
                                            height: '48px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'var(--bg-primary)',
                                            borderRadius: '12px',
                                            border: '1px solid var(--border-soft)',
                                            padding: '10px',
                                            flexShrink: 0
                                        }}>
                                            <img 
                                                src={tool.icon} 
                                                alt={tool.name} 
                                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                                            />
                                            <span style={{ display: 'none', fontSize: '24px' }}>🛠️</span>
                                        </div>
                                        <div className="tool-info">
                                            <h4 style={{ 
                                                fontSize: '17px', 
                                                fontWeight: '600', 
                                                marginBottom: '2px',
                                                color: 'var(--text-primary)'
                                            }}>{tool.name}</h4>
                                            <p style={{ 
                                                fontSize: '14px', 
                                                color: 'var(--text-secondary)', 
                                                lineHeight: '1.4' 
                                            }}>{tool.description}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .stack-card-v2:hover {
                    transform: translateX(4px);
                }
                .stack-card-v2:hover .tool-icon-v2 {
                    border-color: var(--text-primary);
                }
                @media (max-width: 768px) {
                    .stack-grid {
                        grid-template-columns: 1fr !important;
                        gap: 24px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Stack;
