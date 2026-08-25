import React, { useState } from 'react';
import { 
  ArrowRight, Download, Users, Scale, Sprout, Heart, ShieldCheck, 
  Sparkles, Leaf, CheckCircle, Quote, MessageSquare, Award, Clock, 
  ChevronRight, Building2, Sun, Globe2, HelpCircle, FileText
} from 'lucide-react';
import { rolesData } from '../data/rolesData';
import { timelineData } from '../data/timelineData';

export default function About({ currentLang, setActiveTab, onOpenPdf }) {
  const [activeValue, setActiveValue] = useState(0);
  const [activePolicyTopic, setActivePolicyTopic] = useState("triple-talaq");

  const policyTopics = [
    { id: "triple-talaq", title: "Triple Talaq Reform", detail: "Led direct awareness initiatives with Muslim women and community leaders (2017–2018), framing discussions around legal rights, dignity, and gender equality." },
    { id: "article-370", title: "Article 370", detail: "Conducted statewide outreach in Tamil Nadu to explain national integration, Constitutional equality, and regional development." },
    { id: "caa", title: "Citizenship Amendment Act", detail: "Organized structured debates and multi-stakeholder clarifications to dispel public misinformation and provide factual context." },
    { id: "ayodhya", title: "Ayodhya Developments", detail: "Facilitated dialogue platforms promoting communal peace, mutual understanding, and respect for statutory judicial outcomes." },
    { id: "womens-empowerment", title: "Women's Empowerment", detail: "Advocating for female political participation, educational access, and leadership roles in public decision-making." },
    { id: "national-security", title: "National Security", detail: "Participated in public forums discussing internal stability, strategic national interests, and counter-extremism." },
    { id: "social-harmony", title: "Social Harmony", detail: "Fostering interfaith dialogue and building bridges between diverse religious and cultural institutions across South India." },
    { id: "misinformation", title: "Public Awareness & Misinformation", detail: "Countering unverified media claims through transparent community meetings, factsheets, and open discussions." }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-page-editorial" style={{ backgroundColor: 'var(--ivory-white)', overflowX: 'hidden' }}>
      
      {/* ─────────────────────────────────────────────────────────────
          HERO SECTION WITH /about_hero.png AS FULL BACKGROUND IMAGE
         ───────────────────────────────────────────────────────────── */}
      <section 
        style={{ 
          position: 'relative', 
          minHeight: '88vh', 
          display: 'flex', 
          alignItems: 'center', 
          paddingTop: '120px', 
          paddingBottom: '70px',
          backgroundImage: 'linear-gradient(to right, #FAFAF7 0%, rgba(250, 250, 247, 0.82) 42%, transparent 85%), url(/about_hero.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'var(--ivory-white)',
          borderBottom: '1px solid rgba(225, 201, 138, 0.35)',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '680px' }}>
            
            {/* Tagline Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--primary-gold)', fontWeight: 700 }}>
                LEADERSHIP PROFILE
              </span>
            </div>

            {/* Playfair Display Title */}
            <h1 
              style={{ 
                fontFamily: 'var(--font-hero-title)', 
                fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)', 
                color: 'var(--navy-institutional)', 
                lineHeight: 1.08, 
                letterSpacing: '-0.03em', 
                marginBottom: '18px', 
                fontWeight: 700 
              }}
            >
              MRS. FATHIMA <span style={{ color: 'var(--champagne-gold)', fontStyle: 'italic', fontWeight: 600 }}>ALI</span>
            </h1>

            {/* Sub-headline */}
            <h2 style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', color: 'var(--navy-institutional)', fontWeight: 600, letterSpacing: '0.04em', lineHeight: 1.4, marginBottom: '20px', textTransform: 'uppercase' }}>
              A Decade of Service.<br />
              A Lifetime of Commitment.
            </h2>

            {/* Paragraph with Left Accent Line */}
            <p 
              style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '1.08rem', 
                color: 'var(--soft-graphite)', 
                lineHeight: 1.75, 
                marginBottom: '36px', 
                borderLeft: '3px solid var(--champagne-gold)', 
                paddingLeft: '20px',
                backgroundColor: 'rgba(250, 250, 247, 0.75)',
                borderRadius: '0 8px 8px 0',
                paddingTop: '6px',
                paddingBottom: '6px'
              }}
            >
              25+ years of grassroots engagement, community leadership and public service across Tamil Nadu. Dedicated to minority welfare, women's empowerment, interfaith harmony, and inclusive development.
            </p>

            {/* Hero CTAs */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '30px' }}>
              <button 
                onClick={() => scrollToSection('journey-section')}
                className="btn btn-primary"
                style={{ padding: '14px 30px' }}
              >
                Explore Her Journey <ArrowRight size={16} />
              </button>

              <button 
                onClick={onOpenPdf}
                className="btn btn-outline-gold"
                style={{ padding: '14px 26px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
              >
                <Download size={15} /> Download Profile PDF
              </button>
            </div>

            {/* Credential Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'var(--navy-institutional)', color: 'var(--ivory-white)', padding: '10px 18px', borderRadius: '10px', boxShadow: 'var(--shadow-sm)' }}>
              <Award size={18} style={{ color: 'var(--champagne-gold)' }} />
              <span style={{ fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                State Secretary – Minority Morcha (BJP TN) · AIADMK VP (2024–2025)
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 01: THE WOMAN BEHIND THE LEADERSHIP
         ───────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ivory-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'flex-start' }}>
            
            {/* Left Editorial Header */}
            <div>
              <span className="section-subtitle">01 — Profile Overview</span>
              <h2 style={{ fontFamily: 'var(--font-hero-title)', fontSize: '2.5rem', color: 'var(--navy-institutional)', lineHeight: 1.2, marginBottom: '20px', fontWeight: 700 }}>
                The Woman Behind<br />the Leadership
              </h2>
              <div className="gold-divider" style={{ margin: '0 0 24px 0' }}></div>
              <p style={{ fontSize: '1.25rem', fontFamily: 'var(--font-hero-title)', color: 'var(--primary-gold)', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.4 }}>
                “A Life Rooted in Service. A Leadership Journey Built on the Ground.”
              </p>
            </div>

            {/* Right Paragraph Content */}
            <div className="card-glass" style={{ padding: '36px' }}>
              <p style={{ fontSize: '1.02rem', color: 'var(--soft-graphite)', lineHeight: 1.8, marginBottom: '18px' }}>
                Mrs. Fathima Ali is a Tamil Nadu-based public leader whose journey has been shaped by more than 25 years of grassroots political engagement, community interaction, and public-service initiatives.
              </p>
              <p style={{ fontSize: '1.02rem', color: 'var(--soft-graphite)', lineHeight: 1.8, marginBottom: '18px' }}>
                With a background in Sociology and a deep understanding of community dynamics, she has built her public life around direct engagement with people, community institutions, women, and grassroots leadership networks.
              </p>
              <p style={{ fontSize: '1.02rem', color: 'var(--soft-graphite)', lineHeight: 1.8, marginBottom: '18px' }}>
                Her journey reflects a consistent commitment to minority welfare, women's empowerment, social harmony, community development, and meaningful public participation.
              </p>
              <div style={{ backgroundColor: 'var(--surface-low)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--primary-gold)', marginTop: '24px' }}>
                <p style={{ fontSize: '0.98rem', color: 'var(--navy-institutional)', fontWeight: 600, margin: 0, lineHeight: 1.6 }}>
                  For Mrs. Fathima Ali, leadership is not defined merely by a position. It is defined by the ability to listen, understand, organize, serve, and remain connected to people.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02: HER JOURNEY (IMPACT NUMBERS SECTION)
         ───────────────────────────────────────────────────────────── */}
      <section id="journey-section" className="section-padding" style={{ backgroundColor: 'var(--surface-low)', borderTop: '1px solid rgba(225, 201, 138, 0.3)', borderBottom: '1px solid rgba(225, 201, 138, 0.3)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">02 — Impact Anchors</span>
            <h2 className="section-title">Her Journey</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--soft-graphite)', maxWidth: '680px', margin: '12px auto 0 auto' }}>
              From Grassroots Engagement to Institutional Leadership
            </p>
            <div className="gold-divider" style={{ marginTop: '20px' }}></div>
          </div>

          <p style={{ fontSize: '1.02rem', color: 'var(--soft-graphite)', textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto', lineHeight: 1.75 }}>
            Over more than two decades, Mrs. Fathima Ali has developed extensive experience in grassroots political organization and community engagement across Tamil Nadu. Her work has included building relationships with community leadership and Jamath institutions across Chennai, Ramanathapuram, Kanchipuram, and Thiruvallur, while facilitating the enrollment of more than 5,000 minority members into active political participation.
          </p>

          {/* 4 Impact Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            
            <div className="card-glass" style={{ padding: '32px 24px', textAlign: 'center', borderTop: '4px solid var(--champagne-gold)' }}>
              <div style={{ fontFamily: 'var(--font-hero-title)', fontSize: '3rem', color: 'var(--navy-institutional)', fontWeight: 700, marginBottom: '8px' }}>
                25+ Years
              </div>
              <h3 style={{ fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary-gold)', fontWeight: 700, marginBottom: '8px' }}>
                Grassroots Engagement
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--soft-graphite)', margin: 0 }}>
                Sustained political and community engagement across Tamil Nadu constituencies.
              </p>
            </div>

            <div className="card-glass" style={{ padding: '32px 24px', textAlign: 'center', borderTop: '4px solid var(--champagne-gold)' }}>
              <div style={{ fontFamily: 'var(--font-hero-title)', fontSize: '3rem', color: 'var(--navy-institutional)', fontWeight: 700, marginBottom: '8px' }}>
                5,000+
              </div>
              <h3 style={{ fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary-gold)', fontWeight: 700, marginBottom: '8px' }}>
                Members Enrolled
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--soft-graphite)', margin: 0 }}>
                Facilitated active minority enrollment into organized political participation.
              </p>
            </div>

            <div className="card-glass" style={{ padding: '32px 24px', textAlign: 'center', borderTop: '4px solid var(--champagne-gold)' }}>
              <div style={{ fontFamily: 'var(--font-hero-title)', fontSize: '3rem', color: 'var(--navy-institutional)', fontWeight: 700, marginBottom: '8px' }}>
                70+ Towns
              </div>
              <h3 style={{ fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary-gold)', fontWeight: 700, marginBottom: '8px' }}>
                COVID Relief Towns
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--soft-graphite)', margin: 0 }}>
                Coordinated emergency medical supplies across 70+ towns and panchayats.
              </p>
            </div>

            <div className="card-glass" style={{ padding: '32px 24px', textAlign: 'center', borderTop: '4px solid var(--champagne-gold)' }}>
              <div style={{ fontFamily: 'var(--font-hero-title)', fontSize: '3rem', color: 'var(--navy-institutional)', fontWeight: 700, marginBottom: '8px' }}>
                6 Key Roles
              </div>
              <h3 style={{ fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary-gold)', fontWeight: 700, marginBottom: '8px' }}>
                Institutional Leadership
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--soft-graphite)', margin: 0 }}>
                Responsibilities spanning political offices, CBFC, Gau Raksha & NAMO enterprise.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03: LEADERSHIP TODAY
         ───────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ivory-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">03 — Current Scope</span>
            <h2 className="section-title">Leadership Today</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--soft-graphite)', maxWidth: '700px', margin: '12px auto 0 auto' }}>
              Experience That Connects Communities and Institutions
            </p>
            <div className="gold-divider" style={{ marginTop: '20px' }}></div>
          </div>

          <div className="card-dark" style={{ padding: '40px', marginBottom: '40px' }}>
            <h3 style={{ color: 'var(--champagne-gold)', fontSize: '1.35rem', marginBottom: '16px', fontFamily: 'var(--font-hero-title)', fontWeight: 700 }}>
              State Secretary, Minority Morcha — Tamil Nadu BJP
            </h3>
            <p style={{ fontSize: '1.02rem', color: 'var(--ivory-white)', lineHeight: 1.75, marginBottom: '24px' }}>
              Mrs. Fathima Ali currently serves as State Secretary of the Minority Morcha for Tamil Nadu BJP. Her organizational journey has also included serving as Vice President for Minority Welfare with AIADMK (2024–2025) and South India Organizer of the Muslim Rashtriya Manch, where she continues as a member.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', borderTop: '1px solid rgba(225, 201, 138, 0.2)', paddingTop: '24px' }}>
              <div>
                <h4 style={{ color: 'var(--champagne-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Statutory Board Member</h4>
                <p style={{ color: 'var(--ivory-white)', fontSize: '0.92rem', margin: 0 }}>Central Board of Film Certification (CBFC)</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--champagne-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>National General Secretary</h4>
                <p style={{ color: 'var(--ivory-white)', fontSize: '0.92rem', margin: 0 }}>Akhil Bharatiya Gau Raksha Mahasabha</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--champagne-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Managing Director</h4>
                <p style={{ color: 'var(--ivory-white)', fontSize: '0.92rem', margin: 0 }}>Natural Agriculture and Modern Organic Pvt. Ltd. (NAMO)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 04: GRASSROOTS LEADERSHIP
         ───────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">04 — Core Methodology</span>
            <h2 className="section-title">Grassroots Leadership</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--soft-graphite)', maxWidth: '680px', margin: '12px auto 0 auto' }}>
              Leadership Begins Where People Live
            </p>
            <div className="gold-divider" style={{ marginTop: '20px' }}></div>
          </div>

          <p style={{ fontSize: '1.02rem', color: 'var(--soft-graphite)', textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px auto', lineHeight: 1.75 }}>
            Mrs. Fathima Ali's political experience has been shaped by direct grassroots engagement. Rather than limiting leadership to organizational structures, her work has involved establishing long-term relationships with community representatives, local leaders, Jamath institutions, and people across sensitive regions of Tamil Nadu.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            
            <div className="card-glass" style={{ padding: '32px 24px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--surface-subtle)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <MessageSquare size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--navy-institutional)', marginBottom: '8px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                1. Listen First
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--soft-graphite)', lineHeight: 1.6, margin: 0 }}>
                Understanding concerns directly from communities, women, and local stakeholders through open forums.
              </p>
            </div>

            <div className="card-glass" style={{ padding: '32px 24px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--surface-subtle)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Users size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--navy-institutional)', marginBottom: '8px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                2. Build Relationships
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--soft-graphite)', lineHeight: 1.6, margin: 0 }}>
                Developing sustained relationships with community institutions, Jamaths, and grassroots leadership.
              </p>
            </div>

            <div className="card-glass" style={{ padding: '32px 24px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--surface-subtle)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Sparkles size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--navy-institutional)', marginBottom: '8px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                3. Create Participation
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--soft-graphite)', lineHeight: 1.6, margin: 0 }}>
                Encouraging citizens to become active participants in public decision-making and democratic processes.
              </p>
            </div>

            <div className="card-glass" style={{ padding: '32px 24px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--surface-subtle)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Clock size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--navy-institutional)', marginBottom: '8px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                4. Stay Connected
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--soft-graphite)', lineHeight: 1.6, margin: 0 }}>
                Maintaining a continuing presence beyond individual election campaigns or political events.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 05: MINORITY WELFARE & COMMUNITY ENGAGEMENT
         ───────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ivory-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            
            <div>
              <span className="section-subtitle">05 — Outreach & Inclusion</span>
              <h2 style={{ fontFamily: 'var(--font-hero-title)', fontSize: '2.4rem', color: 'var(--navy-institutional)', lineHeight: 1.2, marginBottom: '20px', fontWeight: 700 }}>
                Minority Welfare &<br />Community Engagement
              </h2>
              <div className="gold-divider" style={{ margin: '0 0 24px 0' }}></div>
              
              <p style={{ fontSize: '1.02rem', color: 'var(--soft-graphite)', lineHeight: 1.75, marginBottom: '18px' }}>
                Minority welfare and community engagement have remained significant areas of Mrs. Fathima Ali's public work. Her experience includes sustained interaction with minority communities, Jamath institutions, women, and community leadership across Chennai, Ramanathapuram, Kanchipuram, and Thiruvallur.
              </p>
              <p style={{ fontSize: '1.02rem', color: 'var(--soft-graphite)', lineHeight: 1.75, marginBottom: '24px' }}>
                She has undertaken awareness and dialogue initiatives surrounding major national developments, emphasizing dialogue, clarification, public awareness, and addressing misinformation through structured engagement.
              </p>
            </div>

            <div className="card-glass" style={{ padding: '36px', borderLeft: '4px solid var(--champagne-gold)' }}>
              <h3 style={{ color: 'var(--navy-institutional)', fontSize: '1.25rem', marginBottom: '14px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                A Community-Centred Perspective
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--soft-graphite)', lineHeight: 1.7, marginBottom: '20px' }}>
                The objective is not simply to communicate with communities, but to understand the questions, concerns, expectations, and aspirations that shape them.
              </p>
              <div style={{ backgroundColor: 'var(--surface-low)', padding: '18px', borderRadius: '10px', fontSize: '0.92rem', color: 'var(--navy-institutional)', fontWeight: 600 }}>
                Through this approach, Mrs. Fathima Ali has sought to create spaces for conversation, awareness, and greater participation in public life.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 06: WOMEN'S EMPOWERMENT
         ───────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">06 — Gender Equality</span>
            <h2 className="section-title">Women's Empowerment</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--soft-graphite)', maxWidth: '680px', margin: '12px auto 0 auto' }}>
              Creating Space for Women's Voices
            </p>
            <div className="gold-divider" style={{ marginTop: '20px' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '40px' }}>
            
            <div className="card-glass" style={{ padding: '32px', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--navy-institutional)', fontSize: '1.2rem', marginBottom: '10px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>1. Access to Information</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--soft-graphite)', margin: 0 }}>Empowerment begins when women understand legal rights and government welfare opportunities.</p>
            </div>

            <div className="card-glass" style={{ padding: '32px', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--navy-institutional)', fontSize: '1.2rem', marginBottom: '10px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>2. Confidence to Participate</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--soft-graphite)', margin: 0 }}>Creating supportive spaces for Muslim women and minority female leaders in public discourse.</p>
            </div>

            <div className="card-glass" style={{ padding: '32px', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--navy-institutional)', fontSize: '1.2rem', marginBottom: '10px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>3. Voices Heard</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--soft-graphite)', margin: 0 }}>Ensuring women participate meaningfully in decisions affecting their families and society.</p>
            </div>

          </div>

          <div style={{ backgroundColor: 'var(--navy-institutional)', color: 'var(--ivory-white)', padding: '36px', borderRadius: '16px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <Quote size={36} style={{ color: 'var(--champagne-gold)', margin: '0 auto 12px auto' }} />
            <blockquote style={{ fontFamily: 'var(--font-hero-title)', fontSize: '1.3rem', color: 'var(--ivory-white)', fontWeight: 600, fontStyle: 'italic', marginBottom: '12px', lineHeight: 1.4 }}>
              “Empowerment begins when people have access to information, the confidence to participate, and the opportunity to make their voices heard.”
            </blockquote>
            <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--champagne-gold)', fontWeight: 700 }}>
              — Mrs. Fathima Ali
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 07: PUBLIC SERVICE IN ACTION (FULL-WIDTH DARK SECTION)
         ───────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--navy-institutional)', color: 'var(--ivory-white)', position: 'relative', overflow: 'hidden' }}>
        
        {/* Typographic Watermark 70+ */}
        <div 
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            fontSize: 'min(35vw, 320px)', 
            fontFamily: 'var(--font-hero-title)', 
            color: 'rgba(225, 201, 138, 0.04)', 
            fontWeight: 800, 
            pointerEvents: 'none', 
            userSelect: 'none',
            zIndex: 1 
          }}
        >
          70+
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--champagne-gold)', fontWeight: 700 }}>
              07 — Crisis Response
            </span>
            <h2 style={{ fontFamily: 'var(--font-hero-title)', fontSize: '2.75rem', color: 'var(--ivory-white)', marginTop: '8px', marginBottom: '16px', fontWeight: 700 }}>
              Public Service in Action
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(250, 250, 247, 0.85)' }}>
              When Leadership Was Needed Most
            </p>
            <div className="gold-divider" style={{ marginTop: '20px' }}></div>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', color: 'rgba(250, 250, 247, 0.9)', lineHeight: 1.8, marginBottom: '32px' }}>
              Leadership is tested not only during political campaigns or public events, but during moments of crisis. During the COVID-19 pandemic, Mrs. Fathima Ali coordinated relief support across more than <strong>70 towns and panchayats</strong>, including the distribution of medical supplies.
            </p>

            <div style={{ borderTop: '1px solid rgba(225, 201, 138, 0.25)', borderBottom: '1px solid rgba(225, 201, 138, 0.25)', padding: '24px 0', marginBottom: '36px' }}>
              <h3 style={{ fontFamily: 'var(--font-hero-title)', fontSize: '1.6rem', color: 'var(--champagne-gold)', margin: 0, fontWeight: 700 }}>
                “Service must reach people when they need it most.”
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', textAlign: 'left' }}>
              <div style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--champagne-gold)' }}>
                <h4 style={{ color: 'var(--champagne-gold)', fontSize: '0.95rem', marginBottom: '4px' }}>Medical Distribution</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(250,250,247,0.75)', margin: 0 }}>Rapid deployment of medicines and protective gear to frontline workers.</p>
              </div>
              <div style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--champagne-gold)' }}>
                <h4 style={{ color: 'var(--champagne-gold)', fontSize: '0.95rem', marginBottom: '4px' }}>Welfare Scheme Outreach</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(250,250,247,0.75)', margin: 0 }}>Community awareness programs connecting families with government aid.</p>
              </div>
              <div style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--champagne-gold)' }}>
                <h4 style={{ color: 'var(--champagne-gold)', fontSize: '0.95rem', marginBottom: '4px' }}>Solar Light Initiatives</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(250,250,247,0.75)', margin: 0 }}>Sustainable solar lighting deployment for underserved rural habitations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 08: POLICY, PUBLIC AWARENESS & DIALOGUE
         ───────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ivory-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">08 — Public Discourse</span>
            <h2 className="section-title">Policy, Public Awareness & Dialogue</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--soft-graphite)', maxWidth: '680px', margin: '12px auto 0 auto' }}>
              Engaging With Difficult Conversations
            </p>
            <div className="gold-divider" style={{ marginTop: '20px' }}></div>
          </div>

          {/* Interactive Policy Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '32px' }}>
            {policyTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActivePolicyTopic(topic.id)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '999px',
                  backgroundColor: activePolicyTopic === topic.id ? 'var(--navy-institutional)' : 'var(--pure-white)',
                  color: activePolicyTopic === topic.id ? 'var(--ivory-white)' : 'var(--soft-graphite)',
                  border: activePolicyTopic === topic.id ? '1px solid var(--navy-institutional)' : '1px solid var(--hairline)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {topic.title}
              </button>
            ))}
          </div>

          {/* Selected Policy Detail Card */}
          {activePolicyTopic && (
            <div className="card-glass" style={{ padding: '36px', maxWidth: '750px', margin: '0 auto', borderTop: '4px solid var(--primary-gold)' }}>
              {policyTopics.filter(t => t.id === activePolicyTopic).map(topic => (
                <div key={topic.id}>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--navy-institutional)', marginBottom: '10px', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    {topic.title}
                  </h3>
                  <p style={{ fontSize: '1.02rem', color: 'var(--soft-graphite)', lineHeight: 1.7, margin: 0 }}>
                    {topic.detail}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 09: INSTITUTIONAL LEADERSHIP (ROLES GRID)
         ───────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-low)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">09 — Governance & Offices</span>
            <h2 className="section-title">Institutional Leadership</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--soft-graphite)', maxWidth: '680px', margin: '12px auto 0 auto' }}>
              Responsibilities Across Multiple Spheres
            </p>
            <div className="gold-divider" style={{ marginTop: '20px' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {rolesData.map((role) => (
              <div key={role.id} className="card-glass" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary-gold)', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                    {role.badge}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--navy-institutional)', marginBottom: '6px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                    {role.title}
                  </h3>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--navy-institutional)', marginBottom: '12px' }}>
                    {role.organization} ({role.tenure})
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--soft-graphite)', lineHeight: 1.6, marginBottom: '16px' }}>
                    {role.description}
                  </p>
                </div>
                <div style={{ paddingTop: '12px', borderTop: '1px solid var(--hairline)', fontSize: '0.82rem', color: 'var(--navy-institutional)', fontWeight: 600 }}>
                  ✦ {role.keyImpact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: DEVELOPMENT BEYOND POLITICS
         ───────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ivory-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">10 — Sustainability & Innovation</span>
            <h2 className="section-title">Development Beyond Politics</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--soft-graphite)', maxWidth: '680px', margin: '12px auto 0 auto' }}>
              Connecting Leadership With Sustainable Development
            </p>
            <div className="gold-divider" style={{ marginTop: '20px' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginBottom: '40px' }}>
            
            <div className="card-glass" style={{ padding: '32px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--surface-subtle)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Leaf size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--navy-institutional)', marginBottom: '10px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                Hydrogen Energy
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--soft-graphite)', lineHeight: 1.65, margin: 0 }}>
                Clean-energy initiatives under NAMO focusing on hydrogen solutions for industrial mobility and zero-emission transportation.
              </p>
            </div>

            <div className="card-glass" style={{ padding: '32px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--surface-subtle)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Sun size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--navy-institutional)', marginBottom: '10px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                Sustainable Alternatives
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--soft-graphite)', lineHeight: 1.65, margin: 0 }}>
                Developing cost-effective renewable energy frameworks that serve long-term economic and environmental community goals.
              </p>
            </div>

            <div className="card-glass" style={{ padding: '32px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--surface-subtle)', color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Sprout size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--navy-institutional)', marginBottom: '10px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                Goshala Management
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--soft-graphite)', lineHeight: 1.65, margin: 0 }}>
                Leading sustainable Goshala models integrating bio-agriculture and carbon-emission reduction practices.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 11 & 12 & 13: PHILOSOPHY, VISION & MISSION
         ───────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-low)' }}>
        <div className="container">
          
          {/* Philosophy Banner */}
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
            <span className="section-subtitle">11 — Leadership Philosophy</span>
            <h2 className="section-title">Service Is the Foundation</h2>
            <div className="gold-divider" style={{ margin: '16px auto 24px auto' }}></div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' }}>
              <div className="card-glass" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--navy-institutional)', fontWeight: 800, marginBottom: '6px' }}>SERVICE</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--soft-graphite)', margin: 0 }}>Leadership must remain connected to the needs of people.</p>
              </div>
              <div className="card-glass" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--navy-institutional)', fontWeight: 800, marginBottom: '6px' }}>PEOPLE</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--soft-graphite)', margin: 0 }}>Communities are not merely audiences; they are partners in development.</p>
              </div>
              <div className="card-glass" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--navy-institutional)', fontWeight: 800, marginBottom: '6px' }}>PROGRESS</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--soft-graphite)', margin: 0 }}>Every initiative should contribute toward an empowered society.</p>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--navy-institutional)', color: 'var(--ivory-white)', padding: '28px', borderRadius: '14px' }}>
              <h3 style={{ fontFamily: 'var(--font-hero-title)', fontSize: '1.4rem', color: 'var(--champagne-gold)', margin: 0, fontStyle: 'italic' }}>
                “Service is my purpose. People are my strength. Progress is our destination.”
              </h3>
            </div>
          </div>

          {/* Vision & Mission Split */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px' }}>
            
            {/* Vision */}
            <div className="card-glass" style={{ padding: '36px', borderTop: '4px solid var(--navy-institutional)' }}>
              <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--primary-gold)', fontWeight: 700 }}>
                12 — VISION
              </span>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--navy-institutional)', marginTop: '6px', marginBottom: '16px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                An Inclusive and Empowered India
              </h3>
              <p style={{ fontSize: '1.02rem', color: 'var(--soft-graphite)', lineHeight: 1.75 }}>
                Mrs. Fathima Ali envisions an India where every citizen has the opportunity to move forward with dignity. Her vision is centred on an inclusive, progressive, and empowered India, with emphasis on service, education, women's empowerment, community development, and social unity.
              </p>
              <div style={{ fontWeight: 700, color: 'var(--navy-institutional)', marginTop: '16px', fontSize: '0.95rem' }}>
                ✦ "Progress becomes meaningful when it reaches people."
              </div>
            </div>

            {/* Mission */}
            <div className="card-glass" style={{ padding: '36px', borderTop: '4px solid var(--primary-gold)' }}>
              <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--primary-gold)', fontWeight: 700 }}>
                13 — MISSION
              </span>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--navy-institutional)', marginTop: '6px', marginBottom: '16px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                Turning Commitment Into Action
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--soft-graphite)' }}>
                <li><strong style={{ color: 'var(--navy-institutional)' }}>Community Development:</strong> Supporting stronger communities.</li>
                <li><strong style={{ color: 'var(--navy-institutional)' }}>Women's Empowerment:</strong> Encouraging female participation and leadership.</li>
                <li><strong style={{ color: 'var(--navy-institutional)' }}>Public Awareness:</strong> Helping communities understand government schemes.</li>
                <li><strong style={{ color: 'var(--navy-institutional)' }}>Social Harmony:</strong> Building bridges between diverse communities.</li>
                <li><strong style={{ color: 'var(--navy-institutional)' }}>Service:</strong> Responding to practical needs through organized initiatives.</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 14: VALUES ACCORDION
         ───────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ivory-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">14 — Core Principles</span>
            <h2 className="section-title">The Values That Guide Her Work</h2>
            <div className="gold-divider" style={{ marginTop: '20px' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { num: "01", title: "COMPASSION", desc: "Empathy translated into meaningful action and direct service." },
              { num: "02", title: "INTEGRITY", desc: "Maintaining honesty, accountability, and responsibility in public life." },
              { num: "03", title: "EMPOWERMENT", desc: "Creating opportunities for people to participate, contribute, and lead." },
              { num: "04", title: "UNITY", desc: "Building bridges between communities and strengthening social relationships." },
              { num: "05", title: "PROGRESS", desc: "Working toward sustainable and meaningful advancement." }
            ].map((val, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveValue(idx)}
                className="card-glass" 
                style={{ 
                  padding: '28px', 
                  borderTop: activeValue === idx ? '4px solid var(--navy-institutional)' : '1px solid var(--hairline)',
                  cursor: 'pointer',
                  backgroundColor: activeValue === idx ? 'var(--surface-low)' : 'var(--pure-white)',
                  transition: 'all 0.25s'
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary-gold)', marginBottom: '8px' }}>{val.num}</div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--navy-institutional)', marginBottom: '8px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>{val.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--soft-graphite)', margin: 0, lineHeight: 1.6 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 15: A PROMISE TO THE PEOPLE
         ───────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-low)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header">
            <span className="section-subtitle">15 — Commitment</span>
            <h2 className="section-title">A Promise to the People</h2>
            <div className="gold-divider" style={{ marginTop: '20px' }}></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { num: "01", action: "TO LISTEN", desc: "To understand the concerns, aspirations, and voices of people." },
              { num: "02", action: "TO SERVE", desc: "To approach public responsibility with sincerity and dedication." },
              { num: "03", action: "TO EMPOWER", desc: "To encourage participation and create opportunities for individuals and communities." },
              { num: "04", action: "TO BUILD", desc: "To contribute toward stronger communities and a stronger India." }
            ].map((p) => (
              <div 
                key={p.num} 
                className="card-glass" 
                style={{ 
                  padding: '24px 32px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '24px',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-hero-title)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary-gold)' }}>
                    {p.num}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy-institutional)', margin: 0, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                      {p.action}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--soft-graphite)', margin: '4px 0 0 0' }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
                <ChevronRight size={20} style={{ color: 'var(--primary-gold)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 16: LEADERSHIP TIMELINE
         ───────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--ivory-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">16 — Chronological History</span>
            <h2 className="section-title">Leadership Timeline</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--soft-graphite)', maxWidth: '680px', margin: '12px auto 0 auto' }}>
              A Journey of Continuing Responsibility
            </p>
            <div className="gold-divider" style={{ marginTop: '20px' }}></div>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            {timelineData.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '120px 1fr', 
                  gap: '24px', 
                  paddingBottom: '32px', 
                  position: 'relative',
                  borderLeft: '2px solid var(--hairline)',
                  paddingLeft: '24px',
                  marginLeft: '60px'
                }}
              >
                {/* Timeline Dot */}
                <div style={{ position: 'absolute', left: '-7px', top: '4px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--primary-gold)' }}></div>

                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--primary-gold)' }}>
                  {item.year}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--navy-institutional)', marginBottom: '4px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--soft-graphite)', margin: 0, lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 17: BEYOND THE TITLE
         ───────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-low)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span className="section-subtitle">17 — Reflection</span>
          <h2 className="section-title">Beyond the Title</h2>
          <div className="gold-divider" style={{ margin: '16px auto 28px auto' }}></div>

          <div className="card-glass" style={{ padding: '40px', textAlign: 'left' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--navy-institutional)', fontWeight: 700, marginBottom: '12px' }}>
              Titles describe responsibility. Experience demonstrates capability.
            </p>
            <p style={{ fontSize: '1.02rem', color: 'var(--soft-graphite)', lineHeight: 1.8, marginBottom: '16px' }}>
              For more than two decades, Mrs. Fathima Ali's public journey has involved grassroots engagement, community relationships, organizational responsibilities, public awareness initiatives, crisis-response activities, and institutional roles.
            </p>
            <p style={{ fontSize: '1.02rem', color: 'var(--navy-institutional)', fontWeight: 600, lineHeight: 1.8, margin: 0 }}>
              Her profile therefore extends beyond any single designation. It represents a continuing journey of public engagement—built through relationships, responsibilities, challenges, and service.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 18: CLOSING STATEMENT & FINAL CTA
         ───────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--navy-institutional)', color: 'var(--ivory-white)', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
            
            {/* Left Narrative */}
            <div>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--champagne-gold)', fontWeight: 700 }}>
                18 — CLOSING STATEMENT
              </span>
              <h2 style={{ fontFamily: 'var(--font-hero-title)', fontSize: '2.5rem', color: 'var(--ivory-white)', marginTop: '8px', marginBottom: '20px', fontWeight: 700 }}>
                The Journey Continues
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(250, 250, 247, 0.85)', lineHeight: 1.8, marginBottom: '24px' }}>
                The story of Mrs. Fathima Ali is not defined by a single position, a single organization, or a single chapter. It is a continuing journey shaped by grassroots experience, institutional responsibility, community engagement, and a commitment to public service.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderLeft: '3px solid var(--champagne-gold)', paddingLeft: '16px', marginBottom: '32px' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--champagne-gold)' }}>Service is the purpose.</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--champagne-gold)' }}>People are the strength.</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--champagne-gold)' }}>Progress is the destination.</span>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => setActiveTab('contact')}
                  className="btn btn-saffron"
                >
                  Connect With Her <ArrowRight size={16} />
                </button>

                <button 
                  onClick={onOpenPdf}
                  className="btn btn-outline-gold"
                  style={{ backgroundColor: 'transparent', color: 'var(--ivory-white)', borderColor: 'var(--champagne-gold)' }}
                >
                  Download Press Kit PDF
                </button>
              </div>
            </div>

            {/* Right Portrait Framing */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="card-glass" style={{ maxWidth: '400px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(225, 201, 138, 0.4)' }}>
                <img src="/about_hero.png" alt="Mrs. Fathima Ali" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div style={{ padding: '20px', backgroundColor: 'var(--navy-institutional)', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-hero-title)', fontSize: '1.25rem', color: 'var(--champagne-gold)', fontWeight: 700 }}>
                    Mrs. Fathima Ali
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(250, 250, 247, 0.75)', fontStyle: 'italic', marginTop: '2px' }}>
                    Leadership. Service. Responsibility. Progress.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
