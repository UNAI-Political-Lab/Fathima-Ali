import React from 'react';
import { X, Calendar, MapPin, Tag } from 'lucide-react';

export default function LightboxModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div 
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justify: 'center',
        padding: '20px'
      }}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '900px',
          width: '100%',
          backgroundColor: 'var(--white)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
          position: 'relative'
        }}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(0,0,0,0.6)',
            color: 'var(--white)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={22} />
        </button>

        <div style={{ maxHeight: '60vh', overflow: 'hidden', backgroundColor: '#000' }}>
          <img 
            src={item.image} 
            alt={item.title} 
            style={{ width: '100%', height: '100%', objectFit: 'contain', maxHeight: '60vh' }}
          />
        </div>

        <div style={{ padding: '24px', backgroundColor: 'var(--cream)' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ backgroundColor: 'var(--saffron)', color: 'var(--deep-green)', fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase' }}>
              {item.category}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--charcoal)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={14} /> {item.date}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--charcoal)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={14} /> {item.location}
            </span>
          </div>

          <h3 style={{ fontSize: '1.3rem', color: 'var(--deep-green)', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
            {item.title}
          </h3>

          <p style={{ color: 'var(--charcoal)', fontSize: '0.95rem', margin: 0 }}>
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
