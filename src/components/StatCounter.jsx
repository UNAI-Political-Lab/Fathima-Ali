import React, { useState, useEffect } from 'react';

export default function StatCounter({ value, target, suffix: inputSuffix = '', label, icon: Icon, color = 'var(--primary-gold)' }) {
  const [count, setCount] = useState(0);

  let targetNum = 0;
  let suffix = inputSuffix;

  if (typeof target === 'number') {
    targetNum = target;
  } else if (typeof value === 'string') {
    const numericMatch = value.match(/\d+/);
    targetNum = numericMatch ? parseInt(numericMatch[0], 10) : 0;
    suffix = value.replace(/\d+/g, '');
  } else if (typeof value === 'number') {
    targetNum = value;
  }

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const steps = 30;
    const increment = targetNum / steps;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNum) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [targetNum]);

  return (
    <div style={{ textAlign: 'center' }}>
      {Icon && (
        <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'var(--surface-subtle)', border: '1px solid var(--hairline)', color: color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
          <Icon size={22} />
        </div>
      )}
      <div style={{ fontFamily: 'var(--font-hero-title)', fontWeight: 700, fontSize: '2.5rem', color: 'var(--navy-institutional)', lineHeight: 1.1, marginBottom: '4px' }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--soft-graphite)', fontWeight: 600 }}>
        {label}
      </div>
    </div>
  );
}
