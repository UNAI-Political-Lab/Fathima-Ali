import React, { useState } from 'react';
import { Camera, Calendar, MapPin, Maximize2, Tag } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import LightboxModal from '../components/LightboxModal';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="gallery-page section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Visual Public Record</span>
          <h1 className="section-title">Photo & Media Gallery</h1>
          <div className="gold-divider"></div>
        </div>

        {/* Category Chips */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                backgroundColor: activeCategory === cat ? 'var(--ink)' : 'var(--bg-subtle)',
                color: activeCategory === cat ? 'var(--white)' : 'var(--charcoal)',
                border: activeCategory === cat ? '1px solid var(--ink)' : '1px solid var(--hairline)',
                padding: '8px 16px',
                borderRadius: '999px',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="card-glass"
              style={{
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                />
                
                <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(15, 23, 42, 0.7)', color: 'var(--white)', padding: '6px', borderRadius: '50%' }}>
                  <Maximize2 size={15} />
                </div>

                <div style={{ position: 'absolute', bottom: '12px', left: '12px', background: 'var(--ink)', color: 'var(--white)', fontSize: '0.7rem', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                  {item.category}
                </div>
              </div>

              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
                <div>
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3, fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--charcoal)', marginBottom: '12px', lineHeight: 1.4 }}>
                    {item.caption}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: 'var(--slate-muted)', borderTop: '1px solid var(--hairline)', paddingTop: '10px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={12} /> {item.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={12} /> {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />

      </div>
    </div>
  );
}
