import React, { useState } from 'react';
import { Newspaper, Calendar, Search, ExternalLink, Download, Mail, Filter } from 'lucide-react';
import { pressCategories, pressItems } from '../data/pressData';

export default function Press({ onOpenPdf }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPress = pressItems.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.source.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="press-page section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Media Coverage & Official Releases</span>
          <h1 className="section-title">Press & News Archive</h1>
          <div className="gold-divider"></div>
        </div>

        {/* Search & Filter Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginBottom: '40px' }}>
          
          {/* Search Box */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--slate-muted)' }} />
            <input 
              type="text"
              placeholder="Search news, statements, or sources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 46px',
                borderRadius: '999px',
                border: '1px solid var(--hairline)',
                backgroundColor: 'var(--bg-subtle)',
                fontSize: '0.92rem',
                fontFamily: 'var(--font-body)',
                outline: 'none'
              }}
            />
          </div>

          {/* Category Chips */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {pressCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  backgroundColor: activeCategory === cat ? 'var(--ink)' : 'var(--bg-subtle)',
                  color: activeCategory === cat ? 'var(--white)' : 'var(--charcoal)',
                  border: activeCategory === cat ? '1px solid var(--ink)' : '1px solid var(--hairline)',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* News Feed Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '50px' }}>
          {filteredPress.length > 0 ? (
            filteredPress.map((item) => (
              <div 
                key={item.id}
                className="card-glass"
                style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ backgroundColor: 'var(--bg-subtle)', color: 'var(--deep-green)', fontSize: '0.72rem', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', border: '1px solid var(--hairline)', textTransform: 'uppercase' }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--slate-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={12} /> {item.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: 'var(--ink)', marginBottom: '10px', lineHeight: 1.4, fontWeight: 700 }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: 1.6, marginBottom: '16px' }}>
                    {item.snippet}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--hairline)', paddingTop: '12px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--ink)' }}>
                    {item.source}
                  </span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--deep-green)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Read Coverage <ExternalLink size={12} />
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', backgroundColor: 'var(--bg-subtle)', borderRadius: '12px', border: '1px solid var(--hairline)' }}>
              <p style={{ color: 'var(--charcoal)', margin: 0 }}>No press articles found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Media Desk Box */}
        <div className="card-dark" style={{ padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h3 style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '4px', fontWeight: 800 }}>
              Journalist & Media Desk Enquiries
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.88rem', margin: 0 }}>
              For official statements, interview requests, or high-res photographs: email <strong>sathfa@gmail.com</strong>
            </p>
          </div>
          <button onClick={onOpenPdf} className="btn btn-outline-gold" style={{ backgroundColor: 'var(--white)', color: 'var(--ink)', border: 'none' }}>
            <Download size={15} /> Official Press Kit PDF
          </button>
        </div>

      </div>
    </div>
  );
}
