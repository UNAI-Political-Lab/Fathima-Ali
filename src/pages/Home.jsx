import React from 'react';
import { ArrowRight, Users, Scale, Sprout, Target, Award, Download, CheckCircle, Flame, Calendar, Sparkles, HeartHandshake, ShieldCheck, Leaf, Quote } from 'lucide-react';
import { translations } from '../data/translations';
import StatCounter from '../components/StatCounter';
import QuoteCarousel from '../components/QuoteCarousel';
import { pressItems } from '../data/pressData';

export default function Home({ currentLang, setActiveTab, onOpenPdf }) {
  const t = translations[currentLang];

  return (
    <div className="home-page" style={{ backgroundColor: 'var(--ivory-white)' }}>
      
      {/* 1. HERO SECTION MATCHING PROVIDED HTML SPEC */}
      <section 
        className="hero-section" 
        style={{ 
          position: 'relative', 
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '110px',
          paddingBottom: '60px',
          backgroundImage: 'linear-gradient(to right, #FAFAF7 0%, rgba(250, 250, 247, 0.75) 45%, transparent 85%), url(/hero_full.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '680px' }}>
            
            {/* Tagline Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--primary-gold)', fontWeight: 700 }}>
                A VOICE FOR CHANGE
              </span>
            </div>

            {/* Playfair Display Title matching provided HTML */}
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

            {/* Subheading matching provided HTML */}
            <h2 style={{ fontFamily: 'var(--font-body)', fontSize: '1.25rem', color: 'var(--navy-institutional)', fontWeight: 600, letterSpacing: '0.04em', lineHeight: 1.4, marginBottom: '20px', textTransform: 'uppercase' }}>
              A VOICE FOR CHANGE.<br />
              A COMMITMENT FOR PEOPLE.
            </h2>

            {/* Border-Left Paragraph matching provided HTML */}
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
                onClick={() => setActiveTab('contact')}
                className="btn btn-primary"
                style={{ padding: '14px 32px' }}
              >
                Connect Now <ArrowRight size={16} />
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

            {/* 3 Stat Badges matching provided HTML code */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', paddingTop: '20px', borderTop: '1px solid rgba(225, 201, 138, 0.3)' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Users size={32} style={{ color: 'var(--champagne-gold)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-institutional)', letterSpacing: '0.06em' }}>PEOPLE</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--soft-graphite)', letterSpacing: '0.12em' }}>FIRST</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Scale size={32} style={{ color: 'var(--champagne-gold)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-institutional)', letterSpacing: '0.06em' }}>SOCIAL</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--soft-graphite)', letterSpacing: '0.12em' }}>JUSTICE</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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

      {/* 2. STATS STRIP MATCHING PROVIDED HTML CODE */}
      <section style={{ padding: '40px 0', marginTop: '-30px', position: 'relative', zIndex: 20 }}>
        <div className="container">
          <div className="card-glass" style={{ padding: '36px 24px', backgroundColor: 'var(--pure-white)', border: '1px solid rgba(225, 201, 138, 0.3)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px', textAlign: 'center' }}>
              
              <div style={{ padding: '12px' }}>
                <div style={{ fontFamily: 'var(--font-hero-title)', fontSize: '2.75rem', color: 'var(--navy-institutional)', fontWeight: 700, marginBottom: '4px' }}>
                  25+
                </div>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--soft-graphite)', fontWeight: 600 }}>
                  Years of Leadership
                </div>
              </div>

              <div style={{ padding: '12px', borderLeft: '1px solid rgba(225, 201, 138, 0.25)' }}>
                <div style={{ fontFamily: 'var(--font-hero-title)', fontSize: '2.75rem', color: 'var(--navy-institutional)', fontWeight: 700, marginBottom: '4px' }}>
                  5,000+
                </div>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--soft-graphite)', fontWeight: 600 }}>
                  Members Mobilized
                </div>
              </div>

              <div style={{ padding: '12px', borderLeft: '1px solid rgba(225, 201, 138, 0.25)' }}>
                <div style={{ fontFamily: 'var(--font-hero-title)', fontSize: '2.75rem', color: 'var(--navy-institutional)', fontWeight: 700, marginBottom: '4px' }}>
                  70+
                </div>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--soft-graphite)', fontWeight: 600 }}>
                  Towns Coordinated (COVID Relief)
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION MATCHING PROVIDED HTML CODE */}
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

      {/* 4. WORK PILLARS BENTO GRID MATCHING PROVIDED HTML CODE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-low)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <h2 style={{ fontFamily: 'var(--font-section-title)', fontSize: '2.75rem', color: 'var(--navy-institutional)' }}>
              Pillars of Action
            </h2>
            <button 
              onClick={() => setActiveTab('work')} 
              style={{ background: 'none', border: 'none', color: 'var(--primary-gold)', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              View All Initiatives <ArrowRight size={16} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            
            {/* Card 1 */}
            <div className="card-glass" style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--surface-subtle)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--navy-institutional)', marginBottom: '12px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                Grassroots Network
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--soft-graphite)', flexGrow: 1, marginBottom: '20px' }}>
                Building strong, localized networks to ensure community voices directly influence national dialogue.
              </p>
              <button onClick={() => setActiveTab('work')} style={{ background: 'none', border: 'none', color: 'var(--primary-gold)', fontWeight: 700, cursor: 'pointer', alignSelf: 'flex-end' }}>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Card 2 */}
            <div className="card-glass" style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--surface-subtle)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Scale size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--navy-institutional)', marginBottom: '12px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                Policy Advocacy
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--soft-graphite)', flexGrow: 1, marginBottom: '20px' }}>
                Drafting and championing robust legislative frameworks to protect vulnerable demographics.
              </p>
              <button onClick={() => setActiveTab('work')} style={{ background: 'none', border: 'none', color: 'var(--primary-gold)', fontWeight: 700, cursor: 'pointer', alignSelf: 'flex-end' }}>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Card 3 */}
            <div className="card-glass" style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--surface-subtle)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <HeartHandshake size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--navy-institutional)', marginBottom: '12px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                Crisis Response
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--soft-graphite)', flexGrow: 1, marginBottom: '20px' }}>
                Swift, coordinated action during national emergencies to deliver relief where it's needed most.
              </p>
              <button onClick={() => setActiveTab('work')} style={{ background: 'none', border: 'none', color: 'var(--primary-gold)', fontWeight: 700, cursor: 'pointer', alignSelf: 'flex-end' }}>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Card 4 */}
            <div className="card-glass" style={{ padding: '32px', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--surface-subtle)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--navy-institutional)', marginBottom: '12px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                Interfaith Harmony
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--soft-graphite)', flexGrow: 1, marginBottom: '20px' }}>
                Fostering dialogue and understanding to maintain the secular fabric and unity of the nation.
              </p>
              <button onClick={() => setActiveTab('work')} style={{ background: 'none', border: 'none', color: 'var(--primary-gold)', fontWeight: 700, cursor: 'pointer', alignSelf: 'flex-end' }}>
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. NAVY QUOTE BLOCK MATCHING PROVIDED HTML CODE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--navy-institutional)', color: 'var(--ivory-white)', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px', position: 'relative', zIndex: 2 }}>
          <Quote size={54} style={{ color: 'var(--champagne-gold)', margin: '0 auto 24px auto' }} />
          <blockquote style={{ fontFamily: 'var(--font-hero-title)', fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', lineHeight: 1.35, color: 'var(--ivory-white)', marginBottom: '24px' }}>
            "True leadership is about listening, understanding and working together for the greater good."
          </blockquote>
          <div className="gold-divider"></div>
        </div>
      </section>

      {/* 6. LATEST NEWS / FROM THE FIELD MATCHING PROVIDED HTML CODE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ivory-white)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">From the Field</h2>
            <div className="gold-divider"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginBottom: '32px' }}>
            {pressItems.slice(0, 3).map((item) => (
              <div key={item.id} className="card-glass" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80" alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'var(--pure-white)', padding: '3px 8px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 600, color: 'var(--navy-institutional)' }}>
                    {item.date}
                  </div>
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
                  <button onClick={() => setActiveTab('press')} style={{ background: 'none', border: 'none', color: 'var(--primary-gold)', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GET INVOLVED CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-subtle)', textAlign: 'center', borderTop: '1px solid rgba(225, 201, 138, 0.3)' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontFamily: 'var(--font-hero-title)', fontSize: '2.5rem', color: 'var(--navy-institutional)', marginBottom: '16px' }}>
            Join the Movement
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--soft-graphite)', marginBottom: '28px' }}>
            Be a part of the change. Your voice, your action, our future.
          </p>
          <button 
            onClick={() => setActiveTab('involved')}
            className="btn btn-primary"
            style={{ padding: '14px 36px', fontSize: '0.9rem' }}
          >
            Get Involved
          </button>
        </div>
      </section>

    </div>
  );
}
