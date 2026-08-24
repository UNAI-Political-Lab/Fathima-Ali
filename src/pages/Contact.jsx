import React, { useState } from 'react';
import { Phone, Mail, MapPin, Award, Clock, Send, CheckCircle, Navigation } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({ particleCount: 70, spread: 50, origin: { y: 0.6 } });
    setSubmitted(true);
  };

  return (
    <div className="contact-page section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Reach Out to Our Secretariat</span>
          <h1 className="section-title">Contact & Office Details</h1>
          <div className="gold-divider"></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '50px' }}>
          
          {/* Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Phone Action Card */}
            <div className="card-glass" style={{ padding: '24px', display: 'flex', gap: '16px', borderLeft: '4px solid var(--deep-green)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--hairline)', color: 'var(--deep-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '4px', fontWeight: 700 }}>Telephone Contacts</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate-muted)', marginBottom: '8px' }}>Direct political & secretariat line:</p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontWeight: 800, fontSize: '0.95rem' }}>
                  <a href="tel:+919500157786" style={{ color: 'var(--ink)', textDecoration: 'none' }}>+91 9500157786</a>
                  <span style={{ opacity: 0.3 }}>|</span>
                  <a href="tel:+919500164786" style={{ color: 'var(--ink)', textDecoration: 'none' }}>+91 9500164786</a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="card-glass" style={{ padding: '24px', display: 'flex', gap: '16px', borderLeft: '4px solid var(--ink)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--hairline)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '4px', fontWeight: 700 }}>Email Secretariat</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate-muted)', marginBottom: '6px' }}>For official communications and press:</p>
                <a href="mailto:sathfa@gmail.com" style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--deep-green)', textDecoration: 'none' }}>
                  sathfa@gmail.com
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="card-glass" style={{ padding: '24px', display: 'flex', gap: '16px', borderLeft: '4px solid var(--saffron)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--hairline)', color: 'var(--deep-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '4px', fontWeight: 700 }}>Headquarters Secretariat</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: 1.5, margin: 0 }}>
                  Flat No. 5B, Kothari Road, D.No.18/B, Nungambakkam, Chennai – 600034, Tamil Nadu, India.
                </p>
              </div>
            </div>

            {/* Hours / Credentials */}
            <div className="card-dark" style={{ padding: '20px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--saffron)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
                <Award size={16} /> Official Affiliation & Enrollment
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>
                Vice President – Minority Welfare (AIADMK) · State Secretary (BJP TN, Enrollment No. 3000107860)
              </div>
            </div>

          </div>

          {/* Interactive Form */}
          <div className="card-glass" style={{ padding: '36px', backgroundColor: 'var(--white)' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--ink)', marginBottom: '16px', fontWeight: 800 }}>
              Send a Direct Message
            </h3>

            {submitted ? (
              <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--deep-green)' }}>
                <CheckCircle size={36} style={{ color: 'var(--deep-green)', marginBottom: '10px' }} />
                <h4 style={{ color: 'var(--ink)', fontSize: '1.15rem', fontWeight: 800 }}>Message Dispatched</h4>
                <p style={{ color: 'var(--charcoal)', fontSize: '0.88rem' }}>Thank you. Our secretariat will acknowledge your query shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <input 
                  type="text" 
                  required 
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--hairline)', fontFamily: 'var(--font-body)', outline: 'none', backgroundColor: 'var(--bg-subtle)' }}
                />
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <input 
                    type="email" 
                    required 
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--hairline)', fontFamily: 'var(--font-body)', outline: 'none', backgroundColor: 'var(--bg-subtle)' }}
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--hairline)', fontFamily: 'var(--font-body)', outline: 'none', backgroundColor: 'var(--bg-subtle)' }}
                  />
                </div>

                <input 
                  type="text" 
                  placeholder="Subject / Purpose of Contact"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--hairline)', fontFamily: 'var(--font-body)', outline: 'none', backgroundColor: 'var(--bg-subtle)' }}
                />

                <textarea 
                  rows={4} 
                  required 
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--hairline)', fontFamily: 'var(--font-body)', outline: 'none', backgroundColor: 'var(--bg-subtle)' }}
                />

                <button type="submit" className="btn btn-primary">
                  <Send size={16} /> Send Message to Secretariat
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Map Location Snippet Banner */}
        <div className="card-glass" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', backgroundColor: 'var(--bg-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Navigation size={24} style={{ color: 'var(--deep-green)' }} />
            <div>
              <h4 style={{ color: 'var(--ink)', fontSize: '1.05rem', margin: 0, fontWeight: 700 }}>Nungambakkam Office Location</h4>
              <p style={{ color: 'var(--slate-muted)', fontSize: '0.85rem', margin: 0 }}>Kothari Road, Chennai – 600034</p>
            </div>
          </div>
          <a 
            href="https://maps.google.com/?q=Kothari+Road+Nungambakkam+Chennai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline-gold"
            style={{ fontSize: '0.82rem', padding: '9px 18px' }}
          >
            Open in Google Maps
          </a>
        </div>

      </div>
    </div>
  );
}
