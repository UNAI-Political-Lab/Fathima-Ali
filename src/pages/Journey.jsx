import React, { useState } from 'react';
import { Calendar, MapPin, Tag, Filter } from 'lucide-react';
import { timelineData } from '../data/timelineData';

export default function Journey() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Political Roles", "Social Work", "Policy Advocacy", "Crisis Response", "Sustainability"];

  const filteredTimeline = activeFilter === "All" 
    ? timelineData 
    : timelineData.filter(item => item.category === activeFilter);

  return (
    <div className="journey-page section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">25+ Years of Dedicated Service</span>
          <h1 className="section-title">Interactive Political Journey & Milestones</h1>
          <div className="gold-divider"></div>
        </div>

        {/* Filter Chips */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '50px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                backgroundColor: activeFilter === cat ? 'var(--ink)' : 'var(--bg-subtle)',
                color: activeFilter === cat ? 'var(--white)' : 'var(--charcoal)',
                border: activeFilter === cat ? '1px solid var(--ink)' : '1px solid var(--hairline)',
                padding: '8px 16px',
                borderRadius: '999px',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Items List */}
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          
          {/* Vertical Timeline Guide Line */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '20px', width: '2px', backgroundColor: 'var(--hairline-dark)' }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {filteredTimeline.map((item, index) => (
              <div 
                key={index}
                className="card-glass"
                style={{ 
                  marginLeft: '44px', 
                  padding: '28px', 
                  position: 'relative',
                  borderLeft: '4px solid var(--deep-green)'
                }}
              >
                {/* Timeline Dot Indicator */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    top: '28px', 
                    left: '-32px', 
                    width: '14px', 
                    height: '14px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--white)', 
                    border: '3px solid var(--deep-green)',
                    boxShadow: 'var(--shadow-sm)'
                  }} 
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--ink)' }}>
                    {item.year}
                  </span>
                  <span style={{ backgroundColor: 'var(--bg-subtle)', color: 'var(--deep-green)', fontSize: '0.72rem', fontWeight: 800, padding: '3px 10px', borderRadius: '4px', border: '1px solid var(--hairline)', textTransform: 'uppercase' }}>
                    {item.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', color: 'var(--ink)', marginBottom: '8px', fontWeight: 700 }}>
                  {item.title}
                </h3>

                <div style={{ display: 'flex', gap: '16px', fontSize: '0.82rem', color: 'var(--slate-muted)', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Tag size={13} style={{ color: 'var(--deep-green)' }} /> {item.category}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} style={{ color: 'var(--saffron)' }} /> {item.location}
                  </span>
                </div>

                <p style={{ color: 'var(--charcoal)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
