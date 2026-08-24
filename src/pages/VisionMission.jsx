import React from 'react';
import { Heart, ShieldCheck, Users, Sparkles, Leaf, CheckCircle, ArrowRight, Quote } from 'lucide-react';
import { translations } from '../data/translations';

export default function VisionMission({ currentLang, setActiveTab }) {
  const t = translations[currentLang].vision;

  const valuesList = [
    { title: "Compassion", desc: "Empathy in action, service from the heart", icon: Heart },
    { title: "Integrity", desc: "Upholding honesty and accountability in everything", icon: ShieldCheck },
    { title: "Empowerment", desc: "Enabling people to rise, lead and inspire", icon: Users },
    { title: "Unity", desc: "Building bridges, strengthening communities", icon: Sparkles },
    { title: "Progress", desc: "Working today for a stronger, brighter tomorrow", icon: Leaf },
  ];

  return (
    <div className="vision-page section-padding" style={{ backgroundColor: 'var(--ivory-white)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">{t.subtitle}</span>
          <h1 className="section-title">{t.title}</h1>
          <div className="gold-divider"></div>
        </div>

        {/* Vision Statement Banner */}
        <div className="card-dark" style={{ padding: '48px', marginBottom: '60px', position: 'relative', overflow: 'hidden', borderLeft: '6px solid var(--champagne-gold)' }}>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--champagne-gold)', fontWeight: 700 }}>
            OUR GUIDING VISION
          </span>
          <h2 style={{ fontFamily: 'var(--font-hero-title)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'var(--ivory-white)', marginTop: '12px', marginBottom: '20px', lineHeight: 1.35, fontWeight: 700 }}>
            "To build an inclusive, progressive, and empowered India where every citizen has the opportunity to thrive with dignity."
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginTop: '30px', borderTop: '1px solid rgba(225,201,138,0.2)', paddingTop: '20px' }}>
            {["Inclusive Growth", "Progressive Society", "Dignity for All", "Grassroots Empowerment"].map((pillar, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ivory-white)', fontSize: '0.85rem', fontWeight: 600 }}>
                <CheckCircle size={15} style={{ color: 'var(--champagne-gold)' }} /> {pillar}
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
          <div>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--primary-gold)', fontWeight: 700 }}>
              OUR MISSION
            </span>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--navy-institutional)', marginTop: '6px', marginBottom: '16px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
              Driving Meaningful Change Through Service
            </h2>
            <p style={{ fontSize: '1.08rem', color: 'var(--soft-graphite)', lineHeight: 1.8, marginBottom: '24px' }}>
              "To work with dedication and transparency, driving meaningful change in the lives of people through service, education, women's empowerment, and community development."
            </p>
            <button onClick={() => setActiveTab('work')} className="btn btn-primary">
              Explore Public Service Pillars <ArrowRight size={16} />
            </button>
          </div>

          {/* A Promise to the Nation */}
          <div className="card-glass" style={{ padding: '32px', borderTop: '4px solid var(--navy-institutional)' }}>
            <h3 style={{ color: 'var(--navy-institutional)', fontSize: '1.2rem', marginBottom: '16px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
              A Promise to the Nation
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { title: "To Listen", text: "To understand every voice and concern." },
                { title: "To Serve", text: "To act with sincerity and dedication." },
                { title: "To Empower", text: "To create opportunities for all." },
                { title: "To Build", text: "To contribute towards a stronger India." }
              ].map((c, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '6px', backgroundColor: 'var(--navy-institutional)', color: 'var(--ivory-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, fontSize: '0.8rem' }}>
                    {idx + 1}
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy-institutional)' }}>{c.title}:</strong> <span style={{ color: 'var(--soft-graphite)', fontSize: '0.9rem' }}>{c.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values That Drive Change */}
        <div>
          <div className="section-header">
            <span className="section-subtitle">Core Pillars of Action</span>
            <h2 className="section-title">Values That Drive Change</h2>
            <div className="gold-divider"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '50px' }}>
            {valuesList.map((v, i) => (
              <div key={i} className="card-glass" style={{ padding: '28px', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--surface-subtle)', border: '1px solid var(--hairline)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  <v.icon size={22} />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--navy-institutional)', marginBottom: '8px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--soft-graphite)', lineHeight: 1.6, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quote Block */}
          <div style={{ backgroundColor: 'var(--surface-low)', border: '1px solid var(--hairline)', padding: '36px', borderRadius: '16px', textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
            <Quote size={32} style={{ color: 'var(--primary-gold)', margin: '0 auto 12px auto' }} />
            <p style={{ fontFamily: 'var(--font-hero-title)', fontSize: '1.4rem', color: 'var(--navy-institutional)', fontWeight: 600, fontStyle: 'italic', margin: 0 }}>
              “Service is my purpose. People are my strength. Progress is our destination.”
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
