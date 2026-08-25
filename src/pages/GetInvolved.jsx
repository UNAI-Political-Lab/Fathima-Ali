import React, { useState } from 'react';
import { Send, CheckCircle2, HeartHandshake, Shield, Sparkles, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { translations } from '../data/translations';

export default function GetInvolved({ currentLang }) {
  const t = translations[currentLang].volunteer;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    district: '',
    interest: 'Grassroots Mobilization',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [pledgeCount, setPledgeCount] = useState(5420);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setPledgeCount(prev => prev + 1);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E1C98A', '#17243A', '#c8a04a', '#B8860B']
    });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="get-involved-page section-padding" style={{ backgroundColor: 'var(--ivory-white)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">{t.subtitle}</span>
          <h1 className="section-title">{t.title}</h1>
          <div className="gold-divider"></div>
        </div>

        {/* Live Pledge Counter Banner */}
        <div className="card-dark hover-lift" style={{ padding: '24px 32px', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(225, 201, 138, 0.15)', color: 'var(--champagne-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--champagne-gold)', margin: 0, fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                Live Volunteer Movement
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(250, 250, 247, 0.75)', margin: 0 }}>
                Citizens registered for public service across Tamil Nadu
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-hero-title)', fontSize: '2rem', fontWeight: 800, color: 'var(--champagne-gold)' }}>
              {pledgeCount.toLocaleString()}
            </span>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ivory-white)', fontWeight: 600 }}>
              Volunteers
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          
          {/* Left Column: Why Join */}
          <div>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--navy-institutional)', marginBottom: '20px', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
              Be a Catalyst for Positive Community Progress
            </h2>
            <p style={{ fontSize: '1.02rem', color: 'var(--soft-graphite)', lineHeight: 1.8, marginBottom: '28px' }}>
              Under the leadership of Mrs. Fathima Ali, our volunteer network actively engages in grassroots community building, women's empowerment initiatives, educational welfare, disaster relief, and clean energy advocacy.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { title: "Grassroots Engagement", desc: "Participate in localized community welfare programs across Tamil Nadu districts." },
                { title: "Women's Empowerment", desc: "Support legal rights awareness and leadership workshops for women." },
                { title: "Crisis & Emergency Relief", desc: "Join emergency relief teams for medical supply and ration distribution." },
                { title: "Clean Energy & Ecology", desc: "Promote sustainable Goshala models and green hydrogen solutions." }
              ].map((item, idx) => (
                <div key={idx} className="card-glass hover-lift" style={{ padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--primary-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h3 style={{ fontSize: '1.05rem', color: 'var(--navy-institutional)', marginBottom: '4px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--soft-graphite)', margin: 0, lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="card-glass hover-lift" style={{ padding: '36px', borderTop: '4px solid var(--navy-institutional)' }}>
            
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--surface-subtle)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--navy-institutional)', marginBottom: '12px', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                  Welcome to the Movement!
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--soft-graphite)', lineHeight: 1.6, marginBottom: '28px' }}>
                  {t.successMsg}
                </p>
                <button 
                  onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', district: '', interest: 'Grassroots Mobilization', message: '' }); }}
                  className="btn btn-outline-gold"
                >
                  Register Another Volunteer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                
                <h3 style={{ fontSize: '1.3rem', color: 'var(--navy-institutional)', marginBottom: '4px', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                  Volunteer Registration
                </h3>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy-institutional)', marginBottom: '6px' }}>
                    {t.nameLabel} *
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name" 
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--hairline)', backgroundColor: 'var(--ivory-white)', fontSize: '0.92rem', color: 'var(--soft-graphite)', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy-institutional)', marginBottom: '6px' }}>
                      {t.phoneLabel} *
                    </label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 Mobile number" 
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--hairline)', backgroundColor: 'var(--ivory-white)', fontSize: '0.92rem', color: 'var(--soft-graphite)', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy-institutional)', marginBottom: '6px' }}>
                      {t.emailLabel}
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email address" 
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--hairline)', backgroundColor: 'var(--ivory-white)', fontSize: '0.92rem', color: 'var(--soft-graphite)', outline: 'none' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy-institutional)', marginBottom: '6px' }}>
                    {t.districtLabel} *
                  </label>
                  <input 
                    type="text" 
                    name="district" 
                    required 
                    value={formData.district}
                    onChange={handleInputChange}
                    placeholder="e.g. Chennai / Ramanathapuram / Kanchipuram" 
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--hairline)', backgroundColor: 'var(--ivory-white)', fontSize: '0.92rem', color: 'var(--soft-graphite)', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy-institutional)', marginBottom: '6px' }}>
                    {t.interestLabel}
                  </label>
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--hairline)', backgroundColor: 'var(--ivory-white)', fontSize: '0.92rem', color: 'var(--soft-graphite)', outline: 'none' }}
                  >
                    <option value="Grassroots Mobilization">Grassroots Mobilization</option>
                    <option value="Women's Empowerment">Women's Empowerment</option>
                    <option value="Crisis Relief & Public Service">Crisis Relief & Public Service</option>
                    <option value="Clean Energy & Ecology (NAMO)">Clean Energy & Ecology (NAMO)</option>
                    <option value="Media & Public Relations">Media & Public Relations</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy-institutional)', marginBottom: '6px' }}>
                    {t.messageLabel}
                  </label>
                  <textarea 
                    name="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share any background or specific ways you'd like to contribute..." 
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--hairline)', backgroundColor: 'var(--ivory-white)', fontSize: '0.92rem', color: 'var(--soft-graphite)', outline: 'none', resize: 'none' }}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-saffron magnetic-btn"
                  style={{ width: '100%', padding: '14px', marginTop: '6px' }}
                >
                  <span>{t.submitBtn}</span>
                  <Send size={16} className="arrow-icon" />
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
