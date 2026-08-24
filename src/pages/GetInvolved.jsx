import React, { useState } from 'react';
import { Users, Heart, CheckCircle, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';
import confetti from 'canvas-confetti';

export default function GetInvolved({ currentLang }) {
  const t = translations[currentLang].volunteer;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    district: '',
    interest: 'Grassroots Community Work',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setSubmitted(true);
  };

  return (
    <div className="involved-page section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">{t.subtitle}</span>
          <h1 className="section-title">{t.title}</h1>
          <div className="gold-divider"></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'flex-start' }}>
          
          {/* Left Column: Ways to Get Involved */}
          <div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '16px', fontWeight: 800 }}>
              Four Ways to Drive Community Impact
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
              {[
                { title: "Volunteer in Grassroots Drives", desc: "Join local community listening sessions, medical supply distribution, and door-to-door welfare campaigns." },
                { title: "Join Political Membership Drive", desc: "Be part of the active political network of 5,000+ members working towards transparent governance." },
                { title: "Participate in Interfaith Dialogues", desc: "Contribute to local neighborhood peace committees, temple processions, and unity summits." },
                { title: "Report Local Community Issues", desc: "Submit infrastructure, sanitation, or lighting concerns from your constituency directly to our secretariat." }
              ].map((item, idx) => (
                <div key={idx} className="card-glass" style={{ padding: '20px', borderLeft: '4px solid var(--deep-green)' }}>
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '4px', fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--charcoal)', margin: 0, lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="card-dark" style={{ padding: '24px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)', marginBottom: '8px' }}>
                <Sparkles size={18} style={{ color: 'var(--saffron)' }} />
                <h4 style={{ margin: 0, color: 'var(--white)', fontSize: '1rem', fontWeight: 700 }}>Constituency Coordinator Routing</h4>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', margin: 0 }}>
                Signups from Chennai, Ramanathapuram, Kanchipuram, and Thiruvallur are automatically routed to regional district coordinators for rapid onboarding.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Sign-up Form */}
          <div className="card-glass" style={{ padding: '36px', borderTop: '4px solid var(--deep-green)' }}>
            
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--deep-green)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', boxShadow: 'var(--shadow-card)' }}>
                  <CheckCircle size={32} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--ink)', marginBottom: '12px', fontWeight: 800 }}>
                  Welcome to the Movement!
                </h3>
                <p style={{ color: 'var(--charcoal)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {t.successMsg}
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="btn btn-outline-gold"
                >
                  Submit Another Registration
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--ink)', marginBottom: '2px', fontWeight: 800 }}>
                  Volunteer & Membership Registration
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate-muted)', marginBottom: '10px' }}>
                  Fill in your contact details below to join Mrs. Fathima Ali's political initiative.
                </p>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>
                    {t.nameLabel} *
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--hairline)', fontSize: '0.92rem', fontFamily: 'var(--font-body)', outline: 'none', backgroundColor: 'var(--bg-subtle)' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>
                      {t.phoneLabel} *
                    </label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--hairline)', fontSize: '0.92rem', fontFamily: 'var(--font-body)', outline: 'none', backgroundColor: 'var(--bg-subtle)' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>
                      {t.emailLabel}
                    </label>
                    <input 
                      type="email" 
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--hairline)', fontSize: '0.92rem', fontFamily: 'var(--font-body)', outline: 'none', backgroundColor: 'var(--bg-subtle)' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>
                      {t.districtLabel} *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Chennai / Ramanathapuram"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--hairline)', fontSize: '0.92rem', fontFamily: 'var(--font-body)', outline: 'none', backgroundColor: 'var(--bg-subtle)' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>
                      {t.interestLabel}
                    </label>
                    <select 
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--hairline)', fontSize: '0.92rem', fontFamily: 'var(--font-body)', outline: 'none', backgroundColor: 'var(--bg-subtle)' }}
                    >
                      <option value="Grassroots Community Work">Grassroots Community Work</option>
                      <option value="Minority Welfare Outreach">Minority Welfare Outreach</option>
                      <option value="Interfaith Harmony Forums">Interfaith Harmony Forums</option>
                      <option value="NAMO Clean Energy Project">NAMO Clean Energy Project</option>
                      <option value="General Political Member">General Political Member</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>
                    {t.messageLabel}
                  </label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us how you would like to contribute..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--hairline)', fontSize: '0.92rem', fontFamily: 'var(--font-body)', outline: 'none', backgroundColor: 'var(--bg-subtle)' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', marginTop: '6px' }}>
                  <Send size={16} /> {t.submitBtn}
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
