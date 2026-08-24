import React, { useState } from 'react';
import { Users, ShieldCheck, Flame, HeartHandshake, Leaf, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';

export default function WorkPillars({ currentLang, setActiveTab }) {
  const [activePillar, setActivePillar] = useState("grassroots");

  const pillars = [
    {
      id: "grassroots",
      title: "Grassroots Network & Mobilization",
      icon: Users,
      headline: "Facilitated Enrollment of 5,000+ Minority Members",
      summary: "Converting passive communities into active political participants across sensitive and high-resistance minority belts in Tamil Nadu.",
      initiatives: [
        "Facilitated enrollment of 5,000+ minority members into active political participation.",
        "Built and maintained long-term relationships with community leadership networks.",
        "Actively participated in statewide election campaigns (2017–2019).",
        "Established sustained presence in sensitive and high-resistance minority belts.",
        "Worked closely with Jamath institutions and local leaders across Chennai, Ramanathapuram, Kanchipuram & Thiruvallur."
      ],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "policy",
      title: "Ideological Engagement & Policy Advocacy",
      icon: ShieldCheck,
      headline: "Clarity, Dialogue & Addressing Misinformation",
      summary: "Leading structured outreach on key national legal reforms, engaging directly with community stakeholders.",
      initiatives: [
        "Led awareness efforts on the Triple Talaq Reform (2017–2018), engaging directly with Muslim women and community leaders.",
        "Conducted outreach and discussions on Article 370 across Tamil Nadu.",
        "Organized structured debates and clarifications on the Citizenship Amendment Act, addressing concerns and misinformation.",
        "Facilitated dialogue platforms on Ayodhya-related issues involving multiple stakeholders."
      ],
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "public",
      title: "Public Engagement & Debate",
      icon: Flame,
      headline: "Structured & Balanced Viewpoints in Minority Forums",
      summary: "Active participation in public debates on national security, social harmony, women's empowerment, and cultural cinema.",
      initiatives: [
        "Participated in public debates and discussions on national security, PFI, women's empowerment, and social harmony.",
        "Took positions on The Kashmir Files, The Kerala Story, and other sensitive subjects to create awareness and clarity.",
        "Recognized for articulating structured and balanced viewpoints within minority forums."
      ],
      image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "crisis",
      title: "Crisis Response & Social Contribution",
      icon: HeartHandshake,
      headline: "Relief Coordination Across 70+ Towns and Panchayats",
      summary: "Humanitarian assistance during pandemic emergencies, welfare awareness, and solar energy deployment.",
      initiatives: [
        "Coordinated COVID-19 relief support across 70+ towns and panchayats, including medical supply distribution.",
        "Conducted community-level awareness on government schemes and support systems.",
        "Implemented initiatives such as solar-light projects for underserved communities.",
        "Continued long-standing support to Jamath organizations and minority welfare activities."
      ],
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "namo",
      title: "Professional & Development Initiatives",
      icon: Leaf,
      headline: "Hydrogen Clean Energy & Sustainable Goshala Management",
      summary: "Enterprise leadership under NAMO focused on clean energy mobility, industrial decarbonization, and carbon emission reduction.",
      initiatives: [
        "Leading hydrogen-based clean energy solutions for mobility and industry through NAMO.",
        "Promoting sustainable and cost-effective energy alternatives.",
        "Supporting long-term environmental and development goals.",
        "Leading initiatives in Goshala management and sustainability, including carbon emission reduction."
      ],
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const activeData = pillars.find(p => p.id === activePillar);

  return (
    <div className="work-pillars-page section-padding" style={{ backgroundColor: 'var(--ivory-white)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Core Pillars of Action</span>
          <h1 className="section-title">Public Service & Achievements</h1>
          <div className="gold-divider"></div>
        </div>

        {/* Pillar Selection Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {pillars.map((p) => {
            const Icon = p.icon;
            const isActive = activePillar === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePillar(p.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: isActive ? 'var(--navy-institutional)' : 'var(--pure-white)',
                  color: isActive ? 'var(--ivory-white)' : 'var(--soft-graphite)',
                  border: isActive ? '1px solid var(--navy-institutional)' : '1px solid var(--hairline)',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <Icon size={16} style={{ color: isActive ? 'var(--champagne-gold)' : 'var(--primary-gold)' }} />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Content View */}
        {activeData && (
          <div className="card-glass" style={{ padding: '40px', borderTop: '4px solid var(--primary-gold)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
              
              {/* Pillar Details */}
              <div>
                <h2 style={{ fontSize: '1.75rem', color: 'var(--navy-institutional)', marginBottom: '12px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                  {activeData.headline}
                </h2>

                <p style={{ fontSize: '1.02rem', color: 'var(--soft-graphite)', lineHeight: 1.7, marginBottom: '24px' }}>
                  {activeData.summary}
                </p>

                <h3 style={{ fontSize: '1.05rem', color: 'var(--navy-institutional)', marginBottom: '14px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                  Key Achievements & Initiatives:
                </h3>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {activeData.initiatives.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem' }}>
                      <CheckCircle size={16} style={{ color: 'var(--primary-gold)', flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ color: 'var(--soft-graphite)' }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '30px' }}>
                  <button onClick={() => setActiveTab('involved')} className="btn btn-primary">
                    Get Involved in This Pillar <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Pillar Media Photo */}
              <div>
                <div className="card-glass" style={{ height: '360px', overflow: 'hidden' }}>
                  <img 
                    src={activeData.image} 
                    alt={activeData.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
