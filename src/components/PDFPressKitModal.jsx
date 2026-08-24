import React from 'react';
import { X, Download, Printer, Shield, CheckCircle } from 'lucide-react';
import { rolesData } from '../data/rolesData';

export default function PDFPressKitModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(23, 36, 58, 0.8)', backdropFilter: 'blur(6px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ backgroundColor: 'var(--pure-white)', width: '100%', maxWidth: '850px', maxHeight: '90vh', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', border: '1px solid var(--hairline)' }}>
        
        {/* Modal Header */}
        <div style={{ backgroundColor: 'var(--navy-institutional)', color: 'var(--ivory-white)', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Shield size={20} style={{ color: 'var(--champagne-gold)' }} />
            <h3 style={{ color: 'var(--ivory-white)', fontSize: '1.05rem', margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
              Leadership Profile Dossier — Mrs. Fathima Ali
            </h3>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button 
              onClick={handlePrint}
              style={{ background: 'var(--champagne-gold)', color: 'var(--navy-institutional)', border: 'none', padding: '6px 14px', borderRadius: '6px', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Printer size={14} /> Print / Save PDF
            </button>
            <button 
              onClick={onClose} 
              style={{ background: 'none', border: 'none', color: 'var(--ivory-white)', cursor: 'pointer', padding: '4px' }}
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Modal Body / Dossier Document */}
        <div style={{ padding: '32px', overflowY: 'auto', backgroundColor: 'var(--ivory-white)', color: 'var(--soft-graphite)' }}>
          
          <div style={{ backgroundColor: 'var(--pure-white)', padding: '30px', borderRadius: '12px', border: '1px solid var(--hairline)', boxShadow: 'var(--shadow-sm)' }}>
            
            <div style={{ textAlign: 'center', borderBottom: '2px solid var(--primary-gold)', paddingBottom: '20px', marginBottom: '24px' }}>
              <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--primary-gold)', fontWeight: 700 }}>
                LEADERSHIP PROFILE
              </span>
              <h1 style={{ fontFamily: 'var(--font-hero-title)', color: 'var(--navy-institutional)', fontSize: '2.2rem', marginTop: '4px', marginBottom: '4px', fontWeight: 700 }}>
                Mrs. Fathima Ali
              </h1>
              <p style={{ fontWeight: 600, color: 'var(--primary-gold)', fontSize: '0.95rem', margin: '4px 0' }}>
                A Decade of Service. A Lifetime of Commitment.
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--soft-graphite)', maxWidth: '650px', margin: '8px auto 0 auto', lineHeight: 1.5 }}>
                A committed public leader with over 25 years of grassroots political engagement across Tamil Nadu, dedicated to minority welfare, women's empowerment, interfaith harmony, and inclusive community development.
              </p>
              <div style={{ fontSize: '0.82rem', color: 'var(--navy-institutional)', marginTop: '10px', fontWeight: 600 }}>
                BJP Party Enrollment No: <strong>3000107860</strong> | Degree in Sociology (Tamil, English, Hindi)
              </div>
            </div>

            {/* Section 1: Executive Biography */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ color: 'var(--navy-institutional)', borderBottom: '1px solid var(--hairline)', paddingBottom: '6px', marginBottom: '12px', fontSize: '1.05rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                Executive Biography
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--soft-graphite)' }}>
                Mrs. Fathima Ali is a Chennai-based public leader whose career reflects a sustained, multi-decade commitment to grassroots political organization, minority welfare, and inclusive community development in Tamil Nadu. Holding a degree in Sociology and fluent in Tamil, English, and Hindi, she has built her public life around direct, on-the-ground engagement with communities rather than distant policy advocacy. Over more than 25 years, she has facilitated the enrollment of over 5,000 minority members into organized political engagement across Chennai, Ramanathapuram, Kanchipuram, and Thiruvallur.
              </p>
            </div>

            {/* Section 2: Organizational Roles */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ color: 'var(--navy-institutional)', borderBottom: '1px solid var(--hairline)', paddingBottom: '6px', marginBottom: '12px', fontSize: '1.05rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                Organizational Roles & Public Offices
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {rolesData.map(role => (
                  <li key={role.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem' }}>
                    <CheckCircle size={15} style={{ color: 'var(--primary-gold)', flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <strong style={{ color: 'var(--navy-institutional)' }}>{role.title}</strong> — <span style={{ color: 'var(--soft-graphite)' }}>{role.organization}</span> ({role.tenure})
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3: Vision & Mission */}
            <div style={{ marginBottom: '24px', backgroundColor: 'var(--surface-low)', padding: '16px', borderRadius: '8px', borderLeft: '3px solid var(--champagne-gold)' }}>
              <div style={{ fontWeight: 'bold', color: 'var(--navy-institutional)', fontSize: '0.92rem', marginBottom: '4px' }}>
                Vision & Mission:
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--soft-graphite)', lineHeight: 1.5 }}>
                "To build an inclusive, progressive, and empowered India where every citizen has the opportunity to thrive with dignity."
              </div>
            </div>

            {/* Section 4: Contact & Secretariat Address */}
            <div style={{ backgroundColor: 'var(--navy-institutional)', color: 'var(--ivory-white)', padding: '16px', borderRadius: '8px', fontSize: '0.82rem' }}>
              <div style={{ fontWeight: 'bold', color: 'var(--champagne-gold)', marginBottom: '4px' }}>Official Secretariat Address:</div>
              <div>Flat No. 5B, Kothari Road, D.No.18/B, Nungambakkam, Chennai - 600 034</div>
              <div>Phone: +91 9500157786 / +91 9500164786 | Email: sathfa@gmail.com</div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
