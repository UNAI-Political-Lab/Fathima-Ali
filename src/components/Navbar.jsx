import React, { useState } from 'react';
import { Globe, Menu, X, Download, ChevronRight, Award } from 'lucide-react';
import { translations } from '../data/translations';

// Custom Social SVG Icons matching thin gold/slate border circles
function FacebookIcon({ size = 13, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function InstagramIcon({ size = 13, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function XIcon({ size = 12, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function YoutubeIcon({ size = 13, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

// Fathima Ali Monogram / Logo Icon
function FathimaAliMonogram() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 34V18" stroke="#B8860B" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M20 18C15 13 8 13 8 20C8 26 15 28 20 18Z" stroke="#B8860B" strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M20 18C25 13 32 13 32 20C32 26 25 28 20 18Z" stroke="#B8860B" strokeWidth="2.2" strokeLinejoin="round"/>
      <circle cx="20" cy="11" r="3" stroke="#B8860B" strokeWidth="2"/>
    </svg>
  );
}

export default function Navbar({ currentLang, setLang, activeTab, setActiveTab, onOpenPdf }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang].nav;

  // Exact Center items specified
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'vision', label: 'VISION' },
    { id: 'work', label: 'INITIATIVES' },
    { id: 'press', label: 'MEDIA' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating White Premium Navigation Header */}
      <nav 
        style={{
          position: 'fixed',
          top: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '95%',
          maxWidth: '1280px',
          height: '80px',
          backgroundColor: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderRadius: '16px',
          border: '1px solid rgba(225, 201, 138, 0.35)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          zIndex: 100,
          padding: '0 36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* LEFT SECTION: Logo, Monogram, Name & Descriptor */}
        <div 
          onClick={() => handleNavClick('home')} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '14px' }}
        >
          <FathimaAliMonogram />
          <div>
            <h1 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: '#17243A', margin: 0, lineHeight: 1.0, fontWeight: 800, letterSpacing: '0.02em' }}>
              FATHIMA <span style={{ color: '#B8860B' }}>ALI</span>
            </h1>
            <span style={{ fontSize: '0.66rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#B8860B', fontWeight: 700, display: 'block', marginTop: '2px' }}>
              A VOICE FOR CHANGE
            </span>
          </div>

          {/* Vertical Hairline Separator */}
          <div className="logo-separator" style={{ height: '32px', width: '1px', backgroundColor: 'rgba(225, 201, 138, 0.4)', marginLeft: '8px' }}></div>
        </div>

        {/* CENTER SECTION: Nav Links */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: '6px 0',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 800 : 600,
                  letterSpacing: '0.06em',
                  color: isActive ? '#17243A' : '#4A4D53',
                  borderBottom: isActive ? '2px solid #B8860B' : '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* RIGHT SECTION: Social Icons, CONNECT Button & Trilingual Selector */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          
          {/* Social Icons (Facebook, Instagram, X, YouTube) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a href="#" aria-label="Facebook" style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid rgba(184, 134, 11, 0.4)', color: '#B8860B', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
              <FacebookIcon size={13} color="#B8860B" />
            </a>
            <a href="#" aria-label="Instagram" style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid rgba(184, 134, 11, 0.4)', color: '#B8860B', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
              <InstagramIcon size={13} color="#B8860B" />
            </a>
            <a href="#" aria-label="X" style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid rgba(184, 134, 11, 0.4)', color: '#B8860B', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
              <XIcon size={12} color="#B8860B" />
            </a>
            <a href="#" aria-label="YouTube" style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid rgba(184, 134, 11, 0.4)', color: '#B8860B', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
              <YoutubeIcon size={13} color="#B8860B" />
            </a>
          </div>

          {/* Trilingual Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px', backgroundColor: 'rgba(23, 36, 58, 0.04)', padding: '3px 6px', borderRadius: '6px' }}>
            <Globe size={11} style={{ color: '#B8860B' }} />
            <button onClick={() => setLang('en')} style={{ background: currentLang === 'en' ? '#17243A' : 'transparent', color: currentLang === 'en' ? '#FFF' : '#4A4D53', border: 'none', padding: '1px 4px', borderRadius: '3px', cursor: 'pointer', fontWeight: 700, fontSize: '0.68rem' }}>EN</button>
            <button onClick={() => setLang('ta')} style={{ background: currentLang === 'ta' ? '#17243A' : 'transparent', color: currentLang === 'ta' ? '#FFF' : '#4A4D53', border: 'none', padding: '1px 4px', borderRadius: '3px', cursor: 'pointer', fontWeight: 700, fontSize: '0.68rem' }}>தமிழ்</button>
            <button onClick={() => setLang('hi')} style={{ background: currentLang === 'hi' ? '#17243A' : 'transparent', color: currentLang === 'hi' ? '#FFF' : '#4A4D53', border: 'none', padding: '1px 4px', borderRadius: '3px', cursor: 'pointer', fontWeight: 700, fontSize: '0.68rem' }}>हिंदी</button>
          </div>

          {/* CONNECT Button */}
          <button 
            onClick={() => handleNavClick('contact')}
            className="btn btn-primary" 
            style={{
              padding: '10px 22px',
              fontSize: '0.8rem',
              fontWeight: 700,
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
              color: '#FFF',
              boxShadow: '0 3px 12px rgba(184, 134, 11, 0.22)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            CONNECT <ChevronRight size={15} />
          </button>

        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-toggle" style={{ display: 'none' }}>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            style={{ background: 'none', border: 'none', color: '#17243A', cursor: 'pointer', padding: '6px' }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          style={{ 
            position: 'fixed', 
            top: '98px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            width: '95%', 
            maxWidth: '1280px', 
            backgroundColor: 'rgba(255, 255, 255, 0.98)', 
            backdropFilter: 'blur(18px)',
            borderRadius: '16px', 
            border: '1px solid rgba(225, 201, 138, 0.35)', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)', 
            zIndex: 99, 
            padding: '16px 24px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '8px' 
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                textAlign: 'left',
                background: activeTab === item.id ? '#FAF9F5' : 'transparent',
                border: 'none',
                padding: '10px 14px',
                borderRadius: '8px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                fontWeight: activeTab === item.id ? 800 : 600,
                color: activeTab === item.id ? '#B8860B' : '#17243A',
                cursor: 'pointer'
              }}
            >
              {item.label}
            </button>
          ))}
          
          <button 
            onClick={() => handleNavClick('contact')}
            className="btn btn-primary"
            style={{ marginTop: '8px', width: '100%', borderRadius: '999px' }}
          >
            CONNECT <ChevronRight size={16} />
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 1080px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
          .logo-separator { display: none !important; }
        }
      `}</style>
    </>
  );
}
