import React, { useState } from 'react';
import { Shield, Award, CheckCircle, ExternalLink, Filter } from 'lucide-react';
import { rolesData } from '../data/rolesData';

export default function Roles() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Political Leadership", "Party Administration", "Governance & Media", "Clean Energy & Enterprise"];

  const filteredRoles = filter === "All" 
    ? rolesData 
    : rolesData.filter(r => r.category === filter);

  return (
    <div className="roles-page section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Public Service & Governance Experience</span>
          <h1 className="section-title">Organizational Leadership & Positions Held</h1>
          <div className="gold-divider"></div>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                backgroundColor: filter === cat ? 'var(--ink)' : 'var(--bg-subtle)',
                color: filter === cat ? 'var(--white)' : 'var(--charcoal)',
                border: filter === cat ? '1px solid var(--ink)' : '1px solid var(--hairline)',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Roles Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {filteredRoles.map((role) => (
            <div 
              key={role.id}
              className="card-glass"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                borderTop: '4px solid var(--deep-green)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ backgroundColor: 'var(--bg-subtle)', color: 'var(--deep-green)', fontSize: '0.72rem', fontWeight: 800, padding: '4px 10px', borderRadius: '4px', border: '1px solid var(--hairline)', textTransform: 'uppercase' }}>
                    {role.badge}
                  </span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--slate-muted)' }}>
                    {role.tenure}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--ink)', marginBottom: '6px', fontWeight: 800 }}>
                  {role.title}
                </h3>

                <h4 style={{ fontSize: '0.92rem', color: 'var(--slate-muted)', fontWeight: 600, marginBottom: '16px' }}>
                  {role.organization}
                </h4>

                <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {role.description}
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '16px', borderRadius: '8px', borderLeft: '3px solid var(--deep-green)', border: '1px solid var(--hairline)' }}>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--deep-green)', fontWeight: 800, marginBottom: '4px' }}>
                  KEY IMPACT METRIC
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--ink)', fontWeight: 600, lineHeight: 1.4 }}>
                  {role.keyImpact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div style={{ marginTop: '50px', textAlign: 'center', backgroundColor: 'var(--bg-subtle)', padding: '24px', borderRadius: '12px', border: '1px solid var(--hairline)' }}>
          <Shield size={22} style={{ color: 'var(--deep-green)', marginBottom: '8px' }} />
          <p style={{ fontSize: '0.88rem', color: 'var(--charcoal)', margin: 0, maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            All public offices, party enrollments (BJP Enrollment No. 3000107860), and corporate directorships (NAMO Pvt. Ltd.) are verified and compliant with public governance transparency standards.
          </p>
        </div>

      </div>
    </div>
  );
}
