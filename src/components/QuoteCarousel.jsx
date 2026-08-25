import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function QuoteCarousel() {
  const quotes = [
    {
      text: "True leadership is about listening, understanding and working together for the greater good.",
      context: "Address to State Minority Delegates"
    },
    {
      text: "Service is my purpose. People are my strength. Progress is our destination.",
      textTa: "சேவையே என் லட்சியம். மக்களே என் பலம். வளர்ச்சியே நமது இலக்கு.",
      context: "Personal Political Motto"
    },
    {
      text: "My focus has always been to convert passive communities into confident political participants and active nation builders.",
      context: "Minority Morcha Leadership Summit"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % quotes.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);

  return (
    <div style={{ color: 'var(--ivory-white)', position: 'relative' }}>
      <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
        
        <div style={{ minHeight: '110px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontFamily: 'var(--font-hero-title)', fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', lineHeight: 1.4, color: 'var(--ivory-white)', marginBottom: '14px', fontWeight: 600 }}>
            "{quotes[currentIndex].text}"
          </p>
          {quotes[currentIndex].textTa && (
            <p style={{ fontFamily: 'var(--font-tamil)', fontSize: '1.05rem', color: 'var(--champagne-gold)', marginBottom: '10px' }}>
              "{quotes[currentIndex].textTa}"
            </p>
          )}
          <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--champagne-gold)', fontWeight: 700 }}>
            — Mrs. Fathima Ali · {quotes[currentIndex].context}
          </span>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '24px' }}>
          <button 
            onClick={handlePrev} 
            aria-label="Previous Quote"
            style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(225, 201, 138, 0.3)', color: 'var(--champagne-gold)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <ChevronLeft size={18} />
          </button>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            {quotes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to quote ${idx + 1}`}
                style={{
                  width: idx === currentIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: idx === currentIndex ? 'var(--champagne-gold)' : 'rgba(255, 255, 255, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            aria-label="Next Quote" 
            style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(225, 201, 138, 0.3)', color: 'var(--champagne-gold)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}
