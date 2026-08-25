import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Scale, Sprout, Target, Award, Download, CheckCircle, Flame, Calendar, Sparkles, HeartHandshake, ShieldCheck, Leaf, Quote, Play } from 'lucide-react';
import confetti from 'canvas-confetti';
import { translations } from '../data/translations';
import StatCounter from '../components/StatCounter';
import QuoteCarousel from '../components/QuoteCarousel';
import { pressItems } from '../data/pressData';

export default function Home({ currentLang, setActiveTab, onOpenPdf }) {
  const t = translations[currentLang];
  const [scrollY, setScrollY] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#E1C98A', '#17243A', '#c8a04a', '#B8860B']
    });
  };

  return (
    <div className="home-page" style={{ backgroundColor: 'var(--ivory-white)' }}>
      
      {/* 1. HERO SECTION WITH PARALLAX BACKGROUND EFFECT */}
      <section 
        className="hero-section" 
        style={{ 
          position: 'relative', 
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '110px',
          paddingBottom: '60px',
          backgroundImage: 'linear-gradient(to right, #FAFAF7 0%, rgba(250, 250, 247, 0.75) 45%, transparent 85%), url(/hero_full.png)',
          backgroundSize: 'cover',
          backgroundPosition: `center ${scrollY * 0.2}px`,
          overflow: 'hidden',
          transition: 'background-position 0.1s ease-out'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '680px' }}>
            
            {/* Tagline Badge */}
            <div className="hover-scale" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px', backgroundColor: 'rgba(225, 201, 138, 0.15)', padding: '6px 14px', borderRadius: '999px', border: '1px solid rgba(225, 201, 138, 0.4)' }}>
              <Sparkles size={14} style={{ color: 'var(--primary-gold)' }} />
              <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--primary-gold)', fontWeight: 700 }}>
                A VOICE FOR CHANGE
              </span>
            </div>

            {/* Playfair Display Title */}
            <h1 
              style={{ 
                fontFamily: 'var(--font-hero-title)', 
                fontSize: 'clamp(3rem, 6vw, 5.25rem)', 
                color: 'var(--navy-institutional)', 
                lineHeight: 1.05, 
                letterSpacing: '-0.03em', 
                marginBottom: '20px', 
                fontWeight: 700 
              }}
            >
              FATHIMA <span style={{ color: 'var(--champagne-gold)', fontStyle: 'italic', fontWeight: 600 }}>ALI</span>
            </h1>

            {/* Subheading */}
            <h2 style={{ fontFamily: 'var(--font-body)', fontSize: '1.25rem', color: 'var(--navy-institutional)', fontWeight: 600, letterSpacing: '0.04em', lineHeight: 1.4, marginBottom: '20px', textTransform: 'uppercase' }}>
              A VOICE FOR CHANGE.<br />
              A COMMITMENT FOR PEOPLE.
            </h2>

            {/* Border-Left Paragraph */}
            <p 
              style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '1.05rem', 
                color: 'var(--soft-graphite)', 
                maxWidth: '540px', 
                marginBottom: '32px', 
                borderLeft: '3px solid var(--champagne-gold)', 
                paddingLeft: '20px',
                lineHeight: 1.7 
              }}
            >
              Dedicated to Social Justice, Empowerment, and Sustainable Development for a Better Tomorrow.
            </p>

            {/* Hero CTA Buttons */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <button 
                onClick={() => { triggerConfetti(); setActiveTab('contact'); }}
                className="btn btn-primary magnetic-btn"
                style={{ padding: '14px 32px' }}
              >
                <span>Connect Now</span>
                <ArrowRight size={16} className="arrow-icon" />
              </button>
              <button 
                onClick={() => setActiveTab('about')}
                className="btn btn-outline-gold"
              >
                Read Biography
              </button>
              <button 
                onClick={onOpenPdf}
                className="btn btn-outline-gold"
              >
                <Download size={15} /> Dossier PDF
              </button>
            </div>

            {/* 3 Stat Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', paddingTop: '20px', borderTop: '1px solid rgba(225, 201, 138, 0.3)' }}>
              
              <div className="hover-scale" style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => setActiveTab('work')}>
                <Users size={32} style={{ color: 'var(--champagne-gold)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-institutional)', letterSpacing: '0.06em' }}>PEOPLE</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--soft-graphite)', letterSpacing: '0.12em' }}>FIRST</span>
                </div>
              </div>

              <div className="hover-scale" style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => setActiveTab('work')}>
                <Scale size={32} style={{ color: 'var(--champagne-gold)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-institutional)', letterSpacing: '0.06em' }}>SOCIAL</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--soft-graphite)', letterSpacing: '0.12em' }}>JUSTICE</span>
                </div>
              </div>

              <div className="hover-scale" style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => setActiveTab('namo')}>
                <Sprout size={32} style={{ color: 'var(--champagne-gold)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-institutional)', letterSpacing: '0.06em' }}>SUSTAINABLE</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--soft-graphite)', letterSpacing: '0.12em' }}>FUTURE</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS STRIP WITH ANIMATED COUNTERS */}
      <section style={{ padding: '40px 0', marginTop: '-30px', position: 'relative', zIndex: 20 }}>
        <div className="container">
          <div className="card-glass hover-lift" style={{ padding: '36px 24px', backgroundColor: 'var(--pure-white)', border: '1px solid rgba(225, 201, 138, 0.3)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px', textAlign: 'center' }}>
              
              <div style={{ padding: '12px' }}>
                <StatCounter target={25} suffix="+" label="Years of Leadership" />
              </div>

              <div style={{ padding: '12px', borderLeft: '1px solid rgba(225, 201, 138, 0.25)' }}>
                <StatCounter target={5000} suffix="+" label="Members Mobilized" />
              </div>

              <div style={{ padding: '12px', borderLeft: '1px solid rgba(225, 201, 138, 0.25)' }}>
                <StatCounter target={70} suffix="+" label="Towns Coordinated (COVID Relief)" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ivory-white)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div className="gold-divider" style={{ marginBottom: '24px' }}></div>
            <h2 style={{ fontFamily: 'var(--font-section-title)', fontSize: '2.75rem', color: 'var(--navy-institutional)', marginBottom: '20px' }}>
              Leadership for the People
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--soft-graphite)', lineHeight: 1.8 }}>
              A lifelong dedication to fostering inclusive growth, empowering marginalized communities, and driving systemic policy changes that uplift the nation from the grassroots up. True progress is measured by the prosperity of every citizen.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WORK PILLARS BENTO GRID WITH HOVER-LIFT CARDS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-low)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <h2 style={{ fontFamily: 'var(--font-section-title)', fontSize: '2.75rem', color: 'var(--navy-institutional)' }}>
              Pillars of Action
            </h2>
            <button 
              onClick={() => setActiveTab('work')} 
              className="magnetic-btn"
              style={{ background: 'none', border: 'none', color: 'var(--primary-gold)', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <span>View All Initiatives</span>
              <ArrowRight size={16} className="arrow-icon" />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            
            {/* Card 1 */}
            <div className="card-glass hover-lift" style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }} onClick={() => setActiveTab('work')}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--surface-subtle)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--navy-institutional)', marginBottom: '12px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                Grassroots Network
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--soft-graphite)', flexGrow: 1, marginBottom: '20px' }}>
                Building strong, localized networks to ensure community voices directly influence national dialogue.
              </p>
              <div className="magnetic-btn" style={{ color: 'var(--primary-gold)', fontWeight: 700, alignSelf: 'flex-end' }}>
                <ArrowRight size={18} className="arrow-icon" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="card-glass hover-lift" style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }} onClick={() => setActiveTab('work')}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--surface-subtle)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Scale size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--navy-institutional)', marginBottom: '12px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                Policy Advocacy
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--soft-graphite)', flexGrow: 1, marginBottom: '20px' }}>
                Drafting and championing robust legislative frameworks to protect vulnerable demographics.
              </p>
              <div className="magnetic-btn" style={{ color: 'var(--primary-gold)', fontWeight: 700, alignSelf: 'flex-end' }}>
                <ArrowRight size={18} className="arrow-icon" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="card-glass hover-lift" style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }} onClick={() => setActiveTab('work')}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--surface-subtle)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <HeartHandshake size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--navy-institutional)', marginBottom: '12px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                Crisis Response
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--soft-graphite)', flexGrow: 1, marginBottom: '20px' }}>
                Swift, coordinated action during national emergencies to deliver relief where it's needed most.
              </p>
              <div className="magnetic-btn" style={{ color: 'var(--primary-gold)', fontWeight: 700, alignSelf: 'flex-end' }}>
                <ArrowRight size={18} className="arrow-icon" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="card-glass hover-lift" style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }} onClick={() => setActiveTab('work')}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--surface-subtle)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--navy-institutional)', marginBottom: '12px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                Interfaith Harmony
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--soft-graphite)', flexGrow: 1, marginBottom: '20px' }}>
                Fostering dialogue and understanding to maintain the secular fabric and unity of the nation.
              </p>
              <div className="magnetic-btn" style={{ color: 'var(--primary-gold)', fontWeight: 700, alignSelf: 'flex-end' }}>
                <ArrowRight size={18} className="arrow-icon" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. NAVY QUOTE BLOCK WITH SHIMMER AND CAROUSEL */}
      <section className="section-padding" style={{ backgroundColor: 'var(--navy-institutional)', color: 'var(--ivory-white)', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px', position: 'relative', zIndex: 2 }}>
          <Quote size={54} style={{ color: 'var(--champagne-gold)', margin: '0 auto 24px auto' }} />
          <QuoteCarousel />
          <div className="gold-divider" style={{ marginTop: '24px' }}></div>
        </div>
      </section>

      {/* 6. LATEST NEWS / FROM THE FIELD WITH HOVER ELEVATION & LIGHTBOX PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ivory-white)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">From the Field</h2>
            <div className="gold-divider"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginBottom: '32px' }}>
            {pressItems.slice(0, 3).map((item) => (
              <div key={item.id} className="card-glass hover-lift" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80" alt={item.title} className="hover-scale" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'var(--pure-white)', padding: '3px 8px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 600, color: 'var(--navy-institutional)', boxShadow: 'var(--shadow-sm)' }}>
                    {item.date}
                  </div>
                  
                  {/* Play Video / Read Overlay Button */}
                  <button 
                    onClick={() => setSelectedVideo(item)}
                    aria-label="Play Keynote Video"
                    style={{ position: 'absolute', inset: 0, background: 'rgba(23, 36, 58, 0.3)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: 0, transition: 'opacity 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                  >
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--champagne-gold)', color: 'var(--navy-institutional)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                      <Play size={20} style={{ marginLeft: '3px' }} />
                    </div>
                  </button>
                </div>
                <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--navy-institutional)', marginBottom: '8px', lineHeight: 1.4, fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--soft-graphite)', marginBottom: '16px' }}>
                      {item.snippet}
                    </p>
                  </div>
                  <button onClick={() => setActiveTab('press')} className="magnetic-btn" style={{ background: 'none', border: 'none', color: 'var(--primary-gold)', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    <span>Read More</span>
                    <ArrowRight size={14} className="arrow-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GET INVOLVED CTA WITH CONFETTI INTERACTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-subtle)', textAlign: 'center', borderTop: '1px solid rgba(225, 201, 138, 0.3)' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontFamily: 'var(--font-hero-title)', fontSize: '2.5rem', color: 'var(--navy-institutional)', marginBottom: '16px' }}>
            Join the Movement
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--soft-graphite)', marginBottom: '28px' }}>
            Be a part of the change. Your voice, your action, our future.
          </p>
          <button 
            onClick={() => { triggerConfetti(); setActiveTab('involved'); }}
            className="btn btn-primary magnetic-btn"
            style={{ padding: '14px 36px', fontSize: '0.9rem' }}
          >
            <span>Get Involved</span>
            <ArrowRight size={16} className="arrow-icon" />
          </button>
        </div>
      </section>

      {/* VIDEO / MEDIA LIGHTBOX MODAL */}
      {selectedVideo && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(23, 36, 58, 0.85)', backdropFilter: 'blur(8px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ backgroundColor: 'var(--pure-white)', width: '100%', maxWidth: '700px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--hairline)', boxShadow: 'var(--shadow-hover)' }}>
            <div style={{ backgroundColor: 'var(--navy-institutional)', color: 'var(--ivory-white)', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.1rem', margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--champagne-gold)' }}>{selectedVideo.title}</h3>
              <button onClick={() => setSelectedVideo(null)} style={{ background: 'none', border: 'none', color: '#FFF', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold' }}>✕</button>
            </div>
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--surface-low)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                <Play size={28} />
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--soft-graphite)', lineHeight: 1.6, marginBottom: '24px' }}>
                {selectedVideo.snippet}
              </p>
              <button onClick={() => setSelectedVideo(null)} className="btn btn-primary">
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
