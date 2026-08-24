import React from 'react';
import { Phone, Mail, MapPin, Award, ArrowUp, FileText } from 'lucide-react';
import { translations } from '../data/translations';

export default function Footer({ currentLang, setActiveTab, onOpenPdf }) {
  const t = translations[currentLang].footer;
  const navT = translations[currentLang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'var(--navy-institutional)', color: 'var(--ivory-white)', paddingTop: '70px', paddingBottom: '30px', borderTop: '1px solid rgba(225, 201, 138, 0.2)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(225, 201, 138, 0.15)' }}>
          
          {/* Col 1: Brand & Credentials matching provided HTML */}
          <div>
            <div style={{ fontFamily: 'var(--font-hero-title)', fontSize: '2rem', color: 'var(--champagne-gold)', marginBottom: '8px', fontWeight: 700 }}>
              FATHIMA ALI
            </div>
            <p style={{ color: 'rgba(250, 250, 247, 0.75)', fontSize: '0.88rem', marginBottom: '20px', letterSpacing: '0.08em', fontWeight: 600 }}>
              LEADERSHIP FOR A BETTER TOMORROW.
            </p>

            <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', borderLeft: '3px solid var(--champagne-gold)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--champagne-gold)', fontWeight: 600 }}>{t.enrolment}</span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(250, 250, 247, 0.7)' }}>AIADMK VP · State Secretary BJP TN</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: 'var(--champagne-gold)', fontSize: '0.88rem', fontFamily: 'var(--font-body)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {[
                { id: 'about', label: navT.about },
                { id: 'vision', label: navT.vision },
                { id: 'journey', label: navT.journey },
                { id: 'roles', label: navT.roles },
                { id: 'work', label: navT.work },
                { id: 'namo', label: navT.namo },
                { id: 'gallery', label: navT.gallery },
                { id: 'press', label: navT.press },
                { id: 'involved', label: navT.involved },
                { id: 'contact', label: navT.contact }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => { setActiveTab(item.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    style={{ background: 'none', border: 'none', color: 'rgba(250, 250, 247, 0.75)', cursor: 'pointer', fontSize: '0.85rem', transition: 'color 0.2s', padding: 0 }}
                  >
                    › {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '20px' }}>
              <button 
                onClick={onOpenPdf}
                style={{ background: 'var(--champagne-gold)', color: 'var(--navy-institutional)', border: 'none', padding: '9px 16px', borderRadius: '6px', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <FileText size={15} /> Download Press Kit
              </button>
            </div>
          </div>

          {/* Col 3: Official Office Contact */}
          <div>
            <h4 style={{ color: 'var(--champagne-gold)', fontSize: '0.88rem', fontFamily: 'var(--font-body)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
              Headquarters Secretariat
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: 'rgba(250, 250, 247, 0.75)' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} style={{ color: 'var(--champagne-gold)', flexShrink: 0, marginTop: '2px' }} />
                <span>{t.office}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Phone size={16} style={{ color: 'var(--champagne-gold)', flexShrink: 0 }} />
                <div>
                  <a href="tel:+919500157786" style={{ color: 'var(--ivory-white)', textDecoration: 'none', fontWeight: 600 }}>+91 9500157786</a>
                  <span style={{ opacity: 0.4 }}> / </span>
                  <a href="tel:+919500164786" style={{ color: 'var(--ivory-white)', textDecoration: 'none', fontWeight: 600 }}>+91 9500164786</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Mail size={16} style={{ color: 'var(--champagne-gold)', flexShrink: 0 }} />
                <a href="mailto:sathfa@gmail.com" style={{ color: 'var(--champagne-gold)', textDecoration: 'none' }}>sathfa@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{ paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '0.78rem', color: 'rgba(250, 250, 247, 0.5)' }}>
          <div>
            © 2024 FATHIMA ALI. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span>Leadership for a Better Tomorrow</span>
            <button 
              onClick={scrollToTop} 
              style={{ background: 'rgba(255,255,255,0.08)', border: 'none', color: 'var(--champagne-gold)', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem' }}
            >
              <ArrowUp size={14} /> Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
