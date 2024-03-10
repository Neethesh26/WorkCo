'use client';

import { useEffect, useRef } from 'react';
import Experience from './Experience/Experience.js';

export default function HomePage() {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
        const experience = new Experience(divRef.current);
    }
    });
      
  return <canvas ref={divRef} />;
}