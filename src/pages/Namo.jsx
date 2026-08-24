import React, { useState } from 'react';
import { Leaf, Zap, Shield, CheckCircle, ArrowRight, Building, Mail, Send } from 'lucide-react';
import { translations } from '../data/translations';
import confetti from 'canvas-confetti';

export default function Namo({ currentLang }) {
  const t = translations[currentLang].namo;
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    setSubmitted(true);
  };

  return (
    <div className="namo-page section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        
        {/* Enterprise Sub-Brand Header */}
        <div style={{ backgroundColor: 'var(--ink)', color: 'var(--white)', padding: '50px 40px', borderRadius: '20px', marginBottom: '60px', position: 'relative', overflow: 'hidden', borderBottom: '4px solid var(--deep-green)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--saffron)', marginBottom: '16px' }}>
            <Leaf size={14} /> SUSTAINABILITY & CLEAN ENERGY ENTERPRISE
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--white)', marginBottom: '8px', fontWeight: 800 }}>
            NAMO PVT. LTD.
          </h1>
          <h2 style={{ fontSize: '1.1rem', color: '#94A3B8', fontWeight: 500, marginBottom: '20px' }}>
            {t.subtitle}
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#E2E8F0', maxWidth: '750px', lineHeight: 1.7, margin: 0 }}>
            {t.desc}
          </p>

          <div style={{ marginTop: '24px', fontSize: '0.88rem', color: 'var(--white)', fontWeight: 600 }}>
            Managing Director: <strong>Mrs. Fathima Ali</strong>
          </div>
        </div>

        {/* 2 Main Pillar Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          
          {/* Green Hydrogen */}
          <div className="card-glass" style={{ padding: '36px', borderTop: '4px solid var(--deep-green)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--hairline)', color: 'var(--deep-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Zap size={24} />
            </div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '12px', fontWeight: 800 }}>
              {t.hydrogen}
            </h3>
            <p style={{ color: 'var(--charcoal)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
              {t.hydrogenDesc} Spearheading zero-emission hydrogen electrolysis research to power heavy commercial mobility and industrial manufacturing hubs in South India.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--ink)', fontWeight: 600 }}>
              <li style={{ display: 'flex', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--deep-green)' }} /> Zero Carbon Emission Output</li>
              <li style={{ display: 'flex', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--deep-green)' }} /> Industrial Decarbonization Roadmap</li>
              <li style={{ display: 'flex', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--deep-green)' }} /> Solar-Assisted Water Electrolysis</li>
            </ul>
          </div>

          {/* Goshala & Organic Farming */}
          <div className="card-glass" style={{ padding: '36px', borderTop: '4px solid var(--india-green)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--hairline)', color: 'var(--india-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Leaf size={24} />
            </div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '12px', fontWeight: 800 }}>
              {t.goshala}
            </h3>
            <p style={{ color: 'var(--charcoal)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
              {t.goshalaDesc} Combining traditional Goshala cattle sanctuary management with modern bio-fertilizer extraction, reducing agricultural carbon emissions and restoring soil vitality.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--ink)', fontWeight: 600 }}>
              <li style={{ display: 'flex', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--india-green)' }} /> Organic Bio-Fertilizer Production</li>
              <li style={{ display: 'flex', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--india-green)' }} /> Methane Capture & Clean Bio-Gas</li>
              <li style={{ display: 'flex', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--india-green)' }} /> Soil Regeneration & Farmer Training</li>
            </ul>
          </div>

        </div>

        {/* Dedicated B2B Inquiry Form */}
        <div className="card-glass" style={{ padding: '40px', maxWidth: '750px', margin: '0 auto', backgroundColor: 'var(--white)', border: '1px solid var(--hairline)' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--ink)', marginBottom: '6px', fontWeight: 800 }}>
              Sustainability & Enterprise Partnerships
            </h3>
            <p style={{ color: 'var(--charcoal)', fontSize: '0.9rem' }}>
              Interested in clean hydrogen adoption or organic Goshala technology partnerships with NAMO Pvt. Ltd.? Submit your enterprise inquiry below.
            </p>
          </div>

          {submitted ? (
            <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--deep-green)' }}>
              <CheckCircle size={36} style={{ color: 'var(--deep-green)', marginBottom: '12px' }} />
              <h4 style={{ color: 'var(--ink)', fontSize: '1.15rem', fontWeight: 800 }}>Inquiry Submitted Successfully</h4>
              <p style={{ color: 'var(--charcoal)', fontSize: '0.88rem' }}>The NAMO clean energy desk will get in touch with your team shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <input 
                  type="text" 
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--hairline)', fontFamily: 'var(--font-body)', outline: 'none' }}
                />
                <input 
                  type="text" 
                  placeholder="Company / Organization *"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--hairline)', fontFamily: 'var(--font-body)', outline: 'none' }}
                />
              </div>

              <input 
                type="email" 
                placeholder="Official Email Address *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--hairline)', fontFamily: 'var(--font-body)', outline: 'none' }}
              />

              <textarea 
                rows={4}
                placeholder="Details of your sustainability or clean hydrogen project..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--hairline)', fontFamily: 'var(--font-body)', outline: 'none' }}
              />

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                <Send size={16} /> Submit Partnership Inquiry
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
