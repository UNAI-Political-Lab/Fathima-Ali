import React, { useState, useEffect } from 'react';

export default function StatCounter({ value, label, icon: Icon, color = 'var(--deep-green)' }) {
  const [count, setCount] = useState(0);

  const numericMatch = value.match(/\d+/);
  const targetNum = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/g, '');

  useEffect(() => {
    let start = 0;
    const duration = 1800;
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
    <div className="card-glass" style={{ padding: '24px', textAlign: 'center', backgroundColor: 'var(--white)', border: '1px solid var(--hairline)' }}>
      <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--hairline)', color: color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px auto' }}>
        {Icon && <Icon size={22} />}
      </div>
      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.25rem', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '6px' }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--slate-muted)', fontWeight: 700 }}>
        {label}
      </div>
    </div>
  );
}
